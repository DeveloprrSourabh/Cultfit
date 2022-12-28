import React from "react";
import "./styles/product.css";

function Product(props) {
  // console.log(props);
  return (
    <>
      <div key={props.id} className="apihgth">
        <div className="figprdct">
          <div className="kkprdct">
            <span className="ghjuijki">{props.heading}</span>
          </div>
          <div className="allvw">
            <a href="" className="vfrtll">
              {props.subheading}
            </a>
          </div>
        </div>
      </div>
      <a className="flex row productj">
        {/* FIRST---START */}
        <div class="card" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZ34AwObpfWxd3-nusuCkTymEvcfIwbDcK_rY9sFv&s" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        {/* FIRST---END */}
      </a>
    </>
  );
}

export default Product;
