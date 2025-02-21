import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import LandingPage from "./pages/LandingPage"
import Onboarding from "./pages/Onboarding"
import JobListing from "./pages/JobListing"
import PostJob from "./pages/PostJob"
import JobPage from "./pages/JobPage"
import SavedJob from "./pages/SavedJob"
import MyJobs from "./pages/MyJobs"
import "./App.css";
import { ThemeProvider } from "./components/theme-provider"


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
        element: <Onboarding />
      },
      {
        path: "/job-listing",
        element: <JobListing />
      },
      {
        path: "/job/:id",
        element: <JobPage />
      },
      {
        path: "/post-job",
        element: <PostJob />
      },
      {
        path: "saved-job",
        element: <SavedJob />
      },
      {
        path: "/my-job",
        element: <MyJobs />
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
