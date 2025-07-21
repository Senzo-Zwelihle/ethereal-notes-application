"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/core/_components/container";
import { Button } from "@/components/ui/button";

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

const Pricing = () => {
  return (
    <Container
      size={"2xl"}
      height={"full"}
      padding={"md"}
      id="pricing"
      alignment={"center"}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <p className="mx-auto mt-12 max-w-5xl space-y-6 text-center">
          Capture your thoughts, ideas, and to-dos effortlessly with our
          intuitive note-taking app. Seamlessly sync your notes across all your
          devices, ensuring your information is always at your fingertips. Join
          our community to share tips and get support.
        </p>
      </motion.div>
      <motion.div
        className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{
          delay: 5,
          duration: 2,
          ease: "easeOut",
        }}
      >
        <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
          <div className="space-y-4">
            <div>
              <h2 className="font-medium">Free</h2>
              <span className="my-3 block text-2xl font-semibold">
                R 0 / mo
              </span>
              <p className="text-muted-foreground text-sm">Per editor</p>
            </div>

            <Button asChild variant="outline" className="w-full" size={"lg"}>
              <Link href="/documents">Get Started</Link>
            </Button>

            <hr className="border-dashed" />

            <ul className="list-outside space-y-3 text-sm">
              {[
                "Limited Pages & Blocks",
                "Cross-Device Sync",
                "Community Support",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="size-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h2 className="font-medium">Pro</h2>
                <span className="my-3 block text-2xl font-semibold">
                  R 200 / mo
                </span>
                <p className="text-muted-foreground text-sm">Per editor</p>
              </div>

              <Button asChild className="w-full" disabled={true} size={"lg"}>
                <Link href="">Get Started</Link>
              </Button>
            </div>

            <div>
              <div className="text-sm font-medium">
                Everything in free plus :
              </div>

              <ul className="mt-4 list-outside space-y-3 text-sm">
                {[
                  "Unlimited Notes & Folders",
                  "Priority Support",
                  "File Uploads + Media Embeds",
                  "Access to Basic Templates",
                  "Mobile App Access",
                  "1 Custom Report Per Month",
                  "Monthly Product Updates",
                  "Standard Security Features",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Pricing;
