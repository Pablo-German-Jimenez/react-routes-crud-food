import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Row xs={1} md={2} >
        <Col >
          <Card className="border border-secondary">
            <Card.Body className="border border-secondary">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email", {
                      required: "eeeh",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "wrong email!",
                      },
                    })}
                  />
                  <Form.Text className="text-danger ">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "wrong password",
                      maxLength: 10,
                      message: "excedeed the max length",
                    })}
                  />
                </Form.Group>
                <div className="d-grid  ">
                  <Form.Text className="mb-3 text-danger">
                    {errors.password?.message}
                  </Form.Text>
                  <Button variant="success" type="submit">
                    Log in
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <img
            src="./empanaditas.jpeg "
            alt="Empanaditas"
            className="w-100 h-75  border rounded-3"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
