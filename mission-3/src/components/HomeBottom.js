import { useState } from 'react';
import LoginSignupPage from '../pages/LoginSignupPage';
import "./HomeBottom.css";

function HomeBottom() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <LoginSignupPage modalShow={modalShow} setModalShow={setModalShow} />
      <div className="HomeBottomBody">
        <img className="HomeBottomImage" src="./images/Home/teacher-4784916_1920.png" alt="bottom_image" />
        <div className="HomeBottomContent">
          <h1 className="HomeBottomH1Tag">What are you waiting for?</h1>
          <h3 className="HomeBottomH3Tag">Start teaching Digital Technologies <br></br>today.</h3>
          <p className="HomeBottomPTag">If you need more information, we are happy to answer any 
          <br></br>questions you may have</p>
          <div className="HomeBottomButtons">
            <button className="HomeBottomEnquiryButton">ENQUIRE NOW</button>
            <button className="HomeBottomSignUpButton" onClick={() => setModalShow(true)}>SIGN UP</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBottom;