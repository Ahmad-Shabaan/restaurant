import React, { useContext } from "react";
import "./Login.css";
import { Signup } from "../../components/Signup/Signup";
import { useState } from "react";
import { LoginPage } from "../../components/LoginPage/LoginPage";
import { LuUtensilsCrossed } from "react-icons/lu";
import { users } from "../../constants";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
export const Login = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [notUserError, setNotUserError] = useState(false);
  const [alreadyUser, setAlreadyUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleCheckUser = useContext(DataContext)
  const handleForget = () => {
    setForgetPassword(true);
  };
  const handleToggleClick = () => {
    setToggleLogin(!toggleLogin);
  };
  const handleChangePassword = () => {
    if (
      users.find((ele) => {
        return ele.email === email;
      })
    ) {
      setAlreadyUser(true);
    } else {
      setNotUserError(true);
      setTimeout(() => {
        setNotUserError(false);
      }, 2000);
    }
  };
  const handleConfirmPassword = () => {
    let user = users.find((ele) => {
      return ele.email === email;
    });
    user.password = password;
    handleCheckUser();
    navigate("/book_table");
  };
  return (
    <div className="app__login">

      {/* Handle forget password */}
      {forgetPassword ? (
        <div className="app__login-overlay flex__center">
          <div className="app__login-overlay_content flex__center">
            {notUserError ? (
              <div className="app__login-overlay_notUserError">
                Sorry, we could not find your account.
              </div>
            ) : (
              ""
            )}
            <div className="app__login-overlay_cross">
              <LuUtensilsCrossed
                cursor={"pointer"}
                onClick={() => {
                  setForgetPassword(false);
                  setAlreadyUser(false);
                }}
              />
            </div>

            {alreadyUser ? (
              <>
                <div className="findAccount">
                  <h2>Change your password</h2>
                  <p>Enter new password to change your old password.</p>
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="New password"
                  />
                </div>
                <button
                  disabled={password.length > 0 ? false : true}
                  onClick={handleConfirmPassword}
                >
                  Change
                </button>
              </>
            ) : (
              <>
                <div className="findAccount">
                  <h2>Find your account</h2>
                  <p>
                    Enter the email, phone number, or username associated with
                    your account to change your password.
                  </p>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email, phone number"
                  />
                </div>
                <button
                  disabled={email.length > 0 ? false : true}
                  onClick={handleChangePassword}
                >
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="app__login-container">
        <div className="app__login-log">
          {toggleLogin ? (
            <LoginPage
              handleToggleClickRef={handleToggleClick}
              handleForgetRef={handleForget}
            />
          ) : (
            <Signup handleToggleClickRef={handleToggleClick} handleCheckUser={handleCheckUser}/>
          )}
        </div>
        <div className="app__login-log_circleTop" />
        <div className="app__login-log_circleBottom" />
      </div>
    </div>
  );
};
