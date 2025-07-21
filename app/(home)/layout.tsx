import Footer from "@/components/home/_components/footer";
import Navigationbar from "@/components/home/_components/navigationbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navigationbar />
      {children}
      <Footer />
    </main>
  );
};

export default HomeLayout;
