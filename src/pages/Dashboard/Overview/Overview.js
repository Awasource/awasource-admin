import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DASHBOARD_CARDS } from "../../../constants";
import classes from "./Overview.module.css";
import { useDispatch, useSelector } from "../../../redux/store";
import PageLoading from "../../../components/UI/PageLoading/PageLoading";
import { getMetrics } from "../../../redux/actions/dashboardActions";
import { DASHBOARD_ACTIVITY_SUMMARY, DASHBOARD_JOB_SUMMARY } from "../../../__mock__";

const Overview = () =>
{
  const { dashboard } = useSelector(store => store);

  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getMetrics());
  }, [])

  if (dashboard.isLoading)
  {
    return <PageLoading />
  }

  return (
    <div>
      <h2 className="mb-md">Dashboard</h2>
      <div className={classes.grid}>
        {DASHBOARD_CARDS.map((item, i) => (
          <SummaryCard key={`summary-${i}`} {...item} count={dashboard?.metrics?.[item.name.toLowerCase()] ?? 0} />
        ))}
      </div>
      <Notifications />
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

const Notifications = () =>
{
  const [summaryType, setSummaryType] = useState("activity");
  const summaryList = {
    activity: DASHBOARD_ACTIVITY_SUMMARY,
    job: DASHBOARD_JOB_SUMMARY,
  }

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
        {summaryList[summaryType].map((item, i) => (
          <div key={`activity-${i}`} className={`flex ${classes.activity}`}>
            <p>{item.message}</p>
            <p>{item.time}</p>
          </div>
        ))}
      </div>
      <Link to="/dashboard/jobs" className={classes.link}>See all</Link>
    </div>
  );
};
