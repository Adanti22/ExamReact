import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const MainPage = () => {
  const clothList = [
    {
      title: "Hoodie",
      priceFrom: 10000,
      src: "https://img.icons8.com/ios-filled/480/FFFFFF/mens-hoodie--v3.png",
    },
    {
      title: "T-Shirt",
      src: "https://img.icons8.com/material/480/FFFFFF/t-shirt--v1.png",
      priceFrom: 4000,
    },
    {
      title: "Trousers",
      src: "https://img.icons8.com/ios-filled/480/FFFFFF/trousers.png",
      priceFrom: 12000,
    },
  ];

  return (
    <>
      <Link to={"/basket"} className="link basket">
        <img
          src="https://img.icons8.com/color-glass/480/wicker-basket.png"
          alt="wicker-basket"
        />
      </Link>
      <div className="clothes-container">
        {clothList.map((i, _) => {
          return (
            <Link
              key={_}
              to={{
                pathname: "/constructor",
              }}
              className="link"
            >
              <div className="cloth-item">
                <img src={i.src} alt="" />
                <p>{i.title}</p>
                <p>
                  Price from: <span className="price">{i.priceFrom}</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MainPage;
