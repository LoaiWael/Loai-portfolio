import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts";
import HomePage from "../pages/HomePage";
import WorkshopPage from "../pages/WorkshopPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'workshop',
        element: <WorkshopPage />
      }
    ]
  }
])

export default router