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

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Modal className="hu" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="fbexiti"> Existing user?</div>
            <div className="loginbtnexiti">
              <div className="btnexilgin">LOGIN TO CONTINUE</div>
            </div>
            <div className="flxprecxit">
              <div className="flatu"></div>
              <div className="nofltu">or</div>
              <div className="flatu"></div>
            </div>
            <div className="shpiing_dtl">Enter Shipping Details</div>
            <div className="maincontentexiting">
              <div className="nameofec">
                <div className="agnameexi">Full Name</div>
                <input className="inutex1" type="text" />
              </div>
              <div className="mobilenum">
                <div className="gghhexinum">Mobile Numeber</div>
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
                  <input type="number" className="exiting2in" />
                </div>
              </div>
              <div className="emailwla">
                <div className="nameofemail">Email</div>
                <input type="email" className="emailnput" />
              </div>
              <div className="pincwla">
                <div className="nameofpin">Pincode</div>
                <input type="number" min="0" inputMode="Numeric" maxLength={6}  pattern="[0-9]*" className="emailnput" />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
