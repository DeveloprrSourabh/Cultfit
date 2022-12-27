import React from "react";
import Cardapi from "./Cardapi";
import Product from "./Product";


   function Ncard(val) {
  console.log(val);
  return (
    <Product key={val.id}
      id={val.id}
      subheading={val.subheading}
      heading={val.heading}
      about={val.about}
      imgsrc={val.imgsrc}
      prize={val.prize}
      preprize={val.preprize}
      off={val.off}
    />
  );
}

Cardapi.map(Ncard);
export default Ncard;
