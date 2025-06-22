import App from "./App";
import Home from "./Home";
import Uploads from "./Uploads";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: null,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "uploads",
        element: <Uploads />
      }
    ]
  }
]

export default routes;