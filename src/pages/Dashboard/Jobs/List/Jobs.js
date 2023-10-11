import Button from "../../../../components/UI/Button/Button";
import classes from "./Jobs.module.css";
import Edit from "../../../../assets/images/icons/edit.svg";
import Delete from "../../../../assets/images/icons/delete.svg";
import Archive from "../../../../assets/images/icons/archive.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Jobs = () =>
{
  const JOBS_ARRAY = {
    Active: [{
      job: "Product Lead",
      company: "Gidimo",
      location: "Wuse 2, Abuja",
      duration: "Full time",
      time: "45 mins ago",
      price: "₦450,000",
      candidates: "3",
      status: "Active",
    },
    {
      job: "Product Lead",
      company: "Gidimo",
      location: "Wuse 2, Abuja",
      duration: "Full time",
      time: "45 mins ago",
      price: "₦450,000",
      candidates: "3",
      status: "Active",
    }],
    Applied: [],
    Archived: [],
    Completed: [{
      job: "Product Lead",
      company: "Gidimo",
      location: "Wuse 2, Abuja",
      duration: "Full time",
      time: "45 mins ago",
      price: "₦480,000",
      candidates: "3",
      status: "Completed",
    }]
  };

  const [currentPage, setCurrentPage] = useState("Active");

  return (
    <div>
      <h2>Jobs</h2>
      <div className={`flex  mt-sm ${classes.btn}`}>
        {Object.keys(JOBS_ARRAY).map((item, i) => (
          <button
            key={`btn-${i}`}
            onClick={() => setCurrentPage(item)}
            className={currentPage === item ? classes.active : ""}
          >
            {item} &nbsp; {JOBS_ARRAY[item].length}
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
        {
          JOBS_ARRAY[currentPage].length > 0 ?

            JOBS_ARRAY[currentPage].map(
              (
                { job, company, location, duration, time, price, candidates },
                i
              ) => (
                <Link
                  className={classes.grid}
                  key={`job-${i}`}
                  to="/dashboard/jobs/12334"
                >
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
                </Link>
              )
            ) : (
              <p className="text-center py-4">No jobs found</p>
            )}
      </div>
    </div>
  );
};

export default Jobs;
