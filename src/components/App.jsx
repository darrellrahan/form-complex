import React, { useState } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Input from "./Input";

const App = () => {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <div className="container">
      <Heading text={`Hello ${form.fName} ${form.lName}`} />
      <Paragraph text={form.email} />
      <form>
        <Input
          type="text"
          onChange={handleChange}
          name="fName"
          ph="First Name"
          value={form.fName}
        />
        <Input
          type="text"
          onChange={handleChange}
          name="lName"
          ph="Last Name"
          value={form.lName}
        />
        <Input
          type="email"
          onChange={handleChange}
          name="email"
          ph="Email"
          value={form.email}
        />
      </form>
    </div>
  );
};

export default App;
