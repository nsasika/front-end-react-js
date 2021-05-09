import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const RegistrationForm = () => {
  const [state, setState] = useState({email: "",password: ""});

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    console.log("handle", id, value)
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleOnChange}
          value={state.email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleOnChange}
          value={state.password}
          autoComplete=""
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegistrationForm;
