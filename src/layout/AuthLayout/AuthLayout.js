import classes from "./AuthLayout.module.css";
import { Outlet, useLocation, useNavigate } from "react-router";
import SmallLogo from "../../assets/images/brand/logo.png";
import { Logo } from "../../constants/svgs";
import { useDispatch, useSelector } from "../../redux/store";
import { useEffect } from "react";
import { logout } from "../../redux/actions/authActions";

const AuthLayout = () => {
  const { auth } = useSelector(store => store);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedIn = new URLSearchParams(location.search).get('logged-in');
    if (auth.isAuthenticated) {
      if (loggedIn === 'false') {
        dispatch(logout());
        navigate("/");
      }
      navigate("/dashboard/overview");
    }
  }, []);

  return (
    <main className={classes.main}>
      <div className={`mt-md mb-md ${classes.logo}`}>
        <Logo color={"#ffffff"} />
      </div>
      <br />
      <div className={classes.container}>
        <div className={`center-flex ${classes["small-logo"]}`}>
          <img src={SmallLogo} alt="logo" />
        </div>
        <Outlet />
        <small>Copyright © 2022. All rights by Anglitica</small>
      </div>
    </main>
  );
};

export default AuthLayout;
