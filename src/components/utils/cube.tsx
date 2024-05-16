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
    <div className="cube relative h-[12.5rem] w-[12.5rem]">
      <div className="face front absolute flex h-[12.5rem] w-[12.5rem] items-center justify-center border bg-background/95 opacity-90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SiPython className="python animate-pulse text-8xl" />
      </div>

      <div className="face back absolute flex h-[12.5rem] w-[12.5rem] items-center justify-center border bg-background/95 opacity-90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SiJavascript className="javascript animate-pulse text-8xl" />
      </div>

      <div className="face left absolute flex h-[12.5rem] w-[12.5rem] items-center justify-center border bg-background/95 opacity-90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SiTypescript className="typescript animate-pulse text-8xl" />
      </div>

      <div className="face right absolute flex h-[12.5rem] w-[12.5rem] items-center justify-center border bg-background/95 opacity-90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SiHtml5 className="html animate-pulse text-8xl" />
      </div>

      <div className="face top absolute flex h-[12.5rem] w-[12.5rem] items-center justify-center border bg-background/95 opacity-90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SiCss3 className="css animate-pulse text-8xl" />
      </div>

      <div className="face bottom absolute flex h-[12.5rem] w-[12.5rem] items-center justify-center border bg-background/95 opacity-90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SiSass className="sass animate-pulse text-8xl" />
      </div>
    </div>
  );
}
