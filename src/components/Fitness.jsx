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
    </>
  );
};

export default Fitness;
