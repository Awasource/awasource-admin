import Button from "../../../components/UI/Button/Button";
import classes from "./Jobs.module.css";
import Edit from "../../../assets/images/icons/edit.svg";
import Delete from "../../../assets/images/icons/delete.svg";
import Archive from "../../../assets/images/icons/archive.svg";
import { useState } from "react";

const Jobs = () => {
  const BTN_ARRAY = [
    {
      text: "Active",
      count: 0,
    },
    {
      text: "Applied",
      count: 0,
    },
    {
      text: "Archived",
      count: 0,
    },
    {
      text: "Completed",
      count: 0,
    },
  ];
  const JOBS_ARRAY = [
    {
      job: "Product Lead",
      company: "Gidimo",
      location: "Wuse 2, Abuja",
      duration: "Full time",
      time: "45 mins ago",
      price: "₦450,000",
      candidates: "3",
    },
    {
      job: "Product Lead",
      company: "Gidimo",
      location: "Wuse 2, Abuja",
      duration: "Full time",
      time: "45 mins ago",
      price: "₦450,000",
      candidates: "3",
    },
    {
      job: "Product Lead",
      company: "Gidimo",
      location: "Wuse 2, Abuja",
      duration: "Full time",
      time: "45 mins ago",
      price: "₦450,000",
      candidates: "3",
    },
  ];
  const [currentPage, setCurrentPage] = useState("Active");
  return (
    <div>
      <h2>Jobs</h2>
      <div className={`flex  mt-sm ${classes.btn}`}>
        {BTN_ARRAY.map((item, i) => (
          <button
          key={`btn-${i}`}
            onClick={() => setCurrentPage(item.text)}
            className={currentPage === item.text ? classes.active : ""}
          >
            {item.text} {item.count}
          </button>
        ))}
        <Button type="yellow">Create Jobs</Button>
        <input placeholder="Search" />
      </div>
      <div className={`mt-md ${classes.table}`}>
        <div className={classes.header}>
          <span>Title</span>
          <span>Location</span>
          <span>Type</span>
          <span>Date</span>
          <span>Salary</span>
          <span>Candidate</span>
          <span>Actions</span>
        </div>
        <hr />
        {JOBS_ARRAY.map(
          ({ job, company, location, duration, time, price, candidates }, i) => (
            <div className={classes.grid} key={`job-${i}`}>
              <div>
                <h3>{job}</h3>
                <p>{company}</p>
              </div>
              <span>{location}</span>
              <span>{duration}</span>
              <span>{time}</span>
              <span>{price}</span>
              <span>{candidates}</span>
              <div>
                <button>
                  <img src={Edit} alt="" />
                </button>
                <button>
                  <img src={Delete} alt="" />
                </button>
                <button>
                  <img src={Archive} alt="" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Jobs;
