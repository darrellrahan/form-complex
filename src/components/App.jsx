import React, { useState } from "react";

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
      <h1>
        Hello {form.fName} {form.lName}
      </h1>
      <p>{form.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={form.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={form.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={form.email}
        />
      </form>
    </div>
  );
};

export default App;
