import React, { useState } from 'react'
import Brand from './Brand';
import Cardapi from './Cardapi';

const BrandContext = () => {
  const[item,setItem]= useState(Cardapi)

  return (
    <>
     {item.map((curItem) => {
                    return (
                      <>
                      <Brand key={curItem.id} {...curItem}/>
                    
                    </>
                    );
                   
                  })}
    </>
  )
}

export default BrandContext