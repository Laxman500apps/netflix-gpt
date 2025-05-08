import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Browse from "../Body/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default appRouter;
