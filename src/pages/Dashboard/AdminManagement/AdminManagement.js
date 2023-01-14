import Button from "../../../components/UI/Button/Button";
import classes from "./AdminManagement.module.css";
import Edit from "../../../assets/images/icons/edit.svg";
import Delete from "../../../assets/images/icons/delete.svg";
import Archive from "../../../assets/images/icons/archive.svg";
import Mail from "../../../assets/images/icons/mail.svg";

const AdminManagement = () => {
  const ADMINS_ARRAY = [
    {
      name: "Henry Dimo",
      email: "henrydimo@awasource.com",
      lastUpdated: "Feb, 02, 2020",
      image: "HD",
    },
    {
      name: "Henry Dimo",
      email: "henrydimo@awasource.com",
      lastUpdated: "Feb, 02, 2020",
      image: "HD",
    },
    {
      name: "Henry Dimo",
      email: "henrydimo@awasource.com",
      lastUpdated: "Feb, 02, 2020",
      image: "HD",
    },
    {
      name: "Henry Dimo",
      email: "henrydimo@awasource.com",
      lastUpdated: "Feb, 02, 2020",
      image: "HD",
    },
    {
      name: "Henry Dimo",
      email: "henrydimo@awasource.com",
      lastUpdated: "Feb, 02, 2020",
      image: "HD",
    },
    {
      name: "Henry Dimo",
      email: "henrydimo@awasource.com",
      lastUpdated: "Feb, 02, 2020",
      image: "HD",
    },
    {
      name: "Henry Dimo",
      email: "henrydimo@awasource.com",
      lastUpdated: "Feb, 02, 2020",
      image: "HD",
    },
  ];
  return (
    <div>
      <h2>Admin Management</h2>
      <div className={`flex  mt-sm ${classes.btn}`}>
        <div className={classes.otherbutton}>
          <Button type="white">Email</Button>
          <Button type="white">Delete</Button>
        </div>
        <div>
          <input placeholder="Search" />
          <Button type="yellow">Create Jobs</Button>
        </div>
      </div>
      <div className={`mt-md ${classes.table}`}>
        <div className={classes.header}>
          <input type="checkbox" />
          <span>Full Name</span>
          <span>Email</span>
          <span>Last Updated</span>
          <span>Image</span>
          <span>Actions</span>
        </div>
        <hr />
        {ADMINS_ARRAY.map((item, i) => (
          <MAPPED_DATA key={`admin-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AdminManagement;

const MAPPED_DATA = ({ name, email, lastUpdated, image }) => {
  return (
    <div className={classes.grid}>
      <input type="checkbox" />
      <span>{name}</span>
      <span>{email}</span>
      <span>{lastUpdated}</span>
      <span>{image}</span>
      <div>
        <button className={`relative ${classes.edit}`}>
          <img src={Edit} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Edit Admin
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.delete}`}>
          <img src={Delete} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Delete Admin
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.archive}`}>
          <img src={Archive} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Archive Admin
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.archive}`}>
          <img src={Mail} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Email Admin
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
