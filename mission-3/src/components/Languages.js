import './Languages.css';
import nz_flag from '../images/Home/NZ Flag.png';
import maori_flag from '../images/Home/Maori flag.png';

function Languages () {
  return (
    <div>
      <img id="nz_flag" src={nz_flag} alt="NZ Flag" />
      <img id="maori_flag" src={maori_flag} alt="Maori Flag" />
    </div>
  );
};

export default Languages;