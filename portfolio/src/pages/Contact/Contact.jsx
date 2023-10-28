import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';
import './form.css'


function Contact () {
  const { Formik } = formik;

  const schema = yup.object().shape({
    Name: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),
   
  });

  return (
    <>
    <h3>Contact</h3>
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        Name: '',
        email: '',
        message: '',
        
      }}
    >
      
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className='form'>
        
         
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="name"
                value={values.Name}
                onChange={handleChange}
                isInvalid={!!errors.Name}
              />
             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4"  controlId="validationFormikUsername">
              <Form.Label>Email address</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder=" "
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
       
        
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>message</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="message"
                value={values.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />

              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
           
        
          <Button type="submit">Submit </Button>
        </Form>
      )}
    </Formik>
    </>
  );
}

export default Contact;