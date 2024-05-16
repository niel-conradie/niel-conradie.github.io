import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiSass,
  SiTypescript,
} from "react-icons/si";

export default function Cube() {
  return (
    <div className="cube">
      <div className="face front flex items-center justify-center border opacity-90">
        <SiPython className="python text-9xl" />
      </div>
      <div className="face back flex items-center justify-center border opacity-90">
        <SiJavascript className="javascript text-9xl" />
      </div>
      <div className="face left flex items-center justify-center border opacity-90">
        <SiTypescript className="typescript text-9xl" />
      </div>
      <div className="face right flex items-center justify-center border opacity-90">
        <SiHtml5 className="html text-9xl" />
      </div>
      <div className="face top flex items-center justify-center border opacity-90">
        <SiCss3 className="css text-9xl" />
      </div>
      <div className="face bottom flex items-center justify-center border opacity-90">
        <SiSass className="sass text-9xl" />
      </div>
    </div>
  );
}
