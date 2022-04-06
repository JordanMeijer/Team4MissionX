import { useState } from 'react';
import "./HomeOffer.css";

function HomeOffer() {
  const [pathImage, setPathImage] = useState('./images/Home/Projects 01.png');
  const [button1Style, setButton1Style] = useState('HomeOfferFullCircle');
  const [button2Style, setButton2Style] = useState('HomeOfferClearCircle');
  const [button3Style, setButton3Style] = useState('HomeOfferClearCircle');
  const [button4Style, setButton4Style] = useState('HomeOfferClearCircle');
  
  function updateImage (event) {
    if (event === 'joystick') {
      setPathImage('./images/Home/Projects 02.png');
      setButton1Style('HomeOfferClearCircle'); 
      setButton2Style('HomeOfferFullCircle'); 
      setButton3Style('HomeOfferClearCircle'); 
      setButton4Style('HomeOfferClearCircle'); 
    }
    else if (event === 'chatbots') {
      setPathImage('./images/Home/Projects 03.png');
      setButton1Style('HomeOfferClearCircle'); 
      setButton2Style('HomeOfferClearCircle'); 
      setButton3Style('HomeOfferFullCircle'); 
      setButton4Style('HomeOfferClearCircle'); 
    }
    else if (event === 'augmented_reality') {
      setPathImage('./images/Home/Projects 04.png');
      setButton1Style('HomeOfferClearCircle'); 
      setButton2Style('HomeOfferClearCircle'); 
      setButton3Style('HomeOfferClearCircle'); 
      setButton4Style('HomeOfferFullCircle'); 
    }
    else if (event === 'animation') {
      setPathImage('./images/Home/Projects 01.png');
      setButton1Style('HomeOfferFullCircle'); 
      setButton2Style('HomeOfferClearCircle'); 
      setButton3Style('HomeOfferClearCircle'); 
      setButton4Style('HomeOfferClearCircle'); 
    }
  }

  return (
    <>
      <div className="HomeOfferBody">
        <div className="HomeOfferLeftSide">
          <h1 className="HomeOfferH1Tag">What we offer</h1>
          <p className="HomeOfferPTag">The Creative Problem Solving programme is series of <br></br>
            digital creation projects aimed to encourage self-<br></br>
            motivation and student agency, designed by New <br></br>
            Zealand’s leading IT industry experts and schools.</p>
          <h3 className="HomeOfferH3Tag">What will students create?</h3>
          <div className="HomeOfferLeftButtons">
            <div 
              className="HomeOfferCreate"
              id="animation"
              onClick={(e) => updateImage(e.target.id)}>
              <img 
                className="HomeOfferLeftImage" 
                src="./images/Home/frame copy.png" 
                alt="animation" 
                onClick={(e) => updateImage(e.target.alt)} /><br></br>ANIMATION
            </div>
            <div 
              className="HomeOfferCreate"
              id="joystick"
              onClick={(e) => updateImage(e.target.id)}>
              <img
              className="HomeOfferLeftImage"
              src="./images/Home/joystick copy.png" 
              alt="joystick"
              onClick={(e) => updateImage(e.target.alt)} /> <br></br>GAMES
            </div>
            <div 
              className="HomeOfferCreate"
              id="chatbots"
              onClick={(e) => updateImage(e.target.id)}>
              <img 
                className="HomeOfferLeftImage" 
                src="./images/Home/robotic copy.png" 
                alt="chatbots"
                onClick={(e) => updateImage(e.target.alt)}/> <br></br>CHATBOTS
            </div>
            <div 
              className="HomeOfferCreate"
              id="augmented_reality" 
              onClick={(e) => updateImage(e.target.id)}>
              <img 
                className="HomeOfferLeftImage" 
                src="./images/Home/augmented-reality copy.png" 
                alt="augmented_reality" 
                onClick={(e) => updateImage(e.target.alt)} /><br></br>AUGMENTED REALITY
            </div>
          </div>
        </div>
        <div className="HomeOfferRightSide">
          <img src={pathImage} className="HomeOfferRightImage" alt="students_creation" />
          <div className="HomeOfferRightButtons">
            <button 
              onClick={(e) => updateImage(e.target.id)}
              className={button1Style}
              id="animation"></button>
            <button 
              onClick={(e) => updateImage(e.target.id)}
              className={button2Style}
              id="joystick"></button>
            <button 
              onClick={(e) => updateImage(e.target.id)}
              className={button3Style}
              id="chatbots"></button>
            <button 
              onClick={(e) => updateImage(e.target.id)}
              className={button4Style}
              id="augmented_reality"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOffer;