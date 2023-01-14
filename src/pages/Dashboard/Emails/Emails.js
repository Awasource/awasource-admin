import Button from "../../../components/UI/Button/Button";
import { ALL_EMAILS } from "../../../constants";
import classes from "./Emails.module.css";
import Edit from "../../../assets/images/icons/edit.svg";
import Delete from "../../../assets/images/icons/delete.svg";
import Archive from "../../../assets/images/icons/archive.svg";
import { useState } from "react";
import { useNavigate } from "react-router";

const Emails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Email Management</h2>
      <div className={`mt-md ${classes.table}`}>
        <div className={`flex mb-md ${classes.btn}`}>
          <div className={classes.otherbutton}>
            <Button type="white">Activate</Button>
            <Button type="white">Delete</Button>
          </div>
          <div>
            <input placeholder="Search" />
            <Button
              type="yellow"
              onClick={() => navigate("/dashboard/add-email")}
            >
              Add Email
            </Button>
          </div>
        </div>
        <div className={classes.header}>
          <input type="checkbox" />
          <span>Name</span>
          <span>Subject</span>
          <span>Type</span>
          <span>Status</span>
          <span>Actions</span>
        </div>
        <hr />
        {ALL_EMAILS.map((item, i) => (
          <MAPPED_DATA key={`admin-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
};

const MAPPED_DATA = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className={classes.grid}>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <div>
        <p>{item.title}</p>
      </div>
      <p className={classes.subject}>{item.subject}</p>
      <p>{item.type}</p>
      <p>A</p>
      <div>
        <button className={`relative ${classes.edit}`}>
          <img src={Edit} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Edit Email
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.delete}`}>
          <img src={Delete} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Delete Email
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.archive}`}>
          <img src={Archive} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Archive Email
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Emails;
