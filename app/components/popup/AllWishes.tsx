"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { pesanData } from "../data/pesan";
import Pesan from "../card/Pesan"
import { useState } from "react";

type AllWishesProps = {
  onClose: () => void;
};

const AllWishes = ({ onClose }: AllWishesProps) => {
  const [search, setSearch] = useState("")
  const filteredPesan = pesanData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed inset-0 z-50 bg-[#EAD89B] overflow-y-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        <div className="bg-[#EB621F] flex items-center justify-center min-h-screen pt-6 md:pt-40 lg:pt-0">
          <div className="absolute top-[68px] md:top-[110px] lg:top-[68px] left-0 w-full flex flex-col gap-[38px] md:gap-[54px] pointer-events-none">
            <div className="w-full h-[1px] bg-[#CC561B]" />
            <div className="w-full h-[1px] bg-[#CC561B]" />
            <div className="w-full h-[1px] bg-[#CC561B]" />
          </div>

          <div className="absolute bottom-[68px] md:bottom-[97px] lg:bottom-[68px] left-0 w-full flex flex-col gap-[38px] md:gap-[54px] pointer-events-none">
            <div className="w-full h-[1px] bg-[#CC561B]" />
            <div className="w-full h-[1px] bg-[#CC561B]" />
            <div className="w-full h-[1px] bg-[#CC561B]" />
          </div>

          <div className="relative w-full max-w-[380px] md:max-w-[700px] lg:max-w-[700px] aspect-[4/5] ">
            <div className="absolute -top-24 left-4 md:-top-[236px] md:-left-1 lg:top-6 lg:left-6 z-50">
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/70 text-white text-[8px] md:text-[16px] lg:text-[8px] font-medium backdrop-blur-sm hover:bg-white/10 transition active:scale-95 font-source"
              >
                ←   Kembali
              </button>
            </div>
            
            {/* TEXT */}
            <Image
              src="/image/hero/JAJAN.png"
              alt="jajan"
              width={435}
              height={380}
              className="absolute -top-[9%] md:-top-[18%] lg:top-[8%] left-1/2 -translate-x-1/2 scale-[0.9] md:scale-100"
            />

            <Image
              src="/image/hero/BARENG.png"
              alt="bareng"
              width={600}
              height={495}
              className="absolute top-[18%] md:top-[1%] lg:top-[24.8%] left-1/2 -translate-x-1/2 scale-100 md:scale-100"
            />

            <Image
              src="/image/hero/UUN text.png"
              alt="uun"
              width={285}
              height={160}
              className="absolute top-[30%] md:top-[17%] lg:top-[41.2%] right-[12%] md:right-[29.5%] lg:right-[29.6%] z-30 scale-[0.7] md:scale-100"
            />

            <Image
              src="/image/hero/BGKUNING.png"
              alt="uun"
              width={165}
              height={160}
              className="absolute top-[34%] md:top-[16%] lg:top-[40.2%] right-[27%] md:right-[37.5%] lg:right-[35.6%] z-0 scale-[0.7] md:scale-100"
            />

            {/* ILUSTRASI */}
            <Image
              src="/image/hero/VOLUME 2.png"
              alt="volume"
              width={133}
              height={105}
              className="absolute -top-[13%] md:-top-[20%] lg:top-[5%] left-[70%] md:left-[66%] lg:left-[65%] scale-[0.8] md:scale-100"
            />

            {/* WAVE */}
            <Image
              src="/image/hero/WAVE LINE KANAN ATAS.png"
              alt="wave"
              width={115}
              height={95}
              className="absolute top-[8%] md:-top-[7%] lg:top-[19.4%] right-[78%] md:right-[72%] lg:right-[72%] scale-[0.7] md:scale-100"
            />

            {/* ZIGZAG */}
            <Image
              src="/image/hero/ZIG-ZAG LINE KANAN BAWAH.png"
              alt="zigzag"
              width={150}
              height={142}
              className="absolute top-[31%] md:top-[14%] lg:top-[37.7%] left-[79%] md:left-[80%] lg:left-[80%] scale-[0.7] md:scale-100"
            />

            <Image
              src="/image/hero/GEROBAK BAKSO.png"
              alt="gerobak"
              width={285}
              height={210}
              className="absolute top-[33%] md:top-[20%] lg:top-[53%] xl:top-[43.8%] right-[55%] md:right-[66%] lg:right-[21%] xl:right-[65%]  scale-[0.7] md:scale-100"
            />

            <Image
              src="/image/hero/WARUNG KANAN.png"
              alt="warung"
              width={410}
              height={342}
              className="absolute top-[31%] md:top-[17%] lg:top-[41%] left-[54%] md:left-[64%] lg:left-[62.5%] scale-[0.8] md:scale-100"
            />

            {/* ORANG */}
            <Image
              src="/image/mentahan/Mentahan-Cewe.png"
              alt="cewek"
              width={65}
              height={114}
              className="absolute top-[30%] md:top-[15%] lg:top-[40%] left-[34%] md:left-[40%] lg:left-[41%] z-10 scale-[0.5] md:scale-100"
            />

            <Image
              src="/image/mentahan/Mentahan-Cowo.png"
              alt="cowok"
              width={65}
              height={114}
              className="absolute top-[29%] md:top-[14%] lg:top-[39%] right-[33%] md:right-[38%] lg:right-[37.7%] z-10 scale-[0.6] md:scale-100"
            />

            <Image
              src="/image/mentahan/MentahanBakso.png"
              alt="bakso"
              width={280}
              height={355}
              className="absolute top-[53%] md:top-[34%] lg:top-[57%] right-[27%] md:left-[18%] lg:left-[19.1%] z-40 scale-[0.75] md:scale-100"
            />

            {/* MENTAHAN ORANG */}
            <motion.div
              animate={{
                rotate: [0, 3, -3, 0],
                y: [0, -2, 2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformOrigin: "center top" }}
              className="absolute top-[55.5%] md:top-[33%] lg:top-[56%] right-[57.5%] md:left-[35.4%] lg:left-[36.5%] z-40 w-[37px] md:w-[120px] lg:w-[140px] h-auto"
            >
              <Image
                src="/image/mentahan/MentahanKangBakso.svg"
                alt="bakso"
                width={50}
                height={355}
              />
            </motion.div>

            {/* MENTAHAN ORANG CEWE */}
                                                <motion.div
                                                    animate={{
                                                        rotate: [0, 3, -3, 0],
                                                        y: [0, -2, 2, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    style={{ transformOrigin: "center top" }}
                                                    className="absolute top-[32%] md:top-[11%] lg:top-[36.5%] right-[52%] md:left-[38.9%] lg:left-[39.6%] z-20 w-[40px] md:w-[120px] lg:w-[145px] h-auto"
                                                >
                                                    <Image
                                                        src="/image/mentahan/Muka-Cewe.svg"
                                                        alt="Muka Cewe"
                                                        width={75}
                                                        height={355}
                                                    />
                                                </motion.div>
                                
                                                {/* MENTAHAN ORANG COWO */}
                                                <motion.div
                                                    animate={{
                                                        rotate: [0, 3, -3, 0],
                                                        y: [0, -2, 2, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    style={{ transformOrigin: "center top" }}
                                                    className="absolute top-[30%] md:top-[10.5%] lg:top-[35.9%] right-[37.4%] md:left-[53.5%] lg:left-[53.7%] z-20 w-[33px] md:w-[100px] h-auto"
                                                >
                                                    <Image
                                                        src="/image/mentahan/Muka-Cowo.svg"
                                                        alt="Muka Cowo"
                                                        width={54}
                                                        height={355}
                                                    />
                                                </motion.div>
                                
                                                <img
                                                    src="/image/mentahan/asap.gif"
                                                    alt="animasi"
                                                    className="absolute w-[50px] h-auto top-[60%] md:top-[38%] lg:top-[60.8%] right-[64.5%] md:left-[29%] lg:left-[30.3%] z-50 opacity-50"
                                                />
                                

            {/* TEXT BAWAH */}
            <p
              className="absolute top-[100%] md:top-[100%] lg:top-[79.1%] left-1/2 -translate-x-1/2 text-[#F4ECA3] text-[35px] md:text-[55px] lg:text-[40px] font-barlow font-bold text-center scale-[0.9] md:scale-100 whitespace-nowrap"
            >
              JAJAN - MAIN - MAKAN
            </p>
          </div>
        </div>

        <div className="bg-[#F4ECA3] z-10 py-4 md:py-10 lg:py-4 px-4 md:px-8 flex flex-col min-h-screen md:h-screen">



          {/* HEADER (GA IKUT SCROLL) */}
          <h2 className="text-[#EB621F] font-barlow font-bold text-[26px] lg:text-[28px] mb-4">
            DOA DAN HARAPAN TEMAN-TEMAN
          </h2>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Cari pesan"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl px-4 py-3 pr-10 bg-white/70 outline-none placeholder:text-[14px] font-source"
            />
            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-[#EB621F] text-lg" />
          </div>

          {/* SCROLL AREA */}
          <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPesan.length > 0 ? (
                filteredPesan.map((item) => (
                  <Pesan
                    key={item.id}
                    name={item.name}
                    message={item.message}
                  />
                ))
              ) : (
                <p className="text-center text-sm text-gray-500 col-span-2">
                  Pesan tidak ditemukan :)
                </p>
              )}
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex justify-center pt-4 z-20">
            <Image
              src="/image/footer/Provite Logo2.png"
              alt="Logo"
              width={70}
              height={70}
            />
          </div>

        </div>



      </div>
    </motion.div>
  );
};

export default AllWishes;