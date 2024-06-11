import { Navigate } from "react-router";
import AllUsers from "../Pages/AllUsers";

const appRouter = [
  {
    path: "/allUsers",
    element: <AllUsers />,
  },
  {
    path: "*",
    element: <Navigate to="/allUsers" />,
  },
];

export default appRouter;
