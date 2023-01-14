import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../apis";
import Button from "../../../components/UI/Button/Button";
import { errorHandler } from "../../../utils/errorHandler";
import classes from "./Login.module.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);
    try {
      navigate("/dashboard/overview");
      const res = await login(payload);
      console.log(res);
    } catch (error) {
      errorHandler(error, "Authentication failed!");
    }
  };
  return (
    <section className={classes.login}>
      <h2 className="mt-sm mb-sm">Login</h2>
      <form className="t-md" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
          <input
            type="email"
            name="email"
            placeholder="admin@awasource.com"
            id="email"
            onChange={handleChange}
            required
          />
        </label>
        <label className="mt-md" htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
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
