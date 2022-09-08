import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button/Button";
import classes from "./Login.module.css";

const AdminLogin = () => {
  return (
    <section className={classes.login}>
      <h2 className="mt-sm mb-sm">Login</h2>
      <form className="t-md">
        <label htmlFor="email">
          Email Address
          <input
            type="email"
            placeholder="admin@awasource.com"
            id="email"
            required
          />
        </label>
        <label className="mt-md" htmlFor="password">
          Password
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
          />
        </label>
        <Link to="/forgot-password" className={`mt-sm ${classes.forgot}`}>
          Forgot Password?
        </Link>
        <Button type="yellow">Sign In</Button>
      </form>
    </section>
  );
};
export default AdminLogin;
