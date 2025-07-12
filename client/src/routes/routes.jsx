import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Uploads from "./Uploads";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import LogOut from "./LogOut";

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
      },
      {
        path: "sign-in",
        element: <SignIn />
      },
      {
        path: "sign-up",
        element: <SignUp />
      },
      {
        path: "log-out",
        element: <LogOut />
      }
    ]
  }
]

export default routes;