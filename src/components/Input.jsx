import React from "react";

const Input = (prop) => (
  <input
    type={prop.type}
    onChange={prop.onChange}
    name={prop.name}
    placeholder={prop.ph}
    value={prop.value}
  />
);

export default Input;
