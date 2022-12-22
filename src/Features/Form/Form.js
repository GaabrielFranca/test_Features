import React from "react";
import Input from "./Input";
import useValidate from "./useValidate";

const Form = () => {
  const email = useValidate();

  return (
    <>
      <Input type="text" {...email} />
      <p>{email.error}</p>
    </>
  );
};

export default Form;
