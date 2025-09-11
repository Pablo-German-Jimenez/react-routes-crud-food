import {Form,Button} from "react-bootstrap"
import { useForm } from "react-hook-form";


const FormularioProducto = () => {

    const{
        register,
        handleSubmit,
        reset,
        setValue,
        formState:{errors},
    } = useForm();

    return (
        <section className="container">
            <h1 className="text-success">Crear producto</h1>
            <Form>
                
            </Form>
            <Button></Button>
        </section>
    );
};

export default FormularioProducto;
