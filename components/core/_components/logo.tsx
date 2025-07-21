import EtherealNotesLogoDark from "@/public/assets/brand/ethereal-notes-logo-dark.svg";
import EtherealNotesLogoLight from "@/public/assets/brand/ethereal-notes-logo-light.svg";
import Image from "next/image";
import React from "react";

const EtherealLogo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={EtherealNotesLogoLight}
        height={40}
        width={40}
        quality={95}
        alt="Ethereal notes logo black"
        className="dark:hidden rounded-sm"
      />
      <Image
        src={EtherealNotesLogoDark}
        height={40}
        width={40}
        quality={95}
        alt="Ethereal notes logo light"
        className="hidden dark:block rounded-sm"
      />
    </div>
  );
};

export default EtherealLogo;
