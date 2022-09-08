import { useRoutes } from "react-router";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import DashboardLayout from "./layout/Dashboard/dashboard";
import AdminLogin from "./pages/Auth/Login/Login";
import Verify from "./pages/Auth/Verify/Verify";
import Overview from "./pages/Dashboard/Overview/Overview";

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
          path: "/dashboard",
          element: <Overview />,
        },
      ],
    },
  ]);
};

export default Routes;
