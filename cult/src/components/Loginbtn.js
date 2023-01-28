// import react from "react";

// const LoginForm = ({isShowLogin}) =>{
//     return(
//         <div className= {`${!isShowLogin ? "active" : ""} show`}>
//             <div className="login-form">
//                 <div className="form-box solid">
//                     <form action="">
//                         <h1 className="login-text">Sign In</h1>
//                         <label>username</label><br />
//                         <input type="text"
//                         name="username"
//                         className="login-box" />
//                         <br />
//                         <label>Password</label><br />
//                         <input type="password"
//                         name="password"
//                         className="login-box" />
//                         <br />
//                         <input type="submit" value=" LOGIN" className="login-btn" />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginForm

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./styles/Login.css";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Loginbtn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      alert("Invalid Credentials");
    } else {
      alert("Login Successfuly");

      navigate('/store');
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="gghhjjhg">
        <div className="btnexilgin">LOGIN TO CONTINUE</div>
      </button>

      <div className="bda">
        <Modal className="hu" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="loginmaoin">
                <div className="dusramain">
                  <div className="pehladu">
                    <div className="logohjimg">
                      <div className="imgwidth">
                        <img
                          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.8,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/new_cultsport_black.svg"
                          alt=""
                          className="prjhlimg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dusradu">
                   <form method="POST">
                   <div className="jjkkig">
                      <div className="num">
                        <div className="puranum">Email</div>
                      </div>

                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="numinput"
                      />
                    </div>
                    <div className="jjkkig">
                      <div className="num">
                        <div className="puranum">Password</div>
                      </div>

                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your Password"
                        type="email"
                        className="numinput"
                      />
                    </div>
                    <div className="senti">
                      <div className="llkop">
                        Receive order updates and reminders on Whatsapp
                      </div>
                    </div>
                    <div className="nvhgjk">
                      <button className="hkhkfjh">
                        <div onClick={loginUser} className="kjfkdjfs">
                          Login
                        </div>
                      </button>
                    </div>
                   </form>
                    <div className="kartb">
                      <div className="majkl">
                        <div className="jjghyy">
                          <div className="y6gfa">
                            <div className="flxprecxit">
                              <div className="flatu1"></div>
                              <div className="nofltus">or</div>
                              <div className="flatu1"></div>
                            </div>
                            <div className="gphotyo">
                              <LoginSocialGoogle
                                client_id={
                                  "559150664034-fhkdot9rcs5dh83n2msm0k7vlalc92ce.apps.googleusercontent.com"
                                }
                                scope="openid profile email"
                                discoveryDocs="claims_supported"
                                access_type="offline"
                                onResolve={({ provider, data }) => {
                                  console.log(provider, data);
                                }}
                                // onReject={(err) => {
                                //   console.log(err);
                                // }}
                              >
                                <img
                                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/cultsport/assets/google-logo.png"
                                  alt=""
                                  className="google"
                                />
                              </LoginSocialGoogle>

                              <img
                                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/cultsport/assets/email_logo.svg"
                                alt=""
                                className="mail"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lkop">
                      <div className="lodfpsa">
                        * By Continuing you agree to the
                        <a href="" className="atag1">
                          Terms of Services
                        </a>
                        and
                        <a href="" className="atag1">
                          Privacy policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    </>
  );
}

export default Loginbtn;
