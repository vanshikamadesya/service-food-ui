import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import OurStories from "./components/OurStories";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { 
            path: "/", 
            element: <p>hello '/home'</p> 
        },
        { 
            path: "/story", 
            element: <OurStories/>
        },
        { 
            
            path: "/page2", 
            element: <p>hello '/page2'</p> 
        },
      ],
    },
    {
      path: "/login",
      element: "", // Add the Login component here
    },
    {
      element: "", // Define a wrapper component if needed
      children: [
        { path: "/route1", element: "" }, // Add the respective components
        { path: "/route2", element: "" },
        { path: "/route3", element: "" },
      ],
    },
  ],
  { basename: "/app" }
);

export default router;
