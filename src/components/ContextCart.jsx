import React, { useContext, useState } from 'react';
import Backdrop from './Backdrop';
import Cardapi from './Cardapi';
import Sideb from './Sideb';
import { CartContext } from './Store';
import Storebtn from './Storebtn';


const ContextCart = ({quantity}) => {
//   const [item, setItem] = useState(Cardapi);

  const {item} = useContext(CartContext);

    const [sidebar, setsidebar] = useState(false);

const toggleSidebar = () => {
  setsidebar((prevState) => !prevState);
};
  return (
    <>
    
    <div className="loginkr">
                <div className="lfx">
                <Storebtn openSidebar={toggleSidebar} />
        <div className="cartItem22">{quantity}</div>
                </div>

                <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
                <div className="scoll">
                
                  {item.map((curItem) => {
                    return (
                      <>
                      <Sideb key={curItem.id} {...curItem} sidebar={sidebar} />
                    
                    </>
                    );
                   
                  })}
                  
                </div>
              </div>
    </>
  )
}

export default ContextCart