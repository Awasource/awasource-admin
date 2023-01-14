import Button from "../../../components/UI/Button/Button";
import classes from "./Support.module.css";
import { SUPPORT_ARRAY } from "../../../constants";

const Support = () => {
  return (
    <div>
      <h2>Support</h2>
      <div className={`flex  mt-sm ${classes.btn}`}>
        <div className={classes.otherbutton}>
          <Button type="white">Email</Button>
          <Button type="white">Delete</Button>
        </div>
        <div>
          <input placeholder="Search Talents" />
          <Button type="yellow">Compose</Button>
        </div>
      </div>
      <div className={`mt-md ${classes.table}`}>
        <div className={classes.header}>
          <input type="checkbox" />
          <span>Title</span>
          <span>Received</span>
          <span>Author</span>
          <span>Last Seen</span>
        </div>
        <hr />
        {SUPPORT_ARRAY.map((item, i) => (
          <MAPPED_DATA key={`support-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Support;

const MAPPED_DATA = ({ title, message, sent, image, lastSeen }) => {
  return (
    <div className={classes.grid}>
      <input type="checkbox" />
      <div>
        <p>{title}</p>
        <small>{message}</small>
      </div>
      <span>{sent}</span>
      <span>{image}</span>
      <span>{lastSeen}</span>
    </div>
  );
};
