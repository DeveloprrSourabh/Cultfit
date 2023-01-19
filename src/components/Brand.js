import React, { useContext, useEffect, useReducer, useState } from "react";
import Cardapi from "./Cardapi";
import { reducer } from "./reducer";
import "./styles/Cart.css";
import { ContextBrand } from "./Cart";
import { CartContext } from "./Store";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";

const Brand = () => {



  const { increments, decrements } = useContext(ContextBrand);

  const [data, setData] = useState([]);

  const { id } = useParams();

const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/store")
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
                                <div className="lmbi_str">{ele.about}</div>
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
                                onClick={() => dlt(ele.id)}
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
