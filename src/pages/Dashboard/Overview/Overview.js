import { useState } from "react";
import { Link } from "react-router-dom";
import { DASHBOARD_ACTIVIY_SUMMARY, DASHBOARD_CARDS } from "../../../constants";
import classes from "./Overview.module.css";

const Overview = () => {
  return (
    <div>
      <h2 className="mb-md">Dashboard</h2>
      <div className={classes.grid}>
        {DASHBOARD_CARDS.map((item, i) => (
          <SummaryCard key={`summary-${i}`} {...item} />
        ))}
      </div>
      <Noitifications />
    </div>
  );
};

export default Overview;

const SummaryCard = ({ name, image, count, color }) => (
  <div className={`flex ${classes.summary} ${classes[color]}`}>
    <div>
      <p>{name}</p>
      <hr />
      <p className={`subtitle`}>{count}</p>
    </div>
    <div className={classes.img}>
      <img src={image} alt={name} />
    </div>
  </div>
);

const Noitifications = () => {
  const [summaryType, setSummaryType] = useState("activity");
  return (
    <div className={`mt-md ${classes.notification}`}>
      <div className={`mb-sm ${classes.btn}`}>
        <button
          onClick={() => setSummaryType("activity")}
          className={summaryType === "activity" ? classes.active : ""}
        >
          Activity Summary
        </button>
        <button
          onClick={() => setSummaryType("job")}
          className={summaryType === "job" ? classes.active : ""}
        >
          Job Summary
        </button>
      </div>
      <hr />
      <div className="mt-md">
        {DASHBOARD_ACTIVIY_SUMMARY.map((item, i) => (
          <div key={`activity-${i}`} className={`flex ${classes.activity}`}>
            <p>{item.message}</p>
            <p>{item.time}</p>
          </div>
        ))}
      </div>
      <Link to="/" className={classes.link}>See all</Link>
    </div>
  );
};
