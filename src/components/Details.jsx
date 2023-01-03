import React from "react";
import {useParams } from "react-router-dom";
import Cardapi from "./Cardapi";
import Storenav from "./Storenav";


const Details = () => {

  const proid = useParams();
  const proDetail = Cardapi.filter((x) => x.id == proid.id);
  const product = proDetail[0];

  return (
    <>

<Storenav />
<img src={product.img[0]} alt="" className="deimg1" />
    </>

  )
}

export default Details