import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import HomePage from "./pages/HomePage";
import Maps from "./components/Maps";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {    
            path: "", 
            element: <HomePage/>
        },
        {    
          path: "/maps", 
          element: <Maps />
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
);

export default router;
