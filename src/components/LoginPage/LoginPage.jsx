import React, { useContext, useState } from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import { users } from "../../constants";
export const LoginPage = ({ handleToggleClickRef, handleForgetRef }) => {
  const handleCheckUser = useContext(DataContext);
  const navigate = useNavigate();
  const [notUserError, setNotUserError] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });
  const handleSubmit = (userObj, { resetForm }) => {
    if (
      users.find((user) => {
        return (
          user.password === userObj.password &&
          user.username === userObj.username
        );
      })
    ) {
      handleCheckUser();
      navigate("/book_table");
    } else {
      setNotUserError(true);
      setTimeout(() => {
        setNotUserError(false);
      }, 1500);
      resetForm();
    }
  };

  const handleForgetPassword = () => {
    handleForgetRef();
  };

  return (
    <>
      <h2>Login</h2>
      <p>Glad you’re back.!</p>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className="login__form">
          {notUserError ? (
            <div className="login__form-notUserError">
              Sorry, we could not find your account.
            </div>
          ) : (
            ""
          )}

          <div className="login__form-username">
            <Field
              type="text"
              name="username"
              placeholder="Username"
              autoComplete={"off"}
            />
            <ErrorMessage
              name="username"
              component={"div"}
              className="login__form-username_errorMsg"
            />
          </div>
          <div className="login__form-password">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              style={{ margin: "25px 0 12px" }}
              autoComplete="off"
            />
            <ErrorMessage
              name="password"
              component={"div"}
              className="login__form-password_errorMsg"
            />
          </div>
          <div style={{ display:"flex", flexDirection:"row" , alignItems:"center" , marginBottom:"25px",color:"white"}}>
            <input type="checkbox" defaultChecked name="remember" id="remember" style={{width:"1rem" , margin:'0 5px 0 0'}}/>
            <label htmlFor="remember"> Remember me</label>
          </div>
          <button
            type="submit"
            className="app__login-log_button"
            style={{ margin: "0 0 14px" }}
          >
            Login
          </button>
        </Form>
      </Formik>
      {/* <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      /> */}
      {/* <input type="text" placeholder="Password" style={{ margin: "25px 0" }} /> */}
      {/* <button className="app__login-log_button" style={{ margin: "0 0 14px" }}>
        Login
      </button> */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "white",
        }}
      >
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={handleForgetPassword}
        >
          Forgot password ?
        </span>
      </div>
      <div className="app__login-log_other" style={{ marginTop: "47px" }}>
        <div />
        or
        <div />
      </div>
      <div
        className="app__login-log_socialMedia "
        style={{ marginBottom: "83px" }}
      >
        <FcGoogle />
        <span>
          <BsFacebook />
        </span>
        <BsGithub />
      </div>
      <div className="app__login-log_footer">
        <p>
          Don’t have an account?{" "}
          <span
            onClick={() => {
              handleToggleClickRef();
            }}
          >
            Signup
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
