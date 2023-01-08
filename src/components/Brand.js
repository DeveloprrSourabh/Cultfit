import React, { useState } from 'react';
import "./styles/Cart.css";



const Brand = ({  id,
    heading,
    imgsrc,
    about,
    color,
    desc,
    prize,
    preprize,
    off,
    sidebar,}) => {

    const [count, setCount] = useState(0);

    const incNum = () => {
      if (count < 9) {
        setCount(count + 1);
      } else {
        alert("You can Exceed The Limit!");
      }
    };
  
    const decNum = () => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setCount(0);
      }
    };


  return (
    <>
     <div className="co">
              <div className="row">
                <div className="col-12">
                  <div className="main_div">
                    <div className="all_item">
                      <div className="main_item">
                        <div className="both_item">
                          <div className="fir_img">
                            <img src={imgsrc} alt="" className="img_start" />
                          </div>
                          <div className="cation_str">
                            <div className="cation_flx">
                              <div className="fr_hd">cultsportone</div>
                              <div className="lambi">
                                <div className="lmbi_str">{about}</div>
                              </div>
                              <div className="fbtn_st">
                                <div className="fbtn3">
                                  <div className="mainbtn_str">BEST SELLER</div>
                                </div>
                              </div>
                              <div className="size_str">Size: L</div>
                              <div className="price_tr">₹ {prize}</div>
                              <div className="btn34_stret">
                                <div className="pink_str">
                                  <img
                                    onClick={decNum}
                                    src="https://static.cure.fit/assets/images/minus.svg"
                                    alt=""
                                    className="minus_str"
                                  />
                                  <div className="count_str">{count}</div>
                                  <img
                                    onClick={incNum}
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
              </div>
            </div>
    </>
  )
}

export default Brand