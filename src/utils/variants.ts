interface Props {
  direction: "up" | "right" | "down" | "left";
  distance: number;
  duration: number;
  delay: number;
}

export const fadeIn = ({ direction, distance, duration, delay }: Props) => {
  return {
    hidden: {
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      opacity: 0,
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
