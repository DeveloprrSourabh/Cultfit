import React from "react";
import store from "./styles/store.css";

const Store = () => {
  return (
    <>
      <div>
        <div className="strenbr">
          <div className="nbrstr">
            <div className="strenbrig">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
                alt=""
                className="str1stre"
              />
            </div>
            <div className="fiulpo">
              <ul className="hedstre">
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Best Sellers</h3>
                  <ul class="superCategoryWrapper style-prefix-0">
                    <li class="categoryItem style-prefix-0">
                      <a
                        class=" style-prefix-0"
                        href="/best-selling-mens-collection"
                      >
                        <h3 class="style-prefix-1mapn9e">Sportswear for Men</h3>
                      </a>
                    </li>
                    <li class="categoryItem style-prefix-0">
                      <a
                        class=" style-prefix-0"
                        href="/best-selling-womens-collection"
                      >
                        <h3 class="style-prefix-1mapn9e">
                          Sportswear for Women
                        </h3>
                   {/* HOVER_SHOW---START */}
                   </a>
                    </li>
                    <li class="categoryItem style-prefix-0">
                      <a class=" style-prefix-0" href="/best-selling-cycles-st">
                        <h3 class="style-prefix-1mapn9e">Outdoor Cycles</h3>
                      </a>
                    </li>
                    <li class="categoryItem style-prefix-0">
                      <a class=" style-prefix-0" href="/best-selling-cardio-st">
                        <h3 class="style-prefix-1mapn9e">Cardio Equipments</h3>
                      </a>
                    </li>
                  </ul>
                   {/* HOVER SHOW---END */}
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr">Just Launched</h3>
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Men</h3>
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Women</h3>
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Cardio</h3>
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Cycles</h3>
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> accessories</h3>
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Supplement</h3>
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Equipment</h3>
                </li>
              </ul>
            </div>
            <div className="loginhthju">
              <div className="loginkr">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/cultsport/prod/Profile.svg"
                  alt=""
                  className="lginkr"
                />
              </div>
              <div className="loginkr">
                <img
                  src="https://static.cure.fit/assets/images/cart-icon-new.svg"
                  alt=""
                  className="lginkr"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
