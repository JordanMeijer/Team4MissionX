import React from "react";
import PhotoOne from "../images/Home/idea copy.png";
import PhotoTwo from "../images/Home/brain copy.png";
import PhotoThree from "../images/Home/team copy.png";
import PhotoFour from "../images/Home/atom copy.png";
import "../components/SectionTwo.css";

function SectionTwo() {
  return (
    <section>
      <h1 className="sectiontwo_h1">
        Teaching kids programming and digital skills is <b>MORE</b> than just
        writing code.
      </h1>
      <div className="sectiontwo_image_box">
        <div className="sectiontwo_image_frame sectiontwo_image_frame_one">
          <img src={PhotoOne} className="sectiontwo_image sectiontwo_image_one" alt="imageone"></img>
          <br></br>
          <p className="sectiontwo_text">Creativity & Individuality</p>
        </div>
        <div className="sectiontwo_image_frame sectiontwo_image_frame_two">
          <img src={PhotoTwo} className="sectiontwo_image sectiontwo_image_two" alt="imagetwo"></img>
          <br></br>
          <p className="sectiontwo_text">Critical Thinking & Problem Solving</p>
        </div>
        <div className="sectiontwo_image_frame sectiontwo_image_frame_three">
          <img src={PhotoThree} className="sectiontwo_image sectiontwo_image_three" alt="imagethree"></img>
          <br></br>
          <p className="sectiontwo_text">Communication & Collaboration</p>
        </div>
        <div className="sectiontwo_image_frame sectiontwo_image_frame_four">
          <img src={PhotoFour} className="sectiontwo_image sectiontwo_image_four" alt="imagefour"></img>
          <br></br>
          <p className="sectiontwo_text">Technology & Future Focus</p>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
