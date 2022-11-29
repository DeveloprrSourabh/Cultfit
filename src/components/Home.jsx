import React from "react";
import home from "./styles/home.css";

const Home = () => {
  return (
    <>
      <div className="video">
        <video
          autoplay=""
          loop
          playsinline=""
          poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg"
          preload="metadata"
          muted=""
          class="vd"
        >
          <source
            src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default Home;
