import classes from "./AuthLayout.module.css";
import { Outlet } from "react-router";
import SmallLogo from "../../assets/images/brand/logo.png";
import { Logo } from "../../constants/svgs";

const AuthLayout = () => {
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
