import React from "react";

const Input = ({ value, onChange, type, onBlur }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
    ></input>
  );
};

export default Input;
