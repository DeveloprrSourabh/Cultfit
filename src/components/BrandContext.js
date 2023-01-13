import React, { useContext, useState } from "react";
import Brand from "./Brand";
import Cardapi from "./Cardapi";
import { CartContext } from "./Store";
// const {a} = useContext(ContextBrand);

  const [list, setList] = useState(Cardapi);

  const handleDelete = (i) => {
    const deletVal = [...list];
    deletVal.splice(i, 1);
    setList(deletVal);
  };

  return (
    <>
      <div className="klji">
        {list.map((Ele, i) => {
          return (
            <>
              <div className="kjkjfx">
                <Brand key={Ele.id} {...Ele} />
                <div className="h">
                  <img
                    onClick={() => handleDelete(i)}
                    src="https://static.cure.fit/assets/images/modal-close.svg"
                    alt=""
                    className="dele_item"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    <Storenav />
    <div className="check_page">
        <div className="container">
          <div className="p">
            
          {list.map((Ele,i) => {
                    return (
                      <>
                    <div className="kjkjfx">
                    <Brand key={Ele.id} {...Ele}  />
                   <div className="h">
                   <img
                   onClick={()=>handleDelete(i)} 
                  src="https://static.cure.fit/assets/images/modal-close.svg"
                      alt=""
                      className="dele_item"
                    />
                   </div>
                    </div>
                    </>
                    );
                   
                  })}
           
          </div>
        </div>
      </div>
   <div className="klji">
   
   </div>
                   
    </>
  );
};

export default BrandContext;
