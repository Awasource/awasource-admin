import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  const [userDropdown, setUserDropdown] = useState(false);
  const [adminDropdown, setAdminDropdown] = useState(false);
  let navigate = useNavigate();
  let { pathname } = useLocation();
  const logout = () => {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={`${classes.main} ${side ? classes.wide : ""}`}>
      <span
        className={`center-flex ${classes.sidearrow} ${side ? classes.rotate : ""
          }`}
        onClick={() => setSide(!side)}
      >
        <SideBarArrow />
      </span>
      <ul>
        <li className={classes.fill}>
          <NavLink to="/dashboard/overview">
            <Dashboard />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li
          className={`${classes.users} ${classes.fill} ${pathname.includes("users") ? classes.activeLink : ""
            }`}
        >
          <div onClick={() => setUserDropdown(!userDropdown)}>
            <UserManagement />
            <p>User Management</p>
            <span className={userDropdown ? classes.up : classes.down}>
              <SideBarArrow />
            </span>
          </div>
          {userDropdown && (
            <div>
              <NavLink
                to="/dashboard/users/talents"
                type="fill"
                className={pathname.includes("talents") ? classes.talents : ""}
              >
                <span>Talents</span>
              </NavLink>
              <NavLink
                to="/dashboard/users/clients"
                type="fill"
                className={pathname.includes("clients") ? classes.clients : ""}
              >
                <span>Clients</span>
              </NavLink>
            </div>
          )}
        </li>
        <li className={`${classes.users} ${classes.fill} ${pathname.includes("admin") ? classes.activeLink : ""
          }`}>
          <div onClick={() => setAdminDropdown(!adminDropdown)}>
            <AdminManagement />
            <p>Admin Management</p>
            <span className={adminDropdown ? classes.up : classes.down}>
              <SideBarArrow />
            </span>
          </div>
          {adminDropdown && (
            <div>
              <NavLink
                to="/dashboard/admin/admin-list"
                type="fill"
                className={pathname.includes("admin-list") ? classes.talents : ""}
              >
                <span>List Admins</span>
              </NavLink>
              <NavLink
                to="/dashboard/admin/user-group"
                type="fill"
                className={pathname.includes("user-group") ? classes.clients : ""}
              >
                <span>User Groups</span>
              </NavLink>
            </div>
          )}
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
          <NavLink to="/dashboard/emails">
            <Emails />
            <span>Emails</span>
          </NavLink>
        </li>
        <li className={classes.fill}>
          <NavLink to="/dashboard/support" type="fill">
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
