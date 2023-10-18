import React, { useState } from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { users } from "../../constants";
import { useNavigate } from "react-router-dom";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";

export const Signup = ({ handleToggleClickRef, handleCheckUser }) => {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email/phone is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is required"),
  });
  const [alreadyUser, setAlreadyUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = (values, { resetForm }) => {
    if (
      users.find((ele) => {
        return ele.email === values.email;
      })
    ) {
      setAlreadyUser(true);
      setTimeout(() => {
        setAlreadyUser(false);
        resetForm();
      }, 2000);
    } else {
      users.push(values);
      handleCheckUser();
      navigate("/book_table");
    }
  };
  return (
    <>
      <h2>Signup</h2>
      <p>Just some details to get you in..!</p>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
        initialValues={initialValues}
      >
        <Form className="login__form">
          {alreadyUser && (
            <div className="login__form-notUserError">
              This email address is already in use
            </div>
          )}
          <div className="login__form-username">
            <Field
              type="text"
              placeholder="Username"
              name="username"
              autoComplete={"off"}
            />
            <ErrorMessage
              name="username"
              component={"div"}
              className="login__form-username_errorMsg"
            />
          </div>
          <div className="login__form-username">
            <Field
              type="text"
              placeholder="Email/phone"
              name="email"
              autoComplete={"off"}
            />
            <ErrorMessage
              name="email"
              component={"div"}
              className="login__form-username_errorMsg"
            />
          </div>
          <div className="login__form-username">
            <Field
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              autoComplete={"off"}
            />
            <span
              className="login__form-password_eye"
              style={{ top: "20%" }}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}
            </span>
            <ErrorMessage
              name="password"
              component={"div"}
              className="login__form-username_errorMsg"
            />
          </div>
          <div className="login__form-username">
            <Field
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              autoComplete={"off"}
            />
            <span
              className="login__form-password_eye"
              style={{ top: "20%"}}
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? <PiEyeBold /> : <PiEyeClosedBold />}
            </span>
            <ErrorMessage
              name="confirmPassword"
              component={"div"}
              className="login__form-username_errorMsg"
            />
          </div>
          <button type="submit" className="app__login-log_button">
            Signup
          </button>
        </Form>
      </Formik>
      <div className="app__login-log_other">
        <div />
        or
        <div />
      </div>
      <div className="app__login-log_socialMedia">
        <FcGoogle />
        <span>
          <BsFacebook />
        </span>
        <BsGithub />
      </div>
      <div className="app__login-log_footer">
        <p>
          Already Registered?{" "}
          <span
            onClick={() => {
              handleToggleClickRef();
            }}
          >
            Login
          </span>
        </p>
        <div>
          <p>Terms & Conditions</p>
          <p>Support</p>
          <p>Customer Care</p>
        </div>
        <div></div>
      </div>
    </>
  );
};
