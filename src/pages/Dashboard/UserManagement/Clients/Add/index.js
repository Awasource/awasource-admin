import { useState } from "react";
import Button from "../../../../../components/UI/Button/Button";
import RadioInput from "../../../../../components/UI/RadioInput/input";
import classes from "./index.module.css";

const AddNewClient = () =>
{
  const [payload, setPayload] = useState({});

  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });


  return (
    <div>
      <h2>Add Client</h2>
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
            Work Email*
            <input type="email" placeholder="Janedoe@awasource.com" className="mt-sm" />
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label>
            Position*
            <select name="emailType" onChange={handleChange} className="mt-sm">
              <option>None</option>
              <option>Project Manager</option>
            </select>
          </label>
          <label>
            Phone Number*
            <input type="text" placeholder="Phone Number" className="mt-sm" />
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label>
            Facebook Url
            <input type="text" placeholder="Facebook Url" className="mt-sm" />
          </label>
          <label>
            Twitter Url
            <input type="text" placeholder="Twitter Url" className="mt-sm" />
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label>
            LinkedIn Url
            <input type="text" placeholder="LinkedIn Url" className="mt-sm" />
          </label>
          <label>
            Instagram Url
            <input type="text" placeholder="Instagram Url" className="mt-sm" />
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label>
            Summary
            <textarea placeholder="I am lorem ipsum etc etc" className="mt-sm" rows={5} />
          </label>
          <label>
            pic
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
            Year of Establishment
            <input type="date" placeholder="DD/MM/YYYY" className="mt-sm" />
          </label>
          <label>
            Company Website Url
            <input type="text" placeholder="website url" className="mt-sm" />
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label className="col-span-2">
            Company address
            <input type="text" placeholder="Company address" className="mt-sm" />
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label>
            CAC number*
            <input type="text" placeholder="CAC number" className="mt-sm" />
          </label>
          <label>
            Driver's license number*
            <input type="text" placeholder="Driver's license number" className="mt-sm" />
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label>
            National Identification Number*
            <input type="text" placeholder="National Identification Number" className="mt-sm" />
          </label>
          <label>
            International passport number*
            <input type="text" placeholder="International passport number" className="mt-sm" />
          </label>
        </div>
        <div className={classes["form-group"]}>
          <label>
            Employee Identification number*
            <input type="text" placeholder="Employee Identification number" className="mt-sm" />
          </label>
          <label>
            Tax Identification Number*
            <input type="text" placeholder="Tax Identification Number" className="mt-sm" />
          </label>
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

export default AddNewClient;
