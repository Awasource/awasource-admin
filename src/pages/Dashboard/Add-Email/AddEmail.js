import { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import RadioInput from "../../../components/UI/RadioInput/input";
import classes from "./Add-Email.module.css";

const AddEmail = () => {
  const [payload, setPayload] = useState({
    name: "",
    emailType: "",
    subject: "",
    "sender email": "",
    "sender name": "",
    "reply mail": "",
    template: "",
    status: "Active",
  });
  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });

  return (
    <div>
      <h2>Email Management</h2>
      <form className={classes.form}>
        <label>
          Name*
          <input type="text" onChange={handleChange} name="name" />
        </label>
        <div className={classes.container}>
          Email Type*
          <select name="emailType" onChange={handleChange}>
            <option>Select Email type</option>
            <option>Admin</option>
            <option>Talent</option>
            <option>Client</option>
            <option>Marketing</option>
          </select>
        </div>
        <label>
          Subject*
          <input type="text" onChange={handleChange} name="subject" />
        </label>
        <div className={classes.mutiple}>
          <label>
            Sender Email Address*
            <input type="text" onChange={handleChange} name="sender email" />
          </label>
          <label>
            Sender Name*
            <input type="text" onChange={handleChange} name="sender name" />
          </label>
          <label>
            Reply Email(optional)
            <input type="text" name="reply email" onChange={handleChange} />
          </label>
        </div>
        <label className={classes.container}>
          Email Template*
          <textarea onChange={handleChange} name="template"></textarea>
        </label>
        <label>
          Email Fields*
          <input type="text" />
        </label>
        <div className={classes.radios}>
          <p>Status</p>
          <div>
            <RadioInput
              text="Active"
              value="Active"
              name="status"
              checked={payload.status === "Active"}
              onChange={(e) => {
                if (e.target.checked)
                  setPayload({ ...payload, [e.target.name]: e.target.value });
              }}
            />

            <RadioInput
              text="Inactive"
              value="Inactive"
              name="status"
              onChange={(e) => {
                if (e.target.checked)
                  setPayload({ ...payload, [e.target.name]: e.target.value });
              }}
            />
          </div>
        </div>
        <div className={classes.btn}>
          <Button type="white" isLink to="/dashboard/emails">
            Cancel
          </Button>
          <Button type="blue">Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default AddEmail;
