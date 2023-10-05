import "./Infrastructure.css";
import { IllustraPhones } from "../assets";

function Infrastructure() {
  return (
    <div className="InfraContainer">
      <div className="InfraContainer-ImgBox">
        <img src={IllustraPhones} alt="infrastructure" />
      </div>
      <div className="InfraContainer-TxtBox">
        <h1 className="InfraContainer-TxtBox-Title">
          State of the Art Infrastructure
        </h1>
        <p className="InfraContainer-TxtBox-Para">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive
        </p>
      </div>
    </div>
  );
}
export default Infrastructure;
