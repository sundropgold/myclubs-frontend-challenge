/* ================== APP ================== */

// DEPENDENCIES
// =============================================================
// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Grabs the Routes
import routes from "./config/routes.js";

// REACTDOM RENDER
// =============================================================
// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));