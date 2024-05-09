interface FadeProps {
  direction: "up" | "right" | "down" | "left";
  distance: number;
  duration: number;
  delay: number;
  type?: "tween" | "spring";
  ease?: string | number[];
}

export const fade = ({
  direction,
  distance,
  duration,
  delay,
  type = "tween",
  ease = "linear",
}: FadeProps) => {
  return {
    hidden: {
      opacity: 0,
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      transition: {
        duration: duration,
        delay: delay,
        type: type,
        ease: ease,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        type: type,
        ease: ease,
      },
    },
  };
};
