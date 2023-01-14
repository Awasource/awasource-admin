import classes from "./welcome.module.css";
import { Logo } from "../../constants";

const WelcomeLayout = ({ children }) => {
  return (
    <main className={classes.main}>
      <div className={`mt-md mb-md ${classes.logo}`}>
        <Logo color={"#ffffff"} />
      </div>
      <br />
      <div className={classes.container}>{children}</div>
    </main>
  );
};

export default WelcomeLayout;
