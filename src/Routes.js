import { useRoutes } from "react-router";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import DashboardLayout from "./layout/Dashboard/dashboard";
import WelcomeLayout from "./layout/Welcome/welcome";
import AdminLogin from "./pages/Auth/Login/Login";
import Verify from "./pages/Auth/Verify/Verify";
import AddEmail from "./pages/Dashboard/Add-Email/AddEmail";
import AddNewAdmin from "./pages/Dashboard/AdminManagement/Add";
import AdminManagement from "./pages/Dashboard/AdminManagement/List/AdminManagement";
import Clients from "./pages/Dashboard/UserManagement/Clients/List/Clients";
import Emails from "./pages/Dashboard/Emails/Emails";
import JobDetails from "./pages/Dashboard/Jobs/Job-Details";
import Jobs from "./pages/Dashboard/Jobs/List/Jobs";
import Overview from "./pages/Dashboard/Overview/Overview";
import Support from "./pages/Dashboard/Support/Support";
import Talents from "./pages/Dashboard/UserManagement/Talents/List/Talents";
import Error404 from "./pages/Error/404";
import UserGroupManagement from "./pages/Dashboard/UserGroupManagement/List/UserGroupManagement";
import AddNewGroup from "./pages/Dashboard/UserGroupManagement/Add";
import AddNewClient from "./pages/Dashboard/UserManagement/Clients/Add";
import AddNewTalent from "./pages/Dashboard/UserManagement/Talents/Add";

const Routes = () =>
{
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
          path: "/dashboard/admin/admin-list",
          element: <AdminManagement />,
        },
        {
          path: "/dashboard/admin/admin-list/add",
          element: <AddNewAdmin />,
        },
        {
          path: "/dashboard/admin/user-group",
          element: <UserGroupManagement />,
        },
        {
          path: "/dashboard/admin/user-group/add",
          element: <AddNewGroup />,
        },
        {
          path: "/dashboard/users/talents",
          element: <Talents />,
        },
        {
          path: "/dashboard/users/talents/add",
          element: <AddNewTalent />,
        },
        {
          path: "/dashboard/users/clients",
          element: <Clients />,
        },
        {
          path: "/dashboard/users/clients/add",
          element: <AddNewClient />,
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
