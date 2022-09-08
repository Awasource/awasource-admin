import { useContext, useEffect, useState } from "react";
import classes from "./dashboard.module.css";
import { Outlet } from "react-router-dom";
import Header from "../../components/UI/Header/Header";
import Sidebar from "../../components/UI/Sidebar/Sidebar";

const DashboardLayout = () => {
  const [side, setSide] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 768) setSide(false);
  }, []);
  return (
    <>
      <Header side={side} setSide={setSide} />
      <div className={`flex ${classes.main}`}>
        <aside className="relative">
          <Sidebar side={side} setSide={setSide} />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
