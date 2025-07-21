"use client";
import { motion, useScroll, useTransform } from "motion/react";
import GalaxyTabS8Ultra from "@/public/assets/images/marketing/Galaxy-Tab-S8-Ultra.png";
import { Container } from "@/components/core/_components/container";
import React, { useRef } from "react";
import Image from "next/image";


const Showcase = () => {
  // parallax effect
  const tabletReference = useRef(null);
  const { scrollYProgress } = useScroll({
    target: tabletReference,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [120, -120]);


  return (
    <Container
      size={"2xl"}
      alignment={"none"}
      height={"full"}
      padding={"md"}
      id="/"
      className="overflow-x-hidden"
    >
      <section>
        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-60">
          <div className="relative mx-auto flex flex-col  lg:block">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl font-bold md:text-6xl lg:mt-16">
                Perfectly Captured on Any Device.
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg">
                Ethereal Notes syncs your ideas seamlessly across every screen.
                Whether you're on the go with your phone, deep in focus on your
                tablet, or powering through tasks on your desktop, your notes
                are always ready, right where you left them. Capture
                inspiration, organize projects, and access everything,
                everywhere.
              </p>
            </div>

            <motion.div
              style={{
                translateY: translateY,
              }}
              className="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
            >
              <Image
                ref={tabletReference}
                src={GalaxyTabS8Ultra}
                alt="Galaxy Tab S8 Ultra"
                quality={95}
                height="4000"
                width="3000"
              />
            </motion.div>
          </div>
        </div>
      </section>

     
    </Container>
  );
};

export default Showcase;
