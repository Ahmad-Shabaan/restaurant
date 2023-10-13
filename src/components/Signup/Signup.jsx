import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
export const Signup = ({ handleToggleClickRef }) => {
  return (
    <>
      <h2>Signup</h2>
      <p>Just some details to get you in..!</p>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email/phone" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="Confirm Password" />
      <button className="app__login-log_button">Signup</button>
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
