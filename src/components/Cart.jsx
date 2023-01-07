import React, { useState } from "react";
import "./styles/Cart.css";
import Cardapi from "./Cardapi";

const Cart = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(Cardapi);
  
  const inc = () =>{
    if (count<9) {
      setCount(count + 1);
    }else{
      alert("You Exceed The Limit!")
    }
  }
  const dec = () =>{
    if (count > 0) {
      setCount(count - 1);
    }else{
      setCount(0)
    }
  }

  return (
    <>
      <div className="check_page">
        <div className="container">
          <div className="p">
            <div className="co">
              {list.map((e) => {
                return (
                  <>
                    <div className="row">
                      <div className="col-12">
                        <div className="main_div">
                          <div className="all_item">
                            <div className="main_item">
                              <div className="both_item">
                                <div className="fir_img">
                                  <img
                                    src={e.imgsrc}
                                    alt=""
                                    className="img_start"
                                  />
                                </div>
                                <div className="cation_str">
                                  <div className="cation_flx">
                                    <div className="fr_hd">cultsportone</div>
                                    <div className="lambi">
                                      <div className="lmbi_str">
                                        {e.about}
                                      </div>
                                    </div>
                                    <div className="fbtn_st">
                                      <div className="fbtn3">
                                        <div className="mainbtn_str">
                                          BEST SELLER
                                        </div>
                                      </div>
                                    </div>
                                    <div className="size_str">Size: L</div>
                                    <div className="price_tr">₹ {e.prize}</div>
                                    <div className="btn34_stret">
                                      <div className="pink_str">
                                        <img  onClick={dec}
                                          src="https://static.cure.fit/assets/images/minus.svg"
                                          alt=""
                                          className="minus_str"
                                        />
                                        <div className="count_str">{count}</div>
                                        <img   onClick={inc}
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
                      {/* SECOND_COL---START */}
                    </div>
                  </>
                );
              })}
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
