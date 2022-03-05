import '../App.css'

function NavBar () {
  return (
    <div className="header_button">
      <li id="header_left_button">
        Take Screenshot
      </li>
      <li id="header_mid_button">
        Help Centre
      </li>
      <li id="header_right_button">
        More Projects
      </li>
    </div>
  );
}

export default NavBar;