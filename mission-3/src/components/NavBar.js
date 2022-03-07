import '../App.css';
import './NavBar.css';

function NavBar () {
  return (
    <div className="header_button">
      <div id="header_left_button">
        Take Screenshot
      </div>
      <div id="header_mid_button">
        Help Centre
      </div>
      <div id="header_right_button">
        More Projects
      </div>
    </div>
  );
}

export default NavBar;