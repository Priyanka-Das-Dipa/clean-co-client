import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About"
import Contact from "../pages/Contact"
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "about",
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }

]);
export default routes;
