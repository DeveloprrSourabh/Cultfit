import React from "react";
import {useParams } from "react-router-dom";
import Cardapi from "./Cardapi";
import Storenav from "./Storenav";
import "./styles/Details.css"


const Details = () => {

  const proid = useParams();
  const proDetail = Cardapi.filter((x) => x.id == proid.id);
  const product = proDetail[0];

  return (
    <>

<Storenav />
<div className="dtpg">
  <div className="igstpg">
  <div className="igmgdtg">
    <img src={product.img[0]} alt="" className="dtigmgnhj" />
  </div>
  <div className="igmgdtg">
    <img src={product.img[1]} alt="" className="dtigmgnhj" />
  </div>
  <div className="igmgdtg">
    <img src={product.img[2]} alt="" className="dtigmgnhj" />
  </div>
  <div className="igmgdtg">
    <img src={product.img[3]} alt="" className="dtigmgnhj" />
  </div>
  </div>
</div>
    </>

  )
}

export default Details