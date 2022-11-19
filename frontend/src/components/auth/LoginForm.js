import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const LoginForm = () => {
  const [show, setShow] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            required
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

        <Button variant="primary" className="btn-block w-100" type="submit">
          Log in
        </Button>
      </Form>
      <p className="mt-5">
        <a href="/forgotpassword" className="link-text text-decoration-none">
          I forgot my password
        </a>
      </p>
    </>
  );
};

export default LoginForm;
