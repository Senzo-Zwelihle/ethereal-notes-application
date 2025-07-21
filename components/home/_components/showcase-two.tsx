"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Iphone15Pro from "@/public/assets/images/marketing/iPhone-15-Pro.png";
import React, { useRef } from "react";
import { Container } from "@/components/core/_components/container";
import Image from "next/image";

const ShowcaseTwo = () => {
  const mobileReference = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mobileReference,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  return (
    <Container
      size={"2xl"}
      alignment={"none"}
      height={"full"}
      padding={"md"}
      id="/"
      className="overflow-x-hidden"
    >
      {" "}
      <div className="pb-24 pt-12 md:pb-32 lg:pb-56">
        <div className="relative mx-auto flex flex-col items-center lg:flex-row">
          <motion.div
            style={{
              translateX: translateX,
            }}
            className="-z-10 h-56 w-full object-cover sm:h-96 lg:w-1/2 lg:h-max lg:object-contain lg:static lg:ml-0"
          >
            <Image
              ref={mobileReference}
              src={Iphone15Pro}
              alt="Mobile Device"
              width={3000}
              height={4000}
              priority
              quality={80}
              loading="eager"
              className="w-full h-full object-contain invert dark:mix-blend-lighten dark:invert-0"
            />
          </motion.div>

          <div className="text-center max-w-lg lg:ml-auto lg:w-1/2 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-bold md:text-6xl lg:mt-16">
              Coming Soon to Your Pocket.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg">
              Get ready to capture inspiration anywhere, anytime. Our dedicated
              mobile app for Ethereal Notes is currently in the works, bringing
              powerful note-taking right to your smartphone. Look for us soon on
              the App Store and Google Play!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShowcaseTwo;
