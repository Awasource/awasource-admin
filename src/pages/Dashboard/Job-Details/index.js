import { LocationIcon } from "../../../constants/svgs";
import classes from "./index.module.css";
import Twitter from "../../../assets/images/icons/twitter.svg";
import Instagram from "../../../assets/images/icons/instagram.svg";
import Facebook from "../../../assets/images/icons/facebook.svg";
import Website from "../../../assets/images/icons/website.svg";
import Share from "../../../assets/images/icons/share.svg";

const JobDetails = () => {

  return (
    <div className={classes.parent}>
      <div
        className={`flex ${classes.between} ${classes.info} ${classes.column}`}
      >
        <div className={`flex ${classes.info} ${classes.column}`}>
          <div className={`center-flex ${classes.picture}`}>
            <span>A</span>
          </div>
          <div>
            <h3>Awasource</h3>
            <p className="mt-sm mb-sm">Tech Company</p>
            <p className={`flex ${classes.info}`}>
              <LocationIcon />
              Abuja, Nigeria
            </p>
          </div>
        </div>
        <div className="mt-sm">
          <h3 className={classes.right}>$300 a month</h3>
          <div className={`flex mt-sm ${classes.links} ${classes.info}`}>
            <img src={Share} alt="Share" />
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.example.com" target="_blank" rel="noreferrer">
              <img src={Website} alt="Website" />
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-md mb-md" />
      <div>
        <div className={`flex ${classes.between} ${classes.column}`}>
          <h3>Project Manager</h3>
          <p className={classes.right}>(8 months) April 2022 - November 2022</p>
        </div>
        <div className={`flex mt-sm ${classes.between} ${classes.column}`}>
          <div className={classes.objective}>
            <h4>Objectives</h4>
            <p>
              Will coordinate the company's scrum activities and manage all
              project processes. just because I want to complete
            </p>
          </div>
          <div className={classes.right}>
            <p className={`blue-text`}>Onsite, Remote, Hybrid</p>
            <p className="yellow-text">Posted on March 1st</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
