import React, { useEffect, useState } from "react";
import tShirtPng from "../assets/t-shirt.png";
import { Link } from "react-router-dom";
const Constructor = ({ addItem }) => {
  const [size, setSize] = useState("XXS");
  const [fontFamily, setFontFamily] = useState("");
  const [fontSize, setFontSize] = useState(14);
  const [printText, setPrintText] = useState("");
  const [price, setPrice] = useState(10);
  const [img, setSrc] = useState("");

  return (
    <div className="wrapper constructor-wrapper">
      <Link to={"/"} className=" link back-to-menu">
        <img
          src="https://img.icons8.com/bubbles/100/left.png"
          alt="back-to-main-menu"
        />
      </Link>
      <div className="form-conctructor">
        <label>
          <input type="color" onChange={(e) => console.log(e.target.value)} />

          <div className="circle">
            <br />
            T-shirt <br /> color
          </div>
        </label>
        <div className="form-item">
          <p>Add text on the t-shirt</p>
          <input type="text" placeholder={`TEXT `} />
        </div>
        <div className="radio-container">
          <label>
            <input type="radio" name="size" value="XXS" /> XXS
          </label>
          <label>
            <input type="radio" name="size" value="XS" /> XS
          </label>
          <label>
            <input type="radio" name="size" value="S" /> S
          </label>
          <label>
            <input type="radio" name="size" value="M" /> M
          </label>
          <label>
            <input type="radio" name="size" value="L" /> L
          </label>
          <label>
            <input type="radio" name="size" value="XL" /> XL
          </label>
          <label>
            <input type="radio" name="size" value="XXL" /> XXL
          </label>
        </div>
        <button className="btn add-bskt-btn">Add to basket</button>
      </div>
      <div className="result-container">
        <img src={tShirtPng} alt="" className="main-item color-changing-img" />
      </div>
      {/* <button onClick={() => addItem({ title: 123 })}>asd</button> */}
    </div>
  );
};

export default Constructor;
