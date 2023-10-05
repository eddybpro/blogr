import "./Features.css";
import { IllustraLaptopM, IllustraLaptopD } from "../assets";

function Features() {
  return (
    <div className="FeaturesContainer">
      <div className="FeaturesContainer-ImgBox">
        <picture>
          <source media="(max-width:768px)" srcSet={IllustraLaptopM} />
          <source media="(min-width:769px)" srcSet={IllustraLaptopD} />
          <img src={IllustraLaptopM} alt="laptop" />
        </picture>
      </div>
      <div className="FeaturesContainer-TxtBox">
        <h1 className="FeaturesContainer-TxtBox-Title">Free, open, simple</h1>
        <p className="FeaturesContainer-TxtBox-Para">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h1 className="FeaturesContainer-TxtBox-Title">Powerful tooling</h1>
        <p className="FeaturesContainer-TxtBox-Para">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </div>
  );
}
export default Features;
