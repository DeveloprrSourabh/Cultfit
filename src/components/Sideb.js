import React from 'react';
import"./styles/side.css";
import { Link } from "react-router-dom";

const Sideb = ({sidebar}) => {
  return (
    <>

    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
<div className="crtero">

  <div className="errovret">
    <Link to="/store">
    <img src="https://static.cure.fit/assets/images/back-arrow-black.svg" alt="" className="crtrtecdft" />
    </Link>
  </div>
 <div className="yourcart">
    Your Cart
  </div>
 
</div>

<div className="prdtcrt">
  <div className="piccrt">
    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_125,ar_5:6,c_fit/dpr_2/cultgear-content/vtg2iiscHQwMC3K1Dd6C8ztf" alt="" className="iiiopicrt" />
  </div>
  <div className="vcationcrt">
      <div className="fcrttion">Urban Terrain</div>
    <div className="hjyitcrt2">UT1001, Blue, Steel MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)</div>
    <div className="brtcrt">
      <div className="sizecrt">Size:ALL</div>
      <div className="bhvccrt">
      ₹ 12999
      </div>
      <div className="hjycrtpm">
        <img src="https://static.cure.fit/assets/images/minus.svg" alt="" className="minusimg" />
<div className="countgdhy">1</div>
<img src="https://static.cure.fit/assets/images/minus.svg" alt="" className="minusimg" />

      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Sideb