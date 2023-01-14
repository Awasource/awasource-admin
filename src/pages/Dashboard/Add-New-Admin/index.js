import { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import RadioInput from "../../../components/UI/RadioInput/input";
import classes from "./index.module.css";

const OPTIONS = [
  {
    title: "Roles",
    option: ["Select All"],
  },
  {
    title: "Dashboard",
    option: ["Dashboard Summary", "Activity Summary", "Job Summary"],
  },
  {
    title: "Talent User Management",
    option: ["Add", "Edit", "Block", "Email", "Delete", "View/Access"],
  },
  {
    title: "Client User Management",
    option: ["Add", "Edit", "Block", "Email", "Delete", "View/Access"],
  },
  {
    title: "Admin User Management",
    option: [
      "Add",
      "Edit",
      "Block",
      "Email",
      "Delete",
      "View/Access",
      "List/View Admin user group",
      "Add Admin user group",
    ],
  },
  {
    title: "Jobs",
    option: ["Edit", "Delete", "View", "Create Job"],
  },
  {
    title: "Subscriptions",
    option: ["Edit", "Delete", "View"],
  },
  {
    title: "Transactions",
    option: ["Edit", "Delete", "View"],
  },
  {
    title: "Tests",
    option: ["Edit", "Delete", "View"],
  },
  {
    title: "Emails",
    option: ["Edit", "Delete", "View"],
  },
  {
    title: "Supports",
    option: ["Edit", "Delete", "View"],
  },
];
const AddNewAdmin = () => {
  const [payload, setPayload] = useState({});
  return (
    <div>
      <h2>Add Admin User Group</h2>
      <div className={classes.container}>
        <div>
          <label>
            User Group Name*
            <input type="text" placeholder="Customer Support" className="mt-sm" />
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
        {OPTIONS.map((item, index) => (
          <div key={index} className={classes.group}>
            <p>{item.title}</p>
            <div className={classes.checks}>
              {item.option.map((item, idx) => (
                <label key={idx}>
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className={classes.btn}>
          <Button type="white" isLink to="/dashboard/admin-management">
            Cancel
          </Button>
          <Button type="blue">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewAdmin;
