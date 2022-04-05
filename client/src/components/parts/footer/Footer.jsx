import { useRef, useState } from "react";
import { StyledFooter } from "./StyledFooter.js";
import ContactFooter from "./ContactFooter.jsx";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Footer = () => {
  const [toggle, setToggle] = useState(true);
  const arrowRef = useRef();

  const toggleFooter = () => {
    setToggle(!toggle);
    arrowRef.current.classList.toggle("flip-arrow");
  }

  return (
    <StyledFooter toggle={toggle} >
      <ContactFooter name="Marcos Bazbih" info="24 years old, Ashdod" email="marcosbazbih@gmail.com" linkedin="https://www.linkedin.com/in/marcos-bazbih/" github="https://github.com/Marcos-Bazbih" img="/marcos_pic.jpg" />
      <ContactFooter name="Eden Genet Tasama" info="26 years old, Rehovot" email="Edentasama19@gmail.com" linkedin="https://www.linkedin.com/in/eden-genet-tasama-8a2a18220/" github="https://github.com/EdenGenetTasama" img="/eden.jpeg" />
      <ContactFooter name="Shimon Samay" info="22 years old, Natanya" email="shimonsamay7@gmail.com" linkedin="https://www.linkedin.com/in/shimon-samay-363a27217/" github="https://github.com/ShimonSamay" img="/shimon  _pic.jpeg" />
      <ContactFooter name="Liel Itzchak" info="22 years old, Neria" email="liel.izcha321@gmail.com" linkedin="https://www.linkedin.com/in/lielitzchak/" github="https://github.com/lielitzchak" img="/liel_pic.jpeg" />
      <ContactFooter name="Haim Ayenow" info="24 years old, Natanya" email="haimaye074@gmail.com" linkedin="https://www.linkedin.com/in/haim-ayenow-0065a4226/" github="https://github.com/Haim-Ayenow" img="/haim_pic.jpeg" />
      <button onClick={toggleFooter} className="open-footer-btn">
        <ArrowCircleUpIcon ref={arrowRef} className="open-footer-icon" />
        Who are we?
      </button>
    </StyledFooter>
  );
};

export default Footer;



