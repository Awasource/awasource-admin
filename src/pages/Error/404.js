import classes from "./404.module.css";
import { StanOpenHands } from "../../constants/stan";
import Button from "../../components/UI/Button/Button";

const Error404 = () => {
  return (
    <div className={classes.main}>
      <StanOpenHands shirtColor={"#030659"} />
      <h2 className="mt-sm mb-md">Sorry, you&#8217;re in the wrong place</h2>
      <p className="mb-sm t-14">
        This page does not exist. Click below to get back
      </p>
      <Button isLink to={"/"} type="yellow">
        Return Home
      </Button>
    </div>
  );
};

export default Error404;
