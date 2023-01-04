import React from 'react';
import"./styles/side.css";


const Sideb = ({sidebar}) => {
  return (
    <>

    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
        <li className="HOME">Home</li>
        <li className="HOME">Product</li>
        <li className="HOME">Carrer</li>
        <li className="HOME">Help</li>
    </div>
    </>
  )
}

export default Sideb