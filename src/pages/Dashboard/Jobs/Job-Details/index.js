import { LocationIcon } from "../../../../constants/svgs";
import classes from "./index.module.css";
import Twitter from "../../../../assets/images/icons/twitter.svg";
import Instagram from "../../../../assets/images/icons/instagram.svg";
import Facebook from "../../../../assets/images/icons/facebook.svg";
import Website from "../../../../assets/images/icons/website.svg";
import Share from "../../../../assets/images/icons/share.svg";

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
          <p className={classes.right}>(8 months) April 2022 - November 2022</p>
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
          <h3>Job  Information</h3>
        </div>
        <div className={`flex mt-sm gap-20 ${classes.column}`}>
          <div className="">
            <p className={`blue-text`}>Job type: </p>
            <p className={`blue-text`}>Work mode:</p>
            <p className="blue-text">Date posted:</p>
          </div>
          <div className={``}>
            <p className={`blue-text`}>Full time</p>
            <p className={`blue-text`}>Onsite, Remote, Hybrid</p>
            <p className="blue-text">Posted on March 1st</p>
          </div>
        </div>
      </div>
      <hr className="mt-md mb-md" />
      <div>
        <div className={`flex ${classes.between} ${classes.column}`}>
          <h3>Job Description</h3>
        </div>
        <div className={`flex mt-sm ${classes.column}`}>
          <div className={''}>
            <p className="mt-sm">Will coordinate the company&apos;s scrum activities and all processes.</p>
            <p className="mt-sm">Will coordinate the company&apos;s scrum activities and all processes.</p>
            <p className="mt-sm">Will coordinate the company&apos;s scrum activities and all processes.</p>
          </div>
        </div>
      </div>
      <hr className="mt-md mb-md" />
      <div>
        <div className={`flex ${classes.between} ${classes.column}`}>
          <h3>Job Requirements</h3>
        </div>
        <div className={`flex mt-sm ${classes.column}`}>
          <div className={''}>
            <p className="mt-sm">3 years+ experience using Jira</p>
            <p className="mt-sm">3 years+ experience using Jira</p>
            <p className="mt-sm">3 years+ experience using Jira</p>
            <p className="mt-sm">3 years+ experience using Jira</p>
          </div>
        </div>
      </div>
      <hr className="mt-md mb-md" />
      <div>
        <div className={`flex ${classes.between} ${classes.column}`}>
          <h3>Objectives</h3>
        </div>
        <div className={`flex mt-sm ${classes.column}`}>
          <div className={''}>
            <p className="mt-sm">Will coordinate the company&apos;s scrum activities and all processes.</p>
            <p className="mt-sm">Will coordinate the company&apos;s scrum activities and all processes.</p>
          </div>
        </div>
      </div>
      <hr className="mt-md mb-md" />
      <div className={`flex mt-sm gap-20 ${classes.column}`}>
        <div className="">
          <h3 className="mb-6">Candidates</h3>
          <p className={`blue-text`}>Joseph Phlum</p>
          <p className={`blue-text`}>Joseph Phlum</p>
          <p className={`blue-text`}>Joseph Phlum</p>
          <p className={`blue-text`}>Joseph Phlum</p>
        </div>
        <div className={``}>
          <h3 className="mb-6">Status</h3>
          <p className={``}>Recommended</p>
          <p className={``}>Applied</p>
          <p className={``}>Recommended</p>
          <p className={``}>Applied</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
