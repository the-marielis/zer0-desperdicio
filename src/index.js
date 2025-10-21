import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./Routes";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppRoutes />);