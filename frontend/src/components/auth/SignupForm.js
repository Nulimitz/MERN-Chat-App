import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SignupForm = () => {
  const [show, setShow] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Row className="g-0">
          <Col md={11}>
            <Form.Control
              type={show ? "text" : "password"}
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
          <Col md={1} className="d-flex align-items-center">
            <span className="ms-auto" onClick={handleShow}>
              <i className="bi bi-eye-slash"></i>
            </span>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmpassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="pic">
        <Form.Label>Profile Pic</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" className="btn-block w-100" type="submit">
        Sign up
      </Button>
    </Form>
  );
};

export default SignupForm;
