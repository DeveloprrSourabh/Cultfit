import React from "react";
import { Link } from "react-router-dom";
import Cardapi from "./Cardapi";
import Product from "./Product";
import Storenav from "./Storenav";

const Details = (product) => {
  return (
    <>

<Storenav />
<img src={Cardapi.imgsrc[0]} alt="" className="deimg1" />
    </>

  )
}

export default Details