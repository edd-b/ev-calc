// ReactDOM.render no longer supported: https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis

import { createRoot } from "react-dom/client";
import { App } from "./app";

const root = createRoot(document.getElementById("app"));
root.render(App());
