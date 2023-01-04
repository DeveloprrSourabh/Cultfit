import React from 'react';
import"./styles/side.css";


const Sideb = ({sidebar}) => {
  return (
    <>

    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
<div className="crtero">
  <div className="errovret">
    <img src="https://static.cure.fit/assets/images/back-arrow-black.svg" alt="" className="crtrtecdft" />
  </div>
  <div className="yourcart">
    Your Cart
  </div>
</div>


    </div>
    </>
  )
}

export default Sideb