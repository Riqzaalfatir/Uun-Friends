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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔒 Lock scroll sebelum dibuka
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* WEBSITE LU (TETAP NORMAL) */}
      <Header />

      <main>
        <Hero />
        <WaktuTempat />
        <Video />
        <Rsvp />
        <Wishes />
      </main>

      <Footer />

      {/* POPUP OVERLAY */}
      <AnimatePresence>
  {!isOpen && (
    <OpeningScreen onOpen={() => setIsOpen(true)} />
  )}
</AnimatePresence>
    </>
  );
}