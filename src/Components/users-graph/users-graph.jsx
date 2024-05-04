import { Box } from "@mui/material";
import { filterEmployees, getInitialNodesAndEdges } from "./nodes-edges.js";
import ELK from "elkjs/lib/elk.bundled.js";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
    useReactFlow,
} from "reactflow";

import "reactflow/dist/style.css";
import UserNode from "./user-node.jsx";

const elk = new ELK();

const elkOptions = {
    "elk.algorithm": "layered",
    "elk.layered.spacing.nodeNodeBetweenLayers": "200",
    "elk.spacing.nodeNode": "150",
};

const getLayoutedElements = (nodes, edges, options = {}) => {
    const isHorizontal = options?.["elk.direction"] === "RIGHT";
    const graph = {
        id: "root",
        layoutOptions: options,
        children: nodes.map((node) => ({
            ...node,
            // Adjust the target and source handle positions based on the layout
            // direction.
            targetPosition: isHorizontal ? "left" : "top",
            sourcePosition: isHorizontal ? "right" : "bottom",

            // Hardcode a width and height for elk to use when layouting.
            width: 150,
            height: 50,
        })),
        edges: edges,
    };

    return elk
        .layout(graph)
        .then((layoutedGraph) => ({
            nodes: layoutedGraph.children.map((node) => ({
                ...node,
                // React Flow expects a position property on the node instead of `x`
                // and `y` fields.
                position: { x: node.x, y: node.y },
            })),

            edges: layoutedGraph.edges,
        }))
        .catch(console.error);
};
function LayoutFlow(props) {
    const {
        employees,
        primaryValues,
        setPrimaryValues,
        setFilteredEmployees,
        searchString,
        selectedTeam,
    } = props;
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [initialNodes, setInitialNodes] = useState([]);
    const [initialEdges, setInitialEdges] = useState([]);

    const { fitView } = useReactFlow();
    const nodeTypes = useMemo(() => ({ "user-node": UserNode }), []);
    const onConnect = useCallback(
        (params) => {
            const filteredEmployees = filterEmployees(params, primaryValues);
            setPrimaryValues(filteredEmployees);
            setFilteredEmployees(searchString, selectedTeam, filteredEmployees);
            fetch("/api/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(filteredEmployees),
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        [edges, nodes, employees]
    );
    const layoutItems = (ns, es, opts) => {
        getLayoutedElements(ns, es, opts).then(
            ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
                setNodes(layoutedNodes);
                setEdges(layoutedEdges);

                window.requestAnimationFrame(() => fitView());
            }
        );
    };
    const onLayout = useCallback(
        ({ direction, useInitialNodes = false }) => {
            const opts = { "elk.direction": direction, ...elkOptions };
            const ns = useInitialNodes ? initialNodes : nodes;
            const es = useInitialNodes ? initialEdges : edges;
            layoutItems(ns, es, opts);
        },
        [nodes, edges]
    );

    useEffect(() => {
        const opts = { "elk.direction": "DOWN", ...elkOptions };
        const [initialNodes, initialEdges] = getInitialNodesAndEdges(employees);
        setInitialEdges(initialEdges);
        setInitialNodes(initialNodes);
        layoutItems(initialNodes, initialEdges, opts);
    }, [employees]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onConnect={onConnect}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
        ></ReactFlow>
    );
}

const UserGraph = (props) => {
    return (
        <Box sx={{ width: "70vw", height: "90vh" }}>
            <ReactFlowProvider>
                <LayoutFlow {...{ ...props }} />
            </ReactFlowProvider>
        </Box>
    );
};
export default UserGraph;
