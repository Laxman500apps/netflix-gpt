import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentiation/Login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default appRouter;
