import { useState } from "react";

const useForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", event.target);
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return { handleSubmit, handleInputChange };
};

export default useForm;
