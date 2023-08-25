import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/UI/Button/Button";
import classes from "./Login.module.css";
import { login } from "../../../redux/actions/authActions";
import { useDispatch } from "../../../redux/store";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch()

  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(payload, () => navigate("/2fa")));
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
        <div className="mt-md">
          <Button type="yellow">Sign In</Button>
        </div>
      </form>
    </section>
  );
};
export default AdminLogin;
