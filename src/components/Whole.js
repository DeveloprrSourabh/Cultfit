import React from 'react'
import BrandContext from './BrandContext'
import Sidehar from './Sidehar'
import Storenav from './Storenav'

const Whole = () => {
  return (
    <>
        <Storenav />
      <div className="check_page">
        <div className="container">
          <div className="p">
           <div className="ghfr">
<BrandContext />
</div>
           
            <Sidehar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Whole