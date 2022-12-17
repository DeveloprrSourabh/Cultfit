import React from "react";
import Subnavbar from "./Subnavbar";
import fitness from "./styles/fitness.css";

const Fitness = () => {
  return (
    <>
      <Subnavbar />
      {/* MAIN IAMGE---START */}
      <div className="ft">
        <div className="mimgft">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/7996a88c-8958-4bba-9bbd-bbf0433598ee.png"
            alt=""
            className="mainftgg"
          />
        </div>
      </div>
      {/* MAIN IAMGE---END */}

      {/* BTN---START */}
      <div className="btft">
        <div className="btn bn">
          <a href="" id="ll" className="clf">
            EXPLORE CULTPASS
          </a>
        </div>
      </div>
      {/* BTN---END */}

      {/* THREE BOXES---START */}
      <div style={{ marginTop: "-15rem" }} id="gyo" class="container ftgogyo">
        <div class="cr">
          <div class="row">
            <div class="col-3 ko">
              <div class="imglp">
                <div>
                  <img
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                    alt=""
                    class="rng"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                    alt=""
                    class="rng11"
                  />
                </div>
                <p class="rngc">
                  Unlimited access to group classes, all gyms and at-home
                  workouts
                </p>
              </div>
            </div>
            <div class="col-3 ko">
              <div class="imglp">
                <div>
                  <img
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                    alt=""
                    class="rng"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
                    alt=""
                    class="rng11"
                  />
                </div>
                <p class="rngc">
                  Unlimited access to all PRO gyms and at-home workouts
                </p>
              </div>
            </div>
            <div class="col-3 ko">
              <div class="imglp">
                <div>
                  <img
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                    alt=""
                    class="rng"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
                    alt=""
                    class="rng11"
                  />
                </div>
                <p class="rngc">
                  Unlimited access to group classes, all gyms and at-home
                  workouts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THREE BOXES---END */}

      {/* HEADING---START */}
      <div className="ftsmhd">
        <div className="lkh">
          <h5 className="fthdh5">AT-CENTER</h5>
        </div>
      </div>

      {/* HEADING---END */}
      {/* SECOND HEADING---START */}
<div className="ftshd">
  <div className="sshd">
    <h2 className="hdh5">Trainer-led group classes
</h2>
  </div>
</div>
      {/* SECOND HEADING---END */}
      {/* COL BOXES---START */}
<div className="ftcolstrt">
  <div className="allftst">
    <div className="container">
    <div className=" ftr1">
      <div className="humbletruth"></div>
      <div className="humbletruth">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" alt="" className="ftrwig" />
      </div>
      <div className="humbletruth">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" alt="" className="ftrwig" />
      </div>
      <div className="humbletruth">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" alt="" className="ftrwig" />
      </div>
      <div className="humbletruth">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" alt="" className="ftrwig" />
      </div>
    </div>
    </div>
  </div>
</div>
      {/* COL BOXES---START */}

    </>
  );
};

export default Fitness;
