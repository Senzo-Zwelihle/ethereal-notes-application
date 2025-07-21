"use client";

import EtherealLogo from "@/components/core/_components/logo";
import Spinner from "@/components/core/_components/spinner";
import ThemeSwitcher from "@/components/core/_components/theme-switcher";
import { Button } from "@/components/ui/button";
import { navigationMenuItems } from "@/data/constants/navigation";
import { cn } from "@/lib/utils";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navigationbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-50 w-full px-2"
      >
        <motion.div
          className={cn(
            "mx-auto mt-2 px-6 lg:px-12",
            isScrolled &&
              "bg-background/50 rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
          animate={{
            maxWidth: isScrolled ? "56rem" : "72rem", // max-w-4xl : max-w-6xl
            paddingLeft: isScrolled ? "1.25rem" : "3rem", // lg:px-5 : lg:px-12
            paddingRight: isScrolled ? "1.25rem" : "3rem",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <EtherealLogo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <MenuIcon className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <XIcon className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navigationMenuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {navigationMenuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <ThemeSwitcher />

                {isLoading && <Spinner />}

                {!isAuthenticated && !isLoading && (
                  <>
                    <Button
                      variant="outline"
                      size="default"
                      className={cn(isScrolled && "lg:hidden")}
                      asChild
                    >
                      <SignInButton mode="modal">Sign In</SignInButton>
                    </Button>

                    <Button
                      size="default"
                      className={cn(isScrolled && "lg:hidden")}
                      asChild
                    >
                      <SignUpButton mode="modal">Sign Up</SignUpButton>
                    </Button>
                  </>
                )}
                {isAuthenticated && !isLoading && (
                  <>
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-16 h-16",
                          userButtonBox: "p-1",
                        },
                      }}
                    />

                    <Button asChild>
                      <Link href={"/documents"}>Start Building</Link>
                    </Button>
                  </>
                )}

                <Button
                  asChild
                  size="default"
                  className={cn(isScrolled ? "lg:inline-flex" : "hidden ")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navigationbar;
