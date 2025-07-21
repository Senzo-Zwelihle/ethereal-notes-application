"use client";

import { CoverImageModal } from "@/components/settings/_components/cover-image-modal";
import { SettingsModal } from "@/components/settings/_components/settings-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>

      <SettingsModal />
      <CoverImageModal />
    </>
  );
};
