import './HomeHero.css';
import HeroImage from '../images/Home/Hero image option 1 edit 2.png';

function HomeHero () {
  return (
    <div className="homehero_wrapper">
      <img className="homehero_image" src={HeroImage} alt="hero-option-1-edit-2" />
      <h1 className="homehero_h1">Prepare young minds for a better <span className="homehero_future">future.</span></h1>
      <h3 className="homehero_h3">Let us help you advance students in Digital Technologies and other 
        learning areas with our project-based learning programme.</h3>
      <button className="homehero_learn_button">LEARN MORE</button>
      <button className="homehero_signup_button">SIGN UP</button>
      <p className="homeheader_p">*Basic subscription includes the first 15 projects free of charge.</p>
    </div>
  );
};

export default HomeHero;