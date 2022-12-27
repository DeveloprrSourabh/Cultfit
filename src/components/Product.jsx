import React from 'react';
import './styles/product.css'

function Product(props){
  // console.log(props);
  return (
    <>
    <div key = {props.id} className="apihgth">
    <div className="figprdct">
      <div className="kkprdct">
        <span className="ghjuijki">{props.heading}</span>
      </div> 
      <div className="allvw">
        <a href="" className="vfrtll">{props.subheading}</a>
      </div>
    </div>
    </div>
<div className="productj">
{/* FIRST---START */}
<div className="col-4 hubnhjk">
<a href="" className="mmkkl">
  <div className="agyafinal">
  
  <div className="mnpdctig">
    <img src={props.imgsrc} alt="" className="pdctimghig" />
  </div>
  <div className="mmnjhjhjkl">
      cultsportone
  </div>
  <div className="apiheadi">{props.about}</div>
  <div className="apiagi">
    <p className="apifpr">₹{props.prize}</p>
    <p className="apifpr1"> ₹{props.preprize}</p>
    <p className="apifpr2"> {props.off}% off</p>
  </div>
</div>
  </a>
</div>
  {/* FIRST---END */}

</div>
    </>
  )
}

export default Product