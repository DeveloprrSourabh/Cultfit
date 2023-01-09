import React, { createContext, useContext, useReducer, useState } from "react";
import "./styles/Cart.css";
import Cardapi from "./Cardapi";
import Storenav from "./Storenav";
import BrandContext from "./BrandContext";

const Cart = () => {

  return (
    <>
    <Storenav />
      <div className="check_page">
        <div className="container">
          <div className="p">
           <div className="ghfr">
<BrandContext />
</div>
           
            <div className="jki">
              <div className="col-12">
                <div className="second_str">
                  <div className="inpt_str">
                    <div className="impt_str2">
                      <div className="row roe_mao">
                        <div className="col-xs-1 col-md-1">
                          <img
                            src="https://static.cure.fit/assets/images/locationPink.svg"
                            alt=""
                            className="img_seccol"
                          />
                        </div>
                        <div className="col-xs-11 col-md-11">
                          <div className="row col-xs-12 col-md-12">
                            <div className="checkout_adres">
                              <div className="row">
                                <div className="col-xs-12">
                                  <div className="chk_ress"></div>
                                </div>
                                <div className="col-xs-12">
                                  <div className="agyo_adress">
                                    <div className="seect_adress">
                                      Please add address
                                    </div>
                                    <div className="prima_clr">Add/Modify</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="khali_pilik"></div>
                </div>
                <div className="nex_khali">
                  <div className="column">
                    <div className="row col-md-12">
                      <div className="col-xs-1 col-md-1 no_pading">
                        <img
                          src="https://static.cure.fit/assets/images/timePink.svg"
                          alt=""
                          className="jhy_img"
                        />
                      </div>
                      <div className="col-xs-11 col-md-11">
                        <div
                          style={{ fontSize: "16px" }}
                          className="row col-md-12 col-xs-12"
                        >
                          <div className="hed_agi">Estimated Delivery</div>
                          <div className="moto_agyo">
                            Please fill your address to see the estimated
                            delivery date
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="khali_pilik"></div>
                </div>

                <div className="thre_coni">
                  <div className="lk_str">
                    <p className="p_str">Total Price</p>
                    <p className="tr_vl">₹999</p>
                  </div>
                  <div className="lk_str">
                    <p className="p_str2">(-) Flat 50% Off</p>
                    <p className="tr_vl2">₹999</p>
                  </div>
                  <div className="lk_str1">
                    <p className="alg_str">Total Payable</p>
                    <p className="vlfg">₹499</p>
                  </div>
                </div>
                <div className="chot_bt">
                  <button className="sdr">Select Address</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
