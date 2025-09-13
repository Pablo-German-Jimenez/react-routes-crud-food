import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

const onSubmit=(data)=>{
    console.log(data)
}

  return (
    <section className="container">
      <h1 className="text-success">Crear producto</h1>
      <Form onClick={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formProduct">
          <Form.Label>Product</Form.Label>
          <Form.Control type="text" placeholder="Choice you product!" 
          {...register("productName",{required:true, maxLength:{value:10, message:"Max 10 characters!"}})}/>
          <Form.Text className="text-muted">
            {errors.productName?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          {...register("password",{required:true})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
