"use client";

import EtherealDashboardLight from "@/public/assets/images/dashboard/dashboard.png";
import EtherealDashboardDark from "@/public/assets/images/dashboard/dashboard-dark.png";
import { Container } from "@/components/core/_components/container";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useConvexAuth } from "convex/react";
import Spinner from "@/components/core/_components/spinner";
import { SignUpButton } from "@clerk/nextjs";
import { WandSparklesIcon } from "lucide-react";

const Hero = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <Container
      size={"2xl"}
      alignment={"none"}
      height={"full"}
      padding={"md"}
      id="/"
      className=""
    >
      <div
        aria-hidden
        className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <section className="overflow-hidden bg-white dark:bg-transparent">
        <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
              Ethereal Notes, Where Productivity Meets Elegance
            </h1>
            <p className="mx-auto my-8 max-w-2xl text-xl">
              Ethereal Notes takes your organization and creativity to new
              heights. Whether you're a student, professional, or creative
              thinker.
            </p>
            {isLoading && <Spinner />}
            {!isAuthenticated && !isLoading && (
              <>
                <Button asChild size="lg">
                  <SignUpButton mode="modal">Sign Up</SignUpButton>
                </Button>
              </>
            )}
            {isAuthenticated && !isLoading && (
              <>
                <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <div key={1}>
                    <Button size="lg">
                      <Link href={"/documents"}>
                        <span className="text-nowrap">Start Building</span>
                      </Link>

                      <WandSparklesIcon />
                    </Button>
                  </div>
                  <Button key={2} asChild size="lg" variant="ghost">
                    <Link
                      href="https://ethereal-notes-application.vercel.app/preview/j57av9wmehnvekn73w9m95p2a97m40x2"
                      target="_blank"
                    >
                      <span className="text-nowrap">Tutorial</span>
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mx-auto -mt-16 max-w-7xl">
          <div className="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
            <div className="[transform:rotateX(20deg);]">
              <div className="lg:h-176 relative skew-x-[.36rad]">
                <div
                  aria-hidden
                  className="bg-linear-to-b from-background to-background z-1 absolute -inset-16 via-transparent sm:-inset-32"
                />
                <div
                  aria-hidden
                  className="bg-linear-to-r from-background to-background z-1 absolute -inset-16 bg-white/50 via-transparent sm:-inset-32 dark:bg-transparent"
                />

                <div
                  aria-hidden
                  className="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]"
                />
                <div
                  aria-hidden
                  className="from-background z-11 absolute inset-0 bg-gradient-to-l"
                />
                <div
                  aria-hidden
                  className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                />
                <div
                  aria-hidden
                  className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                />

                <Image
                  className="rounded-(--radius) z-1 relative border dark:hidden"
                  src={EtherealDashboardLight}
                  alt="Tailark hero section"
                  width={2880}
                  height={2074}
                />
                <Image
                  className="rounded-(--radius) z-1 relative hidden border dark:block"
                  src={EtherealDashboardDark}
                  alt="Tailark hero section"
                  width={2880}
                  height={2074}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
