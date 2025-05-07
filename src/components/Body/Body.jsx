import React from "react";
import { RouterProvider } from "react-router-dom";
import appRouter from "../Routes/Routes";

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
