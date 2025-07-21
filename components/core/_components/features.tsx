"use client";

import { Container } from "@/components/core/_components/container";
import React from "react";
import NextJSIcon from "@/components/svg/_components/next-js";
import ConvexIcon from "@/components/svg/_components/convex";
import ClerkIcon from "@/components/svg/_components/clerk";
import BlockNoteIcon from "@/components/svg/_components/blocknote";
import TailwindIcon from "@/components/svg/_components/tailwind";
import ReactJSIcon from "@/components/svg/_components/react-js";
import FeatureCard from "@/components/core/_components/feature-card";
import EtherealLogo from "./logo";


const Features = () => {
  return (
    <Container
      size={"2xl"}
      height={"full"}
      padding={"md"}
      className="overflow-x-hidden"
      id="features"
    >
     
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative mx-auto flex max-w-sm items-center justify-between">
            <div className="space-y-6">
              <FeatureCard position="left-top">
                <ReactJSIcon />
              </FeatureCard>
              <FeatureCard position="left-middle">
                <NextJSIcon />
              </FeatureCard>
              <FeatureCard position="left-bottom">
                <TailwindIcon />
              </FeatureCard>
            </div>
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <div className="bg-muted relative z-20 rounded-2xl border p-1">
                <FeatureCard
                  className="shadow-black-950/10 dark:bg-background size-16 border-black/25 shadow-xl dark:border-white/25 dark:shadow-white/10"
                  isCenter={true}
                >
                  <EtherealLogo />
                </FeatureCard>
              </div>
            </div>
            <div
              role="presentation"
              className="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] opacity-50 [--dots-color:black] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:[--dots-color:white]"
            ></div>

            <div className="space-y-6">
              <FeatureCard position="right-top">
                <ConvexIcon />
              </FeatureCard>
              <FeatureCard position="right-middle">
                <ClerkIcon />
              </FeatureCard>
              <FeatureCard position="right-bottom">
                <BlockNoteIcon />
              </FeatureCard>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Built on a modern, flexible stack
            </h2>
            <p className="text-muted-foreground">
              Ethereal Notes is powered by technologies you know and trust —
              designed to scale with your ideas and enhance every part of your
              workflow.
            </p>
          </div>
        </div>
  
    </Container>
  );
};

export default Features;
