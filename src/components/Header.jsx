import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <h1 className="Title">A modern publishing platform</h1>
      <p className="Para">Grow your audience and build your online brand</p>
      <div className="BtnsContainer">
        <button className="BtnsContainer-StartBtn">Start for Free</button>
        <button className="BtnsContainer-LearnBtn">Learn More</button>
      </div>
    </header>
  );
}
export default Header;
