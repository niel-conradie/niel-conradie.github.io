"use client";

import Image from "next/image";
import React from "react";

import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { HeroTitle } from "@/components/section/hero";

import { fade } from "@/utils";

export const HeroParallax = ({
  heroItems,
}: {
  heroItems: {
    title: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = heroItems.slice(0, 5);
  const secondRow = heroItems.slice(5, 10);
  const thirdRow = heroItems.slice(10, 15);

  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className="relative flex h-[300vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((item) => (
            <Card key={item.title} item={item} translate={translateX} />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row space-x-20 ">
          {secondRow.map((item) => (
            <Card key={item.title} item={item} translate={translateXReverse} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((item) => (
            <Card key={item.title} item={item} translate={translateX} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="text relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40">
      <motion.div
        variants={fade({
          direction: "left",
          distance: 25,
          duration: 1,
          delay: 4,
        })}
        initial="hidden"
        animate="show"
      >
        <HeroTitle />
      </motion.div>

      <motion.div
        variants={fade({
          direction: "right",
          distance: 0,
          duration: 0.5,
          delay: 4.5,
        })}
        initial="hidden"
        animate="show"
      >
        <p className="mt-8 max-w-2xl text-base tracking-wider md:text-xl">
          Explore my developer portfolio, a curated collection of projects
          demonstrating technical expertise and problem-solving skills.{" "}
          <br className="hidden sm:block" /> From web applications to software
          solutions, explore examples of my work and approach to development.
        </p>
      </motion.div>
    </header>
  );
};

export const Card = ({
  item,
  translate,
}: {
  item: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={item.title}
      className="group/item relative h-96 w-[30rem] flex-shrink-0"
    >
      <div className="block group-hover/item:shadow-2xl ">
        <Image
          src={item.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
          alt={item.title}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-background/95 opacity-0 backdrop-blur group-hover/item:opacity-80 supports-[backdrop-filter]:bg-background/60"></div>
      <h2 className="absolute bottom-4 left-4 text-foreground opacity-0 group-hover/item:opacity-100">
        {item.title}
      </h2>
    </motion.div>
  );
};
