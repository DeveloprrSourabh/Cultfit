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
              <div className="hgjuyhbtn">BEST SELLER</div>
            </div>
            <div className="titleconti">
              <div className="chsesze">Choose Size</div>
              <div className="szeguide">Size Guide</div>
            </div>
            <div className="mskf">
              <div className="sdfrtgbh">S</div>
              <div className="sdfrtgbh">M</div>
              <div className="sdfrtgbh">L</div>
              <div className="sdfrtgbh">XL</div>
              <div className="sdfrtgbh">XXL</div>
            </div>
            <div className="jklbt">
              <div className="jkl2bt">
                <div className="jklbt21">Add to Cart</div>
              </div>
              <div className="jkl2bt">
                <div className="jklbt21">Buy Now</div>
              </div>
            </div>
            <div className="dtltre">
              <div className="dtlddd">
                <div className="lkoikjui">PRODUCT DETAILS</div>
              </div>
              <div className="ulliokjs">
                <ul className="unoder">
                  <li className="filopf">Colour: Black</li>
                  <li className="filopf">Fabric: 100% Polyester</li>
                  <li className="filopf">Breathable fabric, Supersoft</li>
                  <li className="filopf">Light weight, Flydry</li>
                  <li className="filopf">Moisture Wicking</li>
                  <li className="filopf">
                    Medium to Light intensity activities
                  </li>
                </ul>
              </div>
            </div>
            <div className="khlpil">
              <div className="belop"></div>
              <div className="pflkhjgfdfs">
                <p className="sjjsjjss"></p>
                <div className="indhdhjdi">
                  <input
                    pattern="[0-9]"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="Enter your pincode"
                    type="text"
                    className="shghii"
                  />
                  <button className="hdhhgfhbtn">CHECK</button>
                </div>
              </div>
            </div>
            <ul className="2ndkjkh">
              <li className="li2nd">
                <span className="span2nd"> Free delivery within 5-7 days</span>
                <span className="span2nd"> Easy 30 days return available</span>
                <span className="span2nd"> 30 days exchange available</span>
                <span className="span2ndalg">
                  To minimise contact between you and the delivery partner, Pay
                  on Delivery option is temporarily disabled.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
