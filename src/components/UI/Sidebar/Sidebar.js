import { NavLink, useNavigate } from "react-router-dom";
import {
  Dashboard,
  UserManagement,
  AdminManagement,
  Jobs,
  Subscriptions,
  Logout,
  Transactions,
  Tests,
  Emails,
  Support,
  SideBarArrow,
} from "../../../constants/svgs";
import classes from "./Sidebar.module.css";

const Sidebar = ({ side, setSide }) => {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className={`${classes.main} ${side ? classes.wide : ""}`}>
      <span
        className={`center-flex ${classes.sidearrow} ${
          side ? classes.rotate : ""
        }`}
        onClick={() => setSide(!side)}
      >
        <SideBarArrow />
      </span>
      <ul>
        <li className={classes.fill}>
          <NavLink to="/dashboard">
            <Dashboard />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className={classes.fill}>
          <NavLink to="/job-feed" type="fill">
            <UserManagement />
            <span>User Management</span>
          </NavLink>
        </li>
        <li className={classes.fill}>
          <NavLink to="/personal-profile">
            <AdminManagement />
            <span>Admin Management</span>
          </NavLink>
        </li>
        <li className={classes.fill}>
          <NavLink to="/dashboard/jobs">
            <Jobs />
            <span>Jobs</span>
          </NavLink>
        </li>
        <li className={classes.fill}>
          <NavLink to="/company-profile">
            <Subscriptions />
            <span>Subscriptions</span>
          </NavLink>
        </li>
        <li className={classes.stroke}>
          <NavLink to="/#1">
            <Transactions />
            <span>Transactions</span>
          </NavLink>
        </li>
        <li className={classes.stroke}>
          <NavLink to="/#1">
            <Tests />
            <span>Tests</span>
          </NavLink>
        </li>
        <li className={classes.fill}>
          <NavLink to="/#1">
            <Emails />
            <span>Emails</span>
          </NavLink>
        </li>
        <li className={classes.fill}>
          <NavLink to="/#1" type="stroke">
            <Support />
            <span>Support</span>
          </NavLink>
        </li>
        <li className={classes.stroke}>
          <button onClick={logout}>
            <Logout />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
