import classes from "./Header.module.css";
import Message from "../../../assets/images/icons/message.svg";
import { Bell, Logo } from "../../../constants/svgs";

const Header = ({ side, setSide }) => {
  return (
    <header className={`flex ${classes.header}`}>
      <div
        className={`${classes.menu} ${side ? classes.cancel : ""}`}
        onClick={() => setSide(!side)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classes.logo}>
        <Logo color="#030659" />
      </div>
      <div className={`flex ${classes.container}`}>
        <Bell />
        <img src={Message} alt="Message" />
        <span className={classes.line}></span>
        <div className={classes.company}>
          <span className={`center-flex ${classes.checkContainer}`}>
            <span className={classes.check}></span>
          </span>
          <span>John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
