import "./Navbar.css";
import { Logo, CloseMenu, Hamburger, ArrowDark, ArrowLight } from "../assets";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProductLinks, setShowProductLinks] = useState(false);
  const [showCompanyLinks, setShowCompanyLinks] = useState(false);
  const [showConnectLinks, setShowConnectLinks] = useState(false);

  return (
    <nav>
      <a href="#" className="Logo" aria-label="blogr">
        <img src={Logo} alt="" />
      </a>
      <div className="Menu">
        {!isMenuOpen && (
          <button
            id="menuBtn"
            aria-label="menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={Hamburger} alt="" />
          </button>
        )}

        {isMenuOpen && (
          <button
            id="closeMenuBtn"
            aria-label="closeMenu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={CloseMenu} alt="" />
          </button>
        )}
      </div>
      <div className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <ul>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setShowProductLinks((prev) => !prev)}>
              Product
            </a>
            <img
              src={isMenuOpen ? ArrowDark : ArrowLight}
              alt=""
              className={showProductLinks ? "rotate" : ""}
            />
            {showProductLinks && (
              <ul>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Overview{" "}
                  </a>
                </li>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Pricing
                  </a>
                </li>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Marketplace
                  </a>
                </li>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Features
                  </a>
                </li>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Integrations
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setShowCompanyLinks((prev) => !prev)}>
              Company
            </a>
            <img
              src={isMenuOpen ? ArrowDark : ArrowLight}
              alt=""
              className={showCompanyLinks ? "rotate" : ""}
            />

            {showCompanyLinks && (
              <ul>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    About
                  </a>
                </li>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Team
                  </a>
                </li>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Blog
                  </a>
                </li>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Careers
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setShowConnectLinks((prev) => !prev)}>
              Connect
            </a>
            <img
              src={isMenuOpen ? ArrowDark : ArrowLight}
              alt=""
              className={showConnectLinks ? "rotate" : ""}
            />

            {showConnectLinks && (
              <ul>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Contact
                  </a>
                </li>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Newsletter
                  </a>
                </li>
                <li className="NavLinks-Link-SubLink">
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    Linkedin
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div>
          <button className="NavLinks-Login">Login</button>
          <button className="NavLinks-SignUp">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
