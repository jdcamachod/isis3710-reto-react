import FormData from "./form";

const Forms = () => {
  const forms = [
    {
      id: 1,
      name: {
        id: "name1",
        type: "text",
        label: "name",
        placeholder: "write your name",
        name: "name",
        autoComplete: "name",
        validations: {
          string: true,
          integer: false,
          min: 3,
          max: 30,
          required: true,
        },
      },
      password: {
        id: "password1",
        type: "password",
        label: "password",
        placeholder: "type your password",
        name: "password",
        autoComplete: "password",
        validations: {
          string: true,
          integer: false,
          min: 3,
          max: 30,
          required: true,
        },
      },
      repeat_password: {
        id: "repeat_password1",
        type: "password",
        label: "Repeat password",
        name: "repeat_password",
        placeholder: "Retype your password",
        autoComplete: "password",
        validations: {
          string: true,
          integer: false,
          min: 3,
          max: 30,
          required: true,
        },
      },
    },
    {
      id: 2,
      name: {
        id: "name2",
        type: "text",
        name: "name",
        label: "Name",
        placeholder: "write your name",
        autoComplete: "name",
        validations: {
          string: true,
          integer: false,
          min: 3,
          max: 30,
          required: true,
        },
      },
      lastname: {
        id: "lastname2",
        type: "text",
        label: "Lastname",
        name: "lastname",
        placeholder: "write your lastname",
        autoComplete: "family-name",
        validations: {
          string: true,
          integer: false,
          min: 3,
          max: 30,
          required: true,
        },
      },
      email: {
        id: "email2",
        type: "email",
        label: "Email",
        name: "email",
        placeholder: "write your email",
        autoComplete: "email",
        validations: {
          string: true,
          integer: false,
          min: 3,
          max: 30,
          required: true,
        },
      },
    },
    {
      id: 3,
      name: {
        id: "name3",
        type: "text",
        label: "Name",
        name: "name",
        placeholder: "write your name",
        autoComplete: "name",
        validations: {
          string: true,
          integer: false,
          min: 3,
          max: 30,
          required: true,
        },
      },
      password: {
        id: "password3",
        type: "password",
        label: "Password",
        name: "password",
        placeholder: "type your password",
        autoComplete: "password",
        validations: {
          string: true,
          integer: false,
          min: 3,
          max: 30,
          required: true,
        },
      },
      repeat_password: {
        id: "repeat_password3",
        type: "password",
        label: "Repeat your password",
        name: "repeat_password",
        placeholder: "Retype your password",
        autoComplete: "password",
        validations: {
          string: true,
          integer: false,
          min: 3,
          max: 30,
          required: true,
        },
      },
    },
  ];

  return (
    <>
      {forms.map((form) => {
        return <FormData key={form.id} form={form} />;
      })}
    </>
  );
};

export default Forms;
