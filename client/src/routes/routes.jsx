import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Uploads from "./Uploads";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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