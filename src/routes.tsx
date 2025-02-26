import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import ContentHub from "./components/ContactHub";

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
            path: "/contact", 
            element: <ContentHub/>
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
