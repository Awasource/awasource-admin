import { useRoutes } from "react-router";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import DashboardLayout from "./layout/Dashboard/dashboard";
import WelcomeLayout from "./layout/Welcome/welcome";
import AdminLogin from "./pages/Auth/Login/Login";
import Verify from "./pages/Auth/Verify/Verify";
import AddEmail from "./pages/Dashboard/Add-Email/AddEmail";
import AddNewAdmin from "./pages/Dashboard/Add-New-Admin";
import AdminManagement from "./pages/Dashboard/AdminManagement/AdminManagement";
import Clients from "./pages/Dashboard/Clients/Clients";
import Emails from "./pages/Dashboard/Emails/Emails";
import JobDetails from "./pages/Dashboard/Job-Details";
import Jobs from "./pages/Dashboard/Jobs/Jobs";
import Overview from "./pages/Dashboard/Overview/Overview";
import Support from "./pages/Dashboard/Support/Support";
import Talents from "./pages/Dashboard/Talents/Talents";
import Error404 from "./pages/Error/404";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "/", element: <AdminLogin /> },
        {
          path: "/2fa",
          element: <Verify />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard/overview",
          element: <Overview />,
        },
        {
          path: "/dashboard/jobs",
          element: <Jobs />,
        },
        {
          path: "/dashboard/jobs/:id",
          element: <JobDetails />,
        },
        {
          path: "/dashboard/admin-management",
          element: <AdminManagement />,
        },
        {
          path: "/dashboard/add-new-admin",
          element: <AddNewAdmin />,
        },
        {
          path: "/dashboard/users/talents",
          element: <Talents />,
        },
        {
          path: "/dashboard/users/clients",
          element: <Clients />,
        },
        {
          path: "/dashboard/emails",
          element: <Emails />,
        },
        {
          path: "/dashboard/add-email",
          element: <AddEmail />,
        },
        {
          path: "/dashboard/support",
          element: <Support />,
        },
      ],
    },
    {
      path: "/*",
      element: (
        <WelcomeLayout>
          <Error404 />,
        </WelcomeLayout>
      ),
    },
  ]);
};

export default Routes;
