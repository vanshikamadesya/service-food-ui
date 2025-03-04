import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/aboutUs";
import ContactUsPage from "./pages/ContactUsPage";
import VideoPage from "./pages/VideoPage";
import ProductPage from "./pages/ProductPage";
import ContactHubPage from "./pages/ContactHubPage";
import ArticlePage from "./pages/ArticlePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/product",
        element:<ProductPage />,
      },
      {
        path: "/content",
        element: <ContactHubPage />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/video",
        element: <VideoPage />,
      }, 
      {
        path: "/article",
        element: <ArticlePage />,
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
]);

export default router;
