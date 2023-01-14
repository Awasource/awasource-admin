import classes from "./input.module.css";

const RadioInput = ({ name, value, onChange, text, checked }) => {
  return (
    <label className={`relative ${classes.radio}`}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={checked}
      />
      <span className={classes.check}></span>
      {text}
    </label>
  );
};

export default RadioInput;
