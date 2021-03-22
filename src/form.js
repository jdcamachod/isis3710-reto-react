import useForm from "./customHooks";
// import * as Joi from "joi";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormData = (props) => {
  const [form] = useState(props.form);
  const fields = Object.values(form).splice(1);

  // const schema = Joi.object({
  //   email: Joi.string().email({ tlds: { allow: false } }),
  //   password: Joi.string(),
  //   repeat_password: Joi.ref("password"),
  // }).with("password", "repeat_password");

  const { handleSubmit, handleInputChange } = useForm();
  return (
    <>
      <Form onSubmit={handleSubmit}>
        {fields.map((field) => {
          return (
            <Form.Group key={field.id}>
              <Form.Label htmlFor={field.id}> {field["label"]} </Form.Label>
              <Form.Control
                placeholder={field.placeholder}
                type={field.type}
                id={field.id}
                name={field.name}
                autoComplete={field.autoComplete}
                onChange={handleInputChange}
              />
            </Form.Group>
          );
        })}

        <div>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormData;
