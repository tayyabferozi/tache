import { useState } from "react";

import Auth from "../../partials/Auth";

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Auth
      signup
      formState={formState}
      setFormState={setFormState}
      onSubmit={formSubmitHandler}
    />
  );
};

export default SignUp;
