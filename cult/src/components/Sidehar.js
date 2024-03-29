import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ContextBrand } from "./Cart";
import Cardapi from "./Cardapi";

const Sidehar = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);

  const [prize, setPrize] = useState(0);
  // console.log(prize);

  const { first } = useContext(ContextBrand);

  const total = () => {
    let prize = 0;
    getdata.map((ele, k) => {
      prize = ele.prize + prize;
    });
    setPrize(prize);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
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
              <p className="p_str">Total prize</p>
              <p className="tr_vl">₹{prize}</p>
            </div>
            <div className="lk_str">
              <p className="p_str2">(-) Flat 45% Off</p>
              <p className="tr_vl2">₹ {Math.round((prize * 45) / 100)}</p>
            </div>
            <div className="lk_str1">
              <p className="alg_str">Total Payable</p>
              <p className="vlfg">₹ {Math.round((prize * 45) / 100)} </p>
            </div>
          </div>
          <div className="chot_bt">
            <button className="sdr">Select Address</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidehar;
