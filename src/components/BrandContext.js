import React, { useContext, useState } from 'react'
import Brand from './Brand';
import Cardapi from './Cardapi';
import { ContextBrand } from './Cart';
import { CartContext } from './Store';
import "./styles/Cart.css";


const BrandContext = () => {


  const[list,setList]= useState(Cardapi);

const handleDelete =(i)=>{
  const deletVal = [...list]
  deletVal.splice(i,1)
  setList(deletVal)
}

  return (
    <>
   <div className="klji">

                    <div className="kjkjfx">
                    <Brand />
                  
                    </div>
                  
                
   </div>
                   
    </>
  )
}

export default BrandContext;