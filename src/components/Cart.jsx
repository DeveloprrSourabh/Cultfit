import React from "react";
import "./styles/Cart.css";

const Cart = () => {
  return (
    <>
      <div className="check_page">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main_div">
                <div className="all_item">
                  <div className="main_item">
                    <div className="both_item">
                      <div className="fir_img">
                        <img
                          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_125,ar_5:6,c_fit/dpr_2/cultgear-content/gyEKit98fH6VGSZ2jv1fFkSm"
                          alt=""
                          className="img_start"
                        />
                      </div>
                      <div className="cation_str">
                        <div className="cation_flx">
                          <div className="fr_hd">cultsportone</div>
                          <div className="lambi">
                            <div className="lmbi_str">
                              Textured Performance Tshirt with Logo
                            </div>
                          </div>
                          <div className="fbtn_st">
                            <div className="fbtn3">
                              <div className="mainbtn_str">BEST SELLER</div>
                            </div>
                          </div>
                          <div className="size_str">Size: L</div>
                          <div className="price_tr">₹ 499</div>
                          <div className="btn34_stret">
                            <div className="pink_str">
                              <img
                                src="https://static.cure.fit/assets/images/minus.svg"
                                alt=""
                                className="minus_str"
                              />
                              <div className="count_str">1</div>
                              <img
                                src="https://static.cure.fit/assets/images/plus.svg"
                                alt=""
                                className="plus_str"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://static.cure.fit/assets/images/modal-close.svg"
                        alt=""
                        className="dele_item"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
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
                    <div className="col-xs-1 col-md-1">
                      <img
                        src="https://static.cure.fit/assets/images/timePink.svg"
                        alt=""
                        className="jhy_img"
                      />
                    </div>
                    <div className="col-xs-11 col-md-11">
                      <div className="row col-md-12 col-xs-12">
                        <div className="hed_agi">Estimated Delivery</div>
                        <div className="moto_agyo">
                          Please fill your address to see the estimated delivery
                          date
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
                  <p className="p_str">(-) Flat 50% Off</p>
                  <p className="tr_vl">₹999</p>
                </div>
                <div className="lk_str">
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
    </>
  );
};

export default Cart;
