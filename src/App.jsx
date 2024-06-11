import "bootstrap/dist/css/bootstrap.min.css";

import AllUsers from "./Pages/AllUsers";
import appRouter from "./Utils/AppRoutes";
import { Form } from "react-bootstrap";
// import { RouterProvider, createBrowserRouter } from "react-router";

function App() {
  // const router = createBrowserRouter(appRouter);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <AllUsers />
    </>
  );
}

export default App;
