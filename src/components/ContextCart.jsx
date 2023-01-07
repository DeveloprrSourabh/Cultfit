import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Cardapi from './Cardapi';
import Sideb from './Sideb';
import Storebtn from './Storebtn';


const ContextCart = () => {
  const [item, setItem] = useState(Cardapi);

    const [sidebar, setsidebar] = useState(false);

const toggleSidebar = () => {
  setsidebar((prevState) => !prevState);
};
  return (
    <>
    
    <div className="loginkr">
                <Storebtn openSidebar={toggleSidebar} />
                <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
                <div className="scoll">
                
                  {item.map((curItem) => {
                    return (
                      <>
                      <Sideb key={curItem.id} {...curItem} sidebar={sidebar} />
                      <div className="kata">
                      <img
                      sidebar={sidebar} 
                        src="https://static.cure.fit/assets/images/modal-close.svg"
                        className="imgktgt"
                      />
                    </div>
                    </>
                    );
                   
                  })}
                  
                </div>
              </div>
    </>
  )
}

export default ContextCart