import React, { useContext, useState } from 'react'
import Brand from './Brand';
import Cardapi from './Cardapi';
import { CartContext } from './Store';

const BrandContext = () => {
  // const {item} = useContext(CartContext);

  const[list,setList]= useState(Cardapi)

  return (
    <>
      {list.map((Ele) => {
                    return (
                      <>
                      <Brand key={Ele.id} {...Ele}  />
                    
                    </>
                    );
                   
                  })}
                   
    </>
  )
}

export default BrandContext