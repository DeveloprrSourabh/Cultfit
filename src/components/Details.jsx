import React from "react";
import { useParams } from "react-router-dom";
import Cardapi from "./Cardapi";
import Storenav from "./Storenav";
import "./styles/Details.css";

const Details = () => {
  const proid = useParams();
  const proDetail = Cardapi.filter((x) => x.id == proid.id);
  const product = proDetail[0];

  return (
    <>
      <Storenav />
      <div className="dtpg">
        <div className="igstpg">
          <div className="ghftytfff">
            <div className="igmgdtg">
              <img src={product.img[0]} alt="" className="dtigmgnhj" />
            </div>
            <div className="igmgdtg">
              <img src={product.img[1]} alt="" className="dtigmgnhj" />
            </div>
            <div className="igmgdtg">
              <img src={product.img[2]} alt="" className="dtigmgnhj" />
            </div>
            <div className="igmgdtg">
              <img src={product.img[3]} alt="" className="dtigmgnhj" />
            </div>
          </div>
        </div>
        <div className="treehed">
          <div className="alltree">
            <div className="hhjdghf">CULTSPORTONE</div>
          </div>
          <div className="trreehd">
            <div className="mothd">Solid Active Tshirt with Logo</div>
            <div className="prizertr">
              <p className="fprtr">₹ 539</p>
              <p className="fprtr1">₹ 899</p>
              <p className="fprtr2">40 % Off</p>
            </div>
            <div className="paraf">
              <p className="trparaf">
                Update your sportswear essentials, with this practical and
                versatile t-shirt from Cultsport One. It's designed in a
                comfortable fit and with all performance features. The
                breathable fabric is moisture-wicking and quick-drying, to keep
                you cool and collected no matter how hard you train.
              </p>
            </div>
            <div className="sunobtn">
              <div className="hgjuyhbtn">
                BEST SELLER
              </div>
            </div>
            <div className="titleconti">
              <div className="chsesze">Choose Size</div>
              <div className="szeguide">Size Guide</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
