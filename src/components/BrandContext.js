import React, { useContext, useState } from 'react'
import Brand from './Brand';
import Cardapi from './Cardapi';
import { CartContext } from './Store';

const BrandContext = () => {
  // const {item} = useContext(CartContext);

  const[list,setList]= useState(Cardapi)

const handleDelete =(i)=>{
  const deletVal = [...list]
  deletVal.splice(i)
  setList(deletVal)
}

  return (
    <>
      {list.map((Ele,i) => {
                    return (
                      <>
                      <Brand key={Ele.id} {...Ele}  />
                    <button onClick={()=>handleDelete(i)} className="outline-primary ggf">x</button>
                    </>
                    );
                   
                  })}
                   
    </>
  )
}

export default BrandContext