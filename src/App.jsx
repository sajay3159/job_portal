import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import LandingPage from "./pages/LandingPage"
import Onboarding from "./pages/Onboarding"
import JobListing from "./pages/JobListing"
import PostJob from "./pages/PostJob"
import JobPage from "./pages/JobPage"
import SavedJob from "./pages/SavedJob"
import MyJobs from "./pages/MyJobs"
import ProtectedRoutes from "./components/ProtectedRoutes"
import { ThemeProvider } from "./components/ThemeProvider"
import "./App.css";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoutes>
            <Onboarding />
          </ProtectedRoutes>
        )
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoutes>
            <JobListing />
          </ProtectedRoutes>
        )
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoutes>
            <JobPage />
          </ProtectedRoutes>
        )
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoutes>
            <PostJob />
          </ProtectedRoutes>
        )
      },
      {
        path: "saved-jobs",
        element: (
          <ProtectedRoutes>
            <SavedJob />
          </ProtectedRoutes>
        )
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoutes>
            < MyJobs />
          </ProtectedRoutes>
        )
      }
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
