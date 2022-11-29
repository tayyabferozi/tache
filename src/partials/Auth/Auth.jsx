import React from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import "./Auth.scss";

const Auth = ({ signup, formState, setFormState, onSubmit }) => {
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Section id="auth">
      <div className="head">
        <img
          className="tache"
          src="/assets/vectors/logo-icon.svg"
          alt="logo"
          title="logo"
        />

        <h2>{signup ? "Sign up a new account" : "Sign in to your account"}</h2>
      </div>

      <form className="form" action="" onSubmit={onSubmit}>
        {signup && (
          <Input
            label="Username"
            name="username"
            type="text"
            value={formState.username}
            onChange={inputChangeHandler}
          />
        )}

        <Input
          label="Email address"
          name="email"
          type="email"
          value={formState.email}
          onChange={inputChangeHandler}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={inputChangeHandler}
        />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <Checkbox label="Remember Me" />

          <Link to="#0" className="forgot">
            Forgot password?
          </Link>
        </div>

        <Button primary>{signup ? "Sign Up" : "Sign In"}</Button>

        <div className="or">
          <div className="main">OR</div>
        </div>

        <div className="btns">
          <Button grey>
            <img src="/assets/vectors/icons/logo-gitlab.svg" alt="gitlab" />
          </Button>
          <Button grey>
            <img src="/assets/vectors/icons/logo-github.svg" alt="github" />
          </Button>
        </div>

        {signup ? (
          <div className="to-signup">
            Alread have an account?
            <Button
              to="/signin"
              primaryLight
              icon={{
                src: "/assets/vectors/icons/arrow.svg",
                title: "arrow",
                alt: "arrow",
              }}
            >
              Sign in
            </Button>
          </div>
        ) : (
          <div className="to-signup">
            Don't have an account?{" "}
            <Button
              to="/signup"
              primaryLight
              icon={{
                src: "/assets/vectors/icons/arrow.svg",
                title: "arrow",
                alt: "arrow",
              }}
            >
              Get access
            </Button>
          </div>
        )}
      </form>
    </Section>
  );
};

export default Auth;
