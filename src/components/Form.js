import React, { useState } from "react";

function Form() {
  const [formData, setformData] = useState({
    firstName: "John",
    lastName: "Henry"
  });

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    
    setformData({
      ...formData,
      [name]: value});
  }

  return (
    <form>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
