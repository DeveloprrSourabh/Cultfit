import React from "react";
import "./styles/user.css";
import Storenav from "./Storenav";

const User = () => {
  return (
    <>
      <Storenav />
      <div className="firstofa">
        <div className="kagyu">
          <div className="abjio">
            <div className="jkhgu">
              <div className="merpo">
                <div className="img">
                  <img
                    src="https://profile-pictures-prod.s3.amazonaws.com/dd4c9d12-0f33-4644-ae30-8e02231d6495"
                    alt=""
                    className="meripo"
                  />
                </div>
                <div className="captionahgy">
                  <label htmlFor="" className="flbl">
                    Developr Sourabh
                  </label>
                  <h6 className="lblh6">VIEW PROFILE</h6>
                </div>
              </div>
            </div>
            <div className="linbad">
              <div className="lnbad">
                <div className="imgdivv">
                  <div className="imgdiv">
                    <div className="ctuibnhg">Orders</div>
                    <img
                      src="https://static.cure.fit/assets/images/cart-black.svg"
                      alt=""
                      className="fontawe"
                    />
                  </div>
                </div>
                <div className="imgdivv">
                  <div className="imgdiv">
                    <div className="ctuibnhg">Redeem Voucher</div>
                    <img
                      src="https://static.cure.fit/assets/images/coupon-black.svg"
                      alt=""
                      className="fontawe"
                    />
                  </div>
                </div>
                <div className="imgdivv">
                  <div className="imgdiv">
                    <div className="ctuibnhg">Account</div>
                    <img
                      src="https://static.cure.fit/assets/images/settings-black.svg"
                      alt=""
                      className="fontawe"
                    />
                  </div>
                </div>
                <div className="imgdivv">
                  <div className="imgdiv">
                    <div className="ctuibnhg">Support</div>
                    <img
                      src="https://static.cure.fit/assets/images/support-black.svg"
                      alt=""
                      className="fontawe"
                    />
                  </div>
                </div>
                <div className="imgdivv">
                  <div className="imgdiv">
                    <div className="ctuibnhg">Logout</div>
                    <img
                      src="https://static.cure.fit/assets/images/logout-black.svg"
                      alt=""
                      className="fontawe"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* second col */}
          <div className="seccol">
            <div className="agyseccol">
              <div className="hj3">
                <div className="ctnrt">
                  <center className="ctr2">
                    <button className="memeo">
                    <img src="https://profile-pictures-prod.s3.amazonaws.com/dd4c9d12-0f33-4644-ae30-8e02231d6495" alt="" className="ctruimg" />
<div class="style-prefix-13257ux">EDIT</div>
                    </button>
                  </center>
                  <div className="dfhyfui">
                    <div className="jkdiujied6">
<div className="llko2pikoi">
  <p className="vkfpara">PROFILE</p>
</div>
                    </div>
                    <div className="mtot">
                      <div className="anotoho">
                        <form action="" className="fir1">
                          <form action="" className="fir2">
                            <div className="fir2d">
                              <label htmlFor="" className="firlb">NAME</label>
                              <div className="firdiv">
                                <input placeholder="Enter your name" type="text" className="entername" />
                              </div>
                            </div>
                            <div className="firdiv4">
                              <div className="jfir4">
                                <lable className="gdr">GENDER</lable>
                                <div className="twochij">
                                  <div className="firstchij">
                                    <input placeholder="ENTER GENDER" type="text" className="cjfdiio" />
                                  </div>
                                  <div className="bhgjvkl">
                                    <button className="dollbtn">
                                      <img src="https://static.cure.fit/assets/images/male-active.svg" alt="" className="srcfghj" />
                                    </button>
                                    <button className="admijdjd">
                                      <img src="https://static.cure.fit/assets/images/female-inactive.svg" alt="" className="srcadi" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lastformfur">
                              <label htmlFor="" className="ksiisk">EMAIL</label>
                              <div className="labldivfg">
                                <input  placeholder="Enter your email" type="text" className="ajhsdghjsadb" />
                              </div>
                            </div>
                          </form>


                          <form action="" className="fir3">
                            <div className="fir2d">
                              <label htmlFor="" className="firlb">PHONE NUMBER</label>
                              <div className="firdiv">
                                <input placeholder="Add phone number" type="text" className="entername" />
                              </div>
                            </div>
                            <div className="firdiv4">
                              <div className="jfir4">
                                <lable className="gdr">Date of Birth</lable>
                                <div className="twochij">
                                  <div className="firstchij">
                                    <input placeholder="MM/DD/YYYY"  type="text" className="cjfdiio cdsdf" />
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                            <div className="lastformfur">
                              <label htmlFor="" className="ksiisk">WORK EMAIL</label>
                              <div className="labldivfg">
                                <input  placeholder="Add Work Email" type="text" className="ajhsdghjsadb" />
                                <button className="addldldld">Add</button>
                              </div>
                            </div>
                          </form>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
