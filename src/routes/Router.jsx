import {createBrowserRouter} from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import NewsDetails from "../pages/NewsDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
  
 export const router = createBrowserRouter([
   {
     path: "/",
     Component: HomeLayout,
     children: [
       { index: true, Component: Home },
       {
         path: "category/:id",
         Component: Category,
         hydrateFallbackElement: (
           <div className="flex items-center justify-center min-h-screen">
             <span className="loading loading-bars loading-xl"></span>
           </div>
         ),
         loader: () => fetch("/public/news.json"),
       },
     ],
   },
   {
    path: "news-details/:id/",
    element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader: () => fetch("/public/news.json"),
   },
   {
     path: "auth",
     Component:AuthLayout,
     children:[
        {path:'/auth/login',Component:Login},
        {path:'/auth/register',Component:Register}
     ]
   },
   {
     path: "/*",
     element: <div>404</div>,
   },
 ]);

  