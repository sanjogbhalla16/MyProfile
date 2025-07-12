"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
      ;
    </>
  );
};

export default StairTransition;
