import { useState } from "react";
import Button from "../../../../components/UI/Button/Button";
import RadioInput from "../../../../components/UI/RadioInput/input";
import classes from "./index.module.css";

const AddNewAdmin = () =>
{
  const [payload, setPayload] = useState({});

  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });


  return (
    <div>
      <h2>Add Admin</h2>
      <div className={classes.container}>
        <div className={classes["form-group"]}>
          <label>
            First Name*
            <input type="text" placeholder="Jane" className="mt-sm" />
          </label>
          <label>
            Last Name*
            <input type="text" placeholder="Jane" className="mt-sm" />
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label>
            Company Name*
            <input type="text" placeholder="Awasource" className="mt-sm" />
          </label>
          <label>
            Email Address*
            <input type="text" placeholder="Janedoe@awasource.com" className="mt-sm" />
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label>
            Phone Number*
            <input type="text" placeholder="Phone Number" className="mt-sm" />
          </label>
          <label>
            User Admin Group*
            <select name="emailType" onChange={handleChange} className="mt-sm">
              <option>None</option>
              <option>Admin</option>
              <option>Talent</option>
              <option>Client</option>
              <option>Marketing</option>
            </select>
          </label>
        </div>
        <div className={classes.radios}>
          <p>Status</p>
          <div>
            <RadioInput
              text="Active"
              value="Active"
              name="status"
              checked={payload.status === "Active"}
              onChange={(e) =>
              {
                if (e.target.checked)
                  setPayload({ ...payload, [e.target.name]: e.target.value });
              }}
            />

            <RadioInput
              text="Inactive"
              value="Inactive"
              name="status"
              onChange={(e) =>
              {
                if (e.target.checked)
                  setPayload({ ...payload, [e.target.name]: e.target.value });
              }}
            />
          </div>
        </div>
        <div className={classes["form-group"]}>
          <label>
            Password*
            <input type="text" placeholder="Password" className="mt-sm" />
          </label>
          <label>
            Confirm Password*
            <input type="text" placeholder="Confirm Password" className="mt-sm" />
          </label>
        </div>

        <div className={classes.btn}>
          <Button type="white" isLink to="/dashboard/admin/admin-list">
            Cancel
          </Button>
          <Button type="yellow">Save</Button>
          <Button type="blue">Save and notify</Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewAdmin;
