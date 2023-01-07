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
                            <div className="lmbi_str">Textured Performance Tshirt with Logo</div>
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
                              <img src="https://static.cure.fit/assets/images/minus.svg" alt="" className="minus_str" />
                              <div className="count_str">1</div>
                              <img src="https://static.cure.fit/assets/images/plus.svg" alt="" className="plus_str" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
