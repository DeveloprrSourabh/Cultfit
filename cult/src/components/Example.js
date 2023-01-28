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
import "./styles/Login.css";
import Loginbtn from "./Loginbtn";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "react-social-login";
import { unstable_HistoryRouter } from "react-router-dom";
import { json } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function Example() {
  const navigate = useNavigate();     
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let name, value;

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      })
    });

    const data = res.json();

    if (res.status === 422 || !data) {
      alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      alert(" Registration Successfuly");
      console.log("Successfuly Registration");

      // navigate('/store');
    }
  };

  return (
    <>
      <div className="loginkr">
        <img
          onClick={handleShow}
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/cultsport/prod/Profile.svg"
          alt=""
          className="lginkr"
        />
      </div>
      <div className="bda">
        <Modal className="hu" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="mainexiti">
                <div className="byutghgshhgj">
                  <div className="fbexiti"> Existing user?</div>

                  <div className="loginbtnexiti">
                    <Loginbtn />
                  </div>
                  <div className="flxprecxit">
                    <div className="flatu"></div>
                    <div className="nofltu">or</div>
                    <div className="flatu"></div>
                  </div>
                  <div className="shpiing_dtl">Enter Shipping Details</div>
                  <form method="POST" className="ff">
                    <div className="maincontentexiting">
                      <div className="floatLabe nameofec">
                        <div className="agnameexi">Full Name</div>
                        <input
                          name="name"
                          id="name"
                          className="samein"
                          value={user.name}
                          onChange={handleInputs}
                          type="text"
                        />
                      </div>
                      <div className="floatLabe ">
                        <div className="agnameexi">Mobile Numeber</div>
                        <div className="ytwvfff3w">
                          <div className="style-prefix-1q76qitt">
                            <div className="ferex">
                              +91{" "}
                              <img
                                src="https://static.cure.fit/assets/images/arrow-clp.svg"
                                alt=""
                                className="exiting21"
                              />
                            </div>
                          </div>
                          <input
                            id="phone"
                            name="phone"
                            type="number"
                            className="samein"
                            value={user.phone}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>
                      <div className="floatLabe emailwla">
                        <div className="agnameexi">Email</div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="samein"
                          value={user.email}
                          onChange={handleInputs}
                        />
                      </div>
                      <div className="floatLabe emailwla">
                        <input
                          id="password"
                          name="password"
                          placeholder="password"
                          type="email"
                          className="samein"
                          value={user.password}
                          onChange={handleInputs}
                        />
                      </div>
                      <div className="floatLabe emailwla">
                        <input
                          id="cpassword"
                          name="cpassword"
                          placeholder="confirm password"
                          type="email"
                          className="samein"
                          value={user.cpassword}
                          onChange={handleInputs}
                        />
                      </div>

                      <div className="dip">
                        <div className="just">
                          <div className="paralin">
                            Receive order updates and reminders on Whatsapp
                          </div>
                        </div>
                      </div>
                      <div className="buttondis">
                        <button className="disbtn">
                          <div onClick={PostData} className="btncontent">
                            Register
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    </>
  );
}

export default Example;
