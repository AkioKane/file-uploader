import App from "./App";
import Home from "./Home";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: null,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]

export default routes;