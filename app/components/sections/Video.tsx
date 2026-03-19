"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeZoom: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const floatAnim = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const lineAnim: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Video = () => {
  return (
    <section id="video" className="relative bg-[#EB621F] w-full px-6 py-10 flex items-center justify-center overflow-hidden">
      
      <div className="absolute top-[128px] left-0 w-full flex flex-col gap-[40px] pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            variants={lineAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            transition={{ delay: i * 0.15 }}
            className="w-full h-[1px] bg-[#CC561B]"
          />
        ))}
      </div>

      <div className="absolute bottom-[120px] left-0 w-full flex flex-col gap-[40px] pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            variants={lineAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            transition={{ delay: i * 0.15 + 0.3 }}
            className="w-full h-[1px] bg-[#CC561B]"
          />
        ))}
      </div>

      <div className="relative z-10 flex justify-center items-center">
        
        <div className="relative z-10 flex justify-center items-center">
          <motion.div
            variants={fadeZoom}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div {...floatAnim}>
              <Image
                src="/image/video/Video.png"
                alt="video"
                width={366}
                height={600}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Video;