import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';


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
      
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
        
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                value={values.Name}
                onChange={handleChange}
                isValid={!errors.Name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
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