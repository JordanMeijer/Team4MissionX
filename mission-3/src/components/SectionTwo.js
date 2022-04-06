import React from "react";
import PhotoOne from "../images/Home/girl-in-white-long-sleeve-dress-sitting-on-brown-wooden-3913426.png";
import PhotoTwo from "../images/Home/markus-spiske-AoX_1zm1NOM-unsplash.png";
import PhotoThree from "../images/Home/girl-in-red-dress-playing-a-wooden-blocks-3662667.png";
import PhotoFour from "../images/Home/annie-spratt-xKJUnFwfz3s-unsplash.png";
import "../components/SectionTwo.css";

function SectionTwo() {
  return (
    <section>
      <h1>
        Teaching kids programming and digital skills is <b>MORE</b> than just
        writing code.
      </h1>
      <div className="image_box">
        <div>
          <img src={PhotoOne} className="image image_one"></img>
        </div>
        <div>
          <img src={PhotoTwo} className="image image_two"></img>
        </div>
        <div>
          <img src={PhotoThree} className="image image_three"></img>
        </div>
        <div>
          <img src={PhotoFour} className="image image_four"></img>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
