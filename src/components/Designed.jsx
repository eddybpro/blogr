import "./Designed.css";
import { IllustraEditorD, IllustraEditorM } from "../assets";

function Designed() {
  return (
    <div className="DesignedContainer">
      <h2 className="DesignedContainer-Title">Designed for the future</h2>
      <div className="DesignedContainer-ImgBox">
        <picture>
          <source media="(max-width:768px)" srcSet={IllustraEditorM} />
          <source media="(min-width:769px)" srcSet={IllustraEditorD} />
          <img src={IllustraEditorM} alt="editor" />
        </picture>
      </div>
      <div className="DesignedContainer-TxtBox">
        <h2 className="DesignedContainer-TxtBox-Title">
          Introducing an extensible editor
        </h2>
        <p className="DesignedContainer-TxtBox-Para">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h2 className="DesignedContainer-TxtBox-Title">
          Robust content management
        </h2>
        <p className="DesignedContainer-TxtBox-Para">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality,
          you&apos;re in full control.
        </p>
      </div>
    </div>
  );
}
export default Designed;
