import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AiSalesCoach from "../Pages/Home/AiSalesCoach/AiSalesCoach";
import Courses from "../Pages/Home/Courses/Courses";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/aiSalesCoach",
            element:<AiSalesCoach/>
        },
        {
            path:"/courses",
            element:<Courses/>
        },
        {
            path:"/",
            element:<Home/>
        },
      ]
    },
  ]);
