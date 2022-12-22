import React from "react";

function useValidate() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  const validate = (value) => {
    if (value.length === 0) {
      setError("*Campo vazio");
      return true;
    } else {
      setError(null);
      return false;
    }
  };
  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };
  return {
    value,
    onChange,
    onBlur: () => validate(value),
    error,
  };
}

export default useValidate;
