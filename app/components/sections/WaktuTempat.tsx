"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const WaktuTempat = () => {
  return (
    <section id="waktu" className="bg-[#F4ECA3] w-full py-12 md:py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-5 md:gap-8 lg:gap-10">
          
          <motion.div variants={fadeLeft}>
            <h2 className="text-[#EB621F] font-barlow font-bold text-[40px] leading-[100%] sm:text-[52px] md:text-[60px] lg:text-[80px] uppercase">
              JANJIAN
              <span className="md:block">TANGGAL &</span>
              <span className="md:block">TEMPATNYA</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeRight}>
            <div>

              <motion.div
                variants={container}
                className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-5 md:mb-6"
              >
                <motion.p
                  variants={fadeUp}
                  className="font-barlow font-bold text-[24px] sm:text-[18px] md:text-[18px] lg:text-[24px] leading-[130%] uppercase"
                >
                  SENIN, 6 APRIL TAHUN INI
                  <span className="block">
                    <span className="md:whitespace-normal">
                      JAM 5 SORE MULAI,
                      <span className="md:block">SAMPAI KENYANG</span>
                    </span>
                  </span>
                </motion.p>

                <motion.div variants={fadeUp}>
                  <p className="font-barlow font-bold text-[24px] sm:text-[18px] md:text-[18px] lg:text-[24px] leading-[130%] uppercase">
                    PARK VIEW BCC
                  </p>
                  <p className="font-source text-[16px] md:text-[15px] leading-[140%] pt-1">
                    Jl. Soekarno Hatta No.354, Bandung
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[200px] sm:h-[240px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden mb-5"
              >
                <iframe
                  src="https://www.google.com/maps?q=Jl.+Soekarno+Hatta+No.354,+Bandung&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </motion.div>

              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                href="https://www.google.com/maps?q=Jl.+Soekarno+Hatta+No.354,+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-[#EB621F] text-[#F4ECA3] py-4 rounded-2xl font-bold text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-barlow transition-all duration-300 ease-in-out hover:bg-[#d9551a] shadow-md hover:shadow-xl"
              >
                KLIK DISINI BIAR ENGGAK NYASAR
              </motion.a>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WaktuTempat;