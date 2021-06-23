import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <img style={{ display: 'block',marginLeft: 'auto',marginRight: 'auto',width: '50%'}}
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Mouhib")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <a href="https://github.com/Mouhibb">
          </a>
        </p>
      </div>
    </Fade>
  );
}
