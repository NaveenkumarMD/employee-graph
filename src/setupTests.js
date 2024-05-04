import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { mockReactFlow } from "./reactFlow-test.utils";
mockReactFlow();
import { Crypto } from "@peculiar/webcrypto";

global.crypto = new Crypto();
