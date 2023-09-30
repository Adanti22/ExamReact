import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Basket = function ({ basketList }) {
  return (
    <div>
      <Link to={"/"} className=" link back-to-menu">
        <img
          src="https://img.icons8.com/bubbles/100/left.png"
          alt="back-to-main-menu"
        />
      </Link>
      <h2>BASKET</h2>
      <div className="basket-container">
        {basketList.length > 0 ? (
          basketList.map((item, index) => (
            <div key={index}>
              <img src="" alt="" />
              <div className="basket-block__content"></div>
              <div className="basket-block__btns"></div>
            </div>
          ))
        ) : (
          <div className="fly-basket-element">EMPTY</div>
        )}
      </div>
      {basketList.length > 0 ? <div>Buy</div> : ""}
    </div>
  );
};

export default Basket;
