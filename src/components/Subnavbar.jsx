import React from "react";
import Header from "./Header";
import snvabr from "./styles/snavbar.css";

const Subnavbar = () => {
  return (
    <>
    <Header />
      <div className="subnvbr">
        <div className="allsub">
          <div className="snb">
            <a href="" className="subatag">
              <div className="aindiv">cultpass ELITE</div>
            </a>
            <a href="" className="subatag">
              <div className="aindiv">cultpass PRO</div>
            </a>
            <a href="" className="subatag">
              <div className="aindiv">cultpass Home</div>
            </a>
            <a href="" className="subatag">
              <div className="aindiv">cult Transform</div>
            </a>
            <a href="" className="subatag">
              <div className="aindiv">Luxury Gyms</div>
            </a>
            <a href="" className="subatag oneonly">
              <div className="oneonly1">COMPARE PLANS</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subnavbar;
