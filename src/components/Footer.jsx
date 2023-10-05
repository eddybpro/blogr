import "./Footer.css";
import { Logo } from "../assets";

function Footer() {
  return (
    <footer className="FooterContainer">
      <a href="#" className="FooterContainer-Logo" aria-label="blogr">
        <img src={Logo} alt="" />
      </a>
      <div className="FooterContainer-LinkBox">
        <p className="FooterContainer-LinkBox-Title">Product</p>
        <ul className="FooterContainer-LinkBox-SubLinksBox">
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Integration</a>
          </li>
        </ul>
      </div>
      <div className="FooterContainer-LinkBox">
        <h3 className="FooterContainer-LinkBox-Title">Company</h3>
        <ul className="FooterContainer-LinkBox-SubLinksBox">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <div className="FooterContainer-LinkBox">
        <h3 className="FooterContainer-LinkBox-Title">Connect</h3>
        <ul className="FooterContainer-LinkBox-SubLinksBox">
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Newsltter</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
