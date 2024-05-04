import { faker } from "@faker-js/faker";
class Employee {
    constructor({ id, name, designation, team, manager }) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.team = team;
        this.manager = manager;
    }
}

const DESIGNATIONS = [
    "Software Engineer",
    "Senior Software Engineer",
    "Software Developer",
    "Senior Software Developer",
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "Web Developer",
    "UI/UX Designer",
    "DevOps Engineer",
    "Systems Administrator",
    "Database Administrator",
    "Network Engineer",
    "QA Engineer",
    "Quality Assurance Analyst",
    "Test Automation Engineer",
    "Project Manager",
    "Technical Lead",
    "Architect",
    "Scrum Master",
    "Product Manager",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Business Analyst",
    "Technical Writer",
    "Security Engineer",
    "Ethical Hacker",
    "IT Support Specialist",
    "Systems Analyst",
    "Infrastructure Engineer",
    "Cloud Engineer",
    "IT Consultant",
    "Technology Evangelist",
    "Digital Marketing Specialist",
    "Content Strategist",
    "Cybersecurity Analyst",
    "Penetration Tester",
    "UX Researcher",
    "Data Analyst",
    "Business Intelligence Analyst",
    "IT Trainer",
    "UI Developer",
    "UX Developer",
    "IT Auditor",
    "Forensic Analyst",
    "Network Security Engineer",
    "Information Security Analyst",
    "Systems Engineer",
    "Software Architect",
    "Blockchain Developer",
    "IoT Developer",
    "Backend Engineer",
    "Frontend Engineer",
    "Systems Integrator",
    "Release Manager",
    "Technical Recruiter",
    "Human Resources Information Systems (HRIS) Manager",
];
const TEAMS = [
    "Development Team",
    "Engineering Team",
    "Software Team",
    "Product Team",
    "Quality Assurance (QA) Team",
    "Testing Team",
    "Infrastructure Team",
    "Operations Team",
    "Support Team",
    "Security Team",
    "Data Team",
    "Research and Development (R&D) Team",
    "User Experience (UX) Team",
    "User Interface (UI) Team",
    "Design Team",
    "DevOps Team",
    "Networking Team",
    "Project Management Team",
    "Scrum Team",
    "Agile Team",
    "Analytics Team",
    "Business Intelligence (BI) Team",
    "Machine Learning Team",
    "Artificial Intelligence (AI) Team",
    "Data Science Team",
    "Cloud Team",
    "Web Development Team",
    "Mobile Development Team",
    "Backend Team",
    "Frontend Team",
    "Operations and Maintenance (O&M) Team",
    "Customer Success Team",
    "Sales Team",
    "Marketing Team",
    "Human Resources (HR) Team",
    "Finance Team",
    "Legal Team",
    "Training and Development Team",
    "Documentation Team",
    "Internal IT Team",
    "Consulting Team",
    "Integration Team",
    "Innovation Team",
    "Emerging Technologies Team",
    "Vendor Management Team",
    "Change Management Team",
    "Knowledge Management Team",
    "Content Management Team",
    "Accessibility Team",
    "Localization Team",
    "Community Management Team",
    "Event Management Team",
    "Strategy Team",
    "Partnership Team",
];
const getRandomNumber = (maxLimit) => {
    return Math.floor(Math.random() * maxLimit);
};

const generateDumyEmployee = (managers) => {
    const id = faker.string.uuid();

    const randomNumber = getRandomNumber(3);

    const designation = DESIGNATIONS[getRandomNumber(DESIGNATIONS.length)];
    const name = faker.internet.userName();
    const team = TEAMS[getRandomNumber(TEAMS.length)];
    const manager = managers[getRandomNumber(managers.length)];

    if (randomNumber === 2 || managers.length === 0) {
        managers.push(id);
    }
    const employee = new Employee({
        id,
        name,
        designation,
        team,
        manager,
    });

    return employee;
};

const createDummyEmployeeList = (count) => {
    let Employees = [];
    let managers = [];
    for (let i = 0; i < count; i++) {
        const employee = generateDumyEmployee(managers);
        Employees.push(employee);
    }
    return Employees;
};

export { generateDumyEmployee, createDummyEmployeeList };
