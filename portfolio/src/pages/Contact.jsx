import {React} from "react";
import { useState } from 'react';


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setName(value) : setName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
  };
 
  return (
    <form >
      <h1>Contact</h1>

      <label>
        Name:
        <input
          name="name"
          type="name"
          value={name}
          required />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          required />
      </label>
      <label>
        Message:
        <input
          name="message"
          type="message"
          value={message}
          required />
      </label>

    

      <button>Submit</button>
    </form>
  );
}