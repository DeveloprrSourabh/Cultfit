import React, { useContext, useEffect, useReducer, useState } from "react";
import Cardapi from "./Cardapi";
import { reducer } from "./reducer";
import "./styles/Cart.css";
import { ContextBrand } from "./Cart";
import { CartContext } from "./Store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Brand = () => {
  const { increments, decrements } = useContext(ContextBrand);

  // const [count, setCount] = useState(0);

  // const incNum = () => {
  //   if (count < 9) {
  //     setCount(count + 1);
  //   } else {
  //     alert("You can Exceed The Limit!");
  //   }
  // };

  // const decNum = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   } else {
  //     setCount(0);
  //   }
  // };

  const [data, setData] = useState([]);

  const { id } = useParams();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="co">
        <div className="row">
          <div className="col-12">
            <div className="main_div">
              {data.map((ele) => {
                return (
                  <>
                    <div className="all_item">
                      <div className="main_item">
                        <div className="both_item">
                          <div className="fir_img">
                            <img
                              src={ele.imgsrc}
                              alt=""
                              className="img_start"
                            />
                          </div>
                          <div className="cation_str">
                            <div className="cation_flx">
                              <div className="fr_hd">cultsportone</div>
                              <div className="lambi">
                                <div className="lmbi_str">
                                  This Is best Brand
                                </div>
                              </div>
                              <div className="fbtn_st">
                                <div className="fbtn3">
                                  <div className="mainbtn_str">BEST SELLER</div>
                                </div>
                              </div>
                              <div className="size_str">Size: L</div>
                              <div className="price_tr">₹ {ele.prize}</div>
                              <div className="btn34_stret">
                                <div className="pink_str">
                                  <img
                                    src="https://static.cure.fit/assets/images/minus.svg"
                                    alt=""
                                    className="minus_str"
                                  />
                                  <div className="count_str">
                                    {ele.quantity}
                                  </div>

                                  <img
                                    src="https://static.cure.fit/assets/images/plus.svg"
                                    alt=""
                                    className="plus_str"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h">
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
                    
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
