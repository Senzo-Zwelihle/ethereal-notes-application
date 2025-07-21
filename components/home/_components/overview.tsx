"use client";

import { motion } from "motion/react";
import { Container } from "@/components/core/_components/container";
import React from "react";
import { overviewItems } from "@/data/constants/overview";

const Overview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };
  return (
    <Container size={"2xl"} height={"full"} padding={"md"} id="overview">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <div className="relative mx-auto grid max-w-5xl divide-x divide-y border-2 *:p-12 sm:grid-cols-2 lg:grid-cols-3  rounded-t-2xl">
          {overviewItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="space-y-3 rounded-t-2xl"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                custom={i}
              >
                <div className="flex items-center gap-2 ">
                  <Icon className="size-4" />
                  <h3 className="text-sm font-medium">{item.title}</h3>
                </div>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Overview;
