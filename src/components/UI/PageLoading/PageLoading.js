import classes from "./PageLoading.module.css";

const PageLoading = () => {
  return (
    <div className={`center-flex full-width ${classes.container}`}>
      <img
        src="/app-loading.svg"
        alt="Loader"
        width="60"
        height="100"
        priority="true"
      />
    </div>
  );
};

export default PageLoading;
