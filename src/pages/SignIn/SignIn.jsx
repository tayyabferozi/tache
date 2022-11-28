import { useState } from "react";

import Auth from "../../partials/Auth";

const SignIn = () => {
  const [formState, setFormState] = useState({
    email: "",
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Auth
      formState={formState}
      setFormState={setFormState}
      onSubmit={formSubmitHandler}
    />
  );
};

export default SignIn;
