import React from "react";
import Cardapi from "./Cardapi";
import Product from "./Product";

const Ncard = (val) => {
  return (
    <>
      <Product
        key={val.id}
        id={val.id}
        heading={val.heading}
        subheading={val.heading}
        about={val.about}
        imgsrc={val.imgsrc}
        prize={val.prize}
        preprize={val.preprize}
        off={val.off}
      />
    </>
  );
};

export default Ncard;
