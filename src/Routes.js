import { useRoutes } from "react-router";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import DashboardLayout from "./layout/Dashboard/dashboard";
import AdminLogin from "./pages/Auth/Login/Login";
import Verify from "./pages/Auth/Verify/Verify";
import AdminManagement from "./pages/Dashboard/AdminManagement/AdminManagement";
import Clients from "./pages/Dashboard/Clients/Clients";
import Jobs from "./pages/Dashboard/Jobs/Jobs";
import Overview from "./pages/Dashboard/Overview/Overview";
import Talents from "./pages/Dashboard/Talents/Talents";

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
          path: "/dashboard/admin-management",
          element: <AdminManagement />,
        },
        {
          path: "/dashboard/users/talents",
          element: <Talents />,
        },
        {
          path: "/dashboard/users/clients",
          element: <Clients />,
        },
      ],
    },
  ]);
};

export default Routes;
