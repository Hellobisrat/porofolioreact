
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidator = (value) => (
    new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Please enter a valid email."
  );
  const requiredValidator = (value) => {
    return value ? "" : "This field is required";
  }
  

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    setMessage('')
    setName('');
    setEmail('');
  };
 
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <input
          name="name"
          type="name"
          defaultValue={name}
          required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <input
          name="name"
          type="name"
          defaultValue={email}
          required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>message</Form.Label>
        <input
          name="message"
          type="message"
          defaultValue={message}
          rows={3} 
          required />

      </Form.Group>
    
    
    

      <button>Submit</button>
    </Form>
  );
}