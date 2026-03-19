"use client";

import { useState, useEffect } from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import WaktuTempat from "./components/sections/WaktuTempat";
import Video from "./components/sections/Video";
import Rsvp from "./components/sections/Rsvp";
import Wishes from "./components/sections/Wishes";
import OpeningScreen from "./components/popup/OpeningScreen";
import { AnimatePresence } from "framer-motion";
import AllWishes from "./components/popup/AllWishes";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllWishes, setShowAllWishes] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <WaktuTempat />
        <Video />
        <Rsvp />
<Wishes onShowAll={() => setShowAllWishes(true)} />      </main>

      <Footer />

      <AnimatePresence>
        {!isOpen && (
          <OpeningScreen onOpen={() => setIsOpen(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAllWishes && (
          <AllWishes onClose={() => setShowAllWishes(false)} />
        )}
      </AnimatePresence>
    </>
  );
}