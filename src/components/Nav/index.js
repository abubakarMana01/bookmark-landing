import React, { useState, useEffect } from "react";
import "./styles.css";

function Nav() {
  const [isOpened, setIsOpened] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpened(!isOpened);
  };

  const menu = document.querySelector(".nav-links");
  useEffect(() => {
    if (isOpened) {
      document.querySelector(".nav-links").style.transform = "scale(100%)";
    } else {
      document.querySelector(".nav-links").style.transform = "scale(0%)";
    }
  }, [isOpened]);

  return (
    <nav className="nav">
      <div className="logo">
        <img src="./images/logo-bookmark.svg" />
      </div>
      <div className="nav-links" id="nav-links">
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
        <div className="social-links">
          <img src="./images/icon-facebook.svg" className="social-icons" />
          <img src="./images/icon-twitter.svg" className="social-icons" />
        </div>
      </div>
      <div className="nav-links" id="nav-links">
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
        <div className="social-links">
          <img src="./images/icon-facebook.svg" className="social-icons" />
          <img src="./images/icon-twitter.svg" className="social-icons" />
        </div>
      </div>

      <img
        onClick={handleHamburgerClick}
        className="hamburger"
        src="./images/icon-hamburger.svg"
        width="20"
        height="20"
      />
    </nav>
  );
}

export default Nav;
