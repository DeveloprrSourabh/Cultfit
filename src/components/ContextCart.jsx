import React, { useContext, useState } from "react";
import Backdrop from "./Backdrop";
import Cardapi from "./Cardapi";
import Sideb from "./Sideb";
import { CartContext } from "./Store";
import Storebtn from "./Storebtn";
import count from "./Sideb";

const ContextCart = () => {
  //   const [item, setItem] = useState(Cardapi);

  const { item } = useContext(CartContext);

  const [sidebar, setsidebar] = useState(false);

  const toggleSidebar = () => {
    setsidebar((prevState) => !prevState);
  };
  return (
    <>
      <div className="loginkr">
      <div className="lfx">
          <Storebtn openSidebar={toggleSidebar} />

        </div>

        <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
        <div className="scoll">

          {item.map((curItem) => {
            return (
              <>
                <Sideb count={count} key={curItem.id} {...curItem} sidebar={sidebar} />
              </>
            );
          })}
    <div className="outline-primary">{count}</div>

        </div>
      </div>
    </>
  );
};

export default ContextCart;
