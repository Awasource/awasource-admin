import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../../components/UI/Button/Button";
import { VERIFY_OTP_INPUTS } from "../../../constants";
import classes from "./Verify.module.css";
import { errorHandler } from "../../../utils/errorHandler";
import { endAuthLoading, verify } from "../../../redux/actions/authActions";
import { useDispatch, useSelector } from "../../../redux/store";

const Verify = () => {
  const { isLoading, isAuthenticated } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const [data, setData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
  });
  let tabChange = (num) => {
    let nodeList = document.querySelectorAll("input");
    if (nodeList[num].value !== "") {
      if (num < 5) nodeList[num + 1].focus();
    } else if (nodeList[num].value === "") {
      if (num > 0) {
        nodeList[num - 1].focus();
      }
    }
  };

  const dispatch = useDispatch()

  const handleVerify = () => {
    try {
      dispatch(verify({ otp: Object.values(data).join("") }, () => navigate("/dashboard/overview")));
    } catch (error) {
      errorHandler(error, "Authentication failed!");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  useEffect(()=>{
    if(!isAuthenticated && isLoading) {
      dispatch(endAuthLoading());
    }
  }, []);

  return (
    <section>
      <h2 className="mt-sm mb-sm">Two-factor Authentication</h2>
      <p>Please enter the one-time Access code sent to your email</p>
      <div className={`mb-md mt-md ${classes.grid}`}>
        {VERIFY_OTP_INPUTS.map((item, index) => (
          <input
            key={index}
            type="text"
            className="t-16"
            maxLength="1"
            value={data[item.name]}
            onKeyUp={() => tabChange(index)}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                [item.name]: e.target.value,
              }))
            }
          />
        ))}
      </div>
      <div className={`flex mb-md ${classes.btn}`}>
        <Button type="white" onClick={handleCancel}>Cancel</Button>
        <Button type="yellow" onClick={handleVerify} disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Verify'}
        </Button>
      </div>
    </section>
  );
};

export default Verify;
