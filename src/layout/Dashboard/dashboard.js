import { useEffect, useState } from "react";
import classes from "./dashboard.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/UI/Header/Header";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "../../redux/store";
import PageLoading from "../../components/UI/PageLoading/PageLoading";
import { logout } from "../../redux/actions/authActions";

const DashboardLayout = () => {
  const [side, setSide] = useState(true);
  const { auth } = useSelector(store => store);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 768) setSide(false);
  }, []);

  if (!auth.isAuthenticated) {
    dispatch(logout());
    navigate("/");
    return null;
  }

  if (auth.isLoading) {
    return <PageLoading />
  }

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
