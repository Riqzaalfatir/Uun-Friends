"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface Props {
    onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: Props) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="
                fixed inset-0 z-[9999]
                bg-black/70 lg:bg-[#EB621F]
                flex items-center justify-center
                overflow-hidden
            "
        >
            {/* GARIS ATAS */}
            <div className="hidden absolute top-[68px] md:top-[110px] lg:top-[68px] left-0 w-full lg:flex flex-col gap-[38px] md:gap-[54px] pointer-events-none">
                <div className="w-full h-[1px] bg-[#CC561B] z-0" />
                <div className="w-full h-[1px] bg-[#CC561B] z-0" />
                <div className="w-full h-[1px] bg-[#CC561B] z-0" />
            </div>

            <div className="hidden absolute bottom-[68px] md:bottom-[97px] lg:bottom-[68px] left-0 w-full lg:flex flex-col gap-[38px] md:gap-[54px] pointer-events-none">
                <div className="w-full h-[1px] bg-[#CC561B] z-0" />
                <div className="w-full h-[1px] bg-[#CC561B] z-0" />
                <div className="w-full h-[1px] bg-[#CC561B] z-0" />
            </div>

            {/* CONTENT DESKTOP */}
            <div className="hidden lg:flex relative w-full max-w-[500px] aspect-[4/5] flex-col items-center justify-center text-center">

                {/* TEXT */}
                <Image
                    src="/image/hero/JAJAN.png"
                    alt="jajan"
                    width={435}
                    height={380}
                    className="absolute top-[30%] md:top-[12%] lg:-top-[5%] left-1/2 -translate-x-1/2 scale-[0.9] md:scale-100"
                />

                <Image
                    src="/image/hero/BARENG.png"
                    alt="bareng"
                    width={600}
                    height={495}
                    className="absolute top-[85%] md:top-[47%] lg:top-[18.8%] left-1/2 -translate-x-1/2 scale-100 md:scale-100"
                />

                <Image
                    src="/image/hero/UUN text.png"
                    alt="uun"
                    width={285}
                    height={160}
                    className="absolute top-[103%] md:top-[80%] lg:top-[37.2%] right-[6%] md:right-[33.5%] lg:right-[22.6%] z-30 scale-[0.7] md:scale-100"
                />

                {/* ILUSTRASI */}
                <Image
                    src="/image/hero/VOLUME 2.png"
                    alt="volume"
                    width={133}
                    height={105}
                    className="absolute top-[23%] md:top-[7%] lg:-top-[7%] left-[65%] md:left-[65%] lg:left-[72%] scale-[0.8] md:scale-100"
                />

                {/* WAVE */}
                <Image
                    src="/image/hero/WAVE LINE KANAN ATAS.png"
                    alt="wave"
                    width={115}
                    height={95}
                    className="absolute top-[63%] md:top-[36%] lg:top-[10.7%] right-[78%] md:right-[13%] lg:right-[82%] scale-[0.7] md:scale-100"
                />

                {/* ZIGZAG */}
                <Image
                    src="/image/hero/ZIG-ZAG LINE KANAN BAWAH.png"
                    alt="zigzag"
                    width={150}
                    height={142}
                    className="absolute top-[112%] md:top-[73%] lg:top-[33.7%] left-[79%] md:left-[77%] lg:left-[84.5%] scale-[0.7] md:scale-100"
                />

                <Image
                    src="/image/hero/GEROBAK BAKSO.png"
                    alt="gerobak"
                    width={285}
                    height={210}
                    className="
                        absolute
                        top-[115%] md:top-[84%] lg:top-[53%] xl:top-[41.8%]
                        right-[55%] md:right-[65%] lg:right-[21%] xl:right-[65%]
                        scale-[0.7] md:scale-100
                    "
                />

                <Image
                    src="/image/hero/WARUNG KANAN.png"
                    alt="warung"
                    width={410}
                    height={342}
                    className="
                        absolute
                        top-[114%] md:top-[79%] lg:top-[37%]
                        left-[55%] md:left-[60%] lg:left-[64.5%]
                        scale-[0.8] md:scale-100
                    "
                />

                {/* ORANG */}
                <Image
                    src="/image/hero/BGKUNING.png"
                    alt="uun"
                    width={165}
                    height={160}
                    className="absolute top-[34%] md:top-[23%] lg:top-[39.2%] right-[25%] md:right-[33.5%] lg:right-[30.6%] z-0 scale-[0.7] md:scale-100"
                />

                <Image
                    src="/image/mentahan/Mentahan-Cewe.png"
                    alt="cewek"
                    width={75}
                    height={114}
                    className="
                        absolute
                        top-[96%] md:top-[72%] lg:top-[36.1%]
                        left-[33%] md:left-[41%] lg:left-[38.3%]
                        z-10 scale-[0.6] md:scale-100
                    "
                />

                <Image
                    src="/image/mentahan/Mentahan-Cowo.png"
                    alt="cowok"
                    width={75}
                    height={114}
                    className="
                        absolute
                        top-[96%] md:top-[71%] lg:top-[35.1%]
                        right-[25%] md:right-[36%] lg:right-[30.7%]
                        z-10 scale-[0.6] md:scale-100
                    "
                />

                <Image
                    src="/image/mentahan/MentahanBakso.png"
                    alt="bakso"
                    width={280}
                    height={355}
                    className="
                        absolute
                        top-[161%] md:top-[108%] lg:top-[60%]
                        right-[19%] md:left-[24%] lg:left-[12.1%]
                        z-40 scale-[0.75] md:scale-100
                    "
                />

                {/* MENTAHAN KANG BAKSO */}
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
                    className="absolute top-[55%] md:top-[41%] lg:top-[58%] right-[57.5%] md:left-[13%] lg:left-[36.5%] z-40 w-[40px] md:w-[120px] lg:w-[140px] h-auto"
                >
                    <Image
                        src="/image/mentahan/MentahanKangBakso.png"
                        alt="bakso"
                        width={55}
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
                    className="absolute top-[55%] md:top-[41%] lg:top-[32%] right-[57.5%] md:left-[13%] lg:left-[37.1%] z-20 w-[40px] md:w-[120px] lg:w-[140px] h-auto"
                >
                    <Image
                        src="/image/mentahan/Muka-Cewe.png"
                        alt="bakso"
                        width={77}
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
                    className="absolute top-[55%] md:top-[41%] lg:top-[29.5%] right-[57.5%] md:left-[13%] lg:left-[55.3%] z-20 w-[40px] md:w-[120px] h-auto"
                >
                    <Image
                        src="/image/mentahan/Muka-Cowo.png"
                        alt="bakso"
                        width={65}
                        height={355}
                    />
                </motion.div>

                <img 
                   src="/image/mentahan/Asap.gif" 
                   alt="animasi"
                   className="absolute w-[50px] h-auto top-[55%] md:top-[41%] lg:top-[65.5%] right-[57.5%] md:left-[13%] lg:left-[28.3%] z-50 opacity-50"
                />

                {/* TEXT BAWAH */}
                <p
                    className="
                        absolute
                        top-[280%] md:top-[200%] lg:top-[84.1%]
                        left-1/2 -translate-x-1/2
                        text-[#F4ECA3]
                        text-[35px] md:text-[55px] lg:text-[40px]
                        font-barlow font-bold text-center
                        scale-[0.9] md:scale-100 whitespace-nowrap
                    "
                >
                    JAJAN - MAIN - MAKAN
                </p>

                <motion.button
                    onClick={onOpen}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    className="
                        absolute
                        -bottom-[3%]
                        px-6 py-2 w-[1100px]
                        bg-[#F4ECA3]
                        text-[#EB621F]
                        rounded-xl
                        font-bold
                        font-barlow
                        text-[16px]
                        uppercase
                        origin-center
                    "
                >
                    Buka Undangan
                </motion.button>
            </div>

            {/* MOBILE */}
            <div className="flex lg:hidden items-center justify-center w-full h-full px-4">
                <div className="relative w-full max-w-[380px] md:max-w-[620px] h-[80vh] md:h-[85vh] max-h-[550px] md:max-h-[800px] bg-[#EB621F] rounded-xl shadow-2xl overflow-hidden flex items-center justify-center">

                    {/* GARIS */}
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

                    {/* IMAGE */}
                    <Image src="/image/hero/JAJAN.png" alt="jajan" width={240} height={200} className="absolute top-[8%] md:top-[8%] left-1/2 -translate-x-1/2" />
                    <Image src="/image/hero/BARENG.png" alt="bareng" width={300} height={200} className="absolute top-[24%] md:top-[19%] left-1/2 -translate-x-1/2" />
                    <Image src="/image/hero/UUN text.png" alt="uun" width={160} height={160} className="absolute top-[37%] md:top-[29%] left-[47%] md:left-[48%] z-30 -translate-x-1/2" />

                    <Image src="/image/hero/VOLUME 2.png" alt="volume" width={70} height={95} className="absolute top-[5%] md:top-[7%] left-[76%] md:left-[66%] z-10 -translate-x-1/2" />
                    <Image src="/image/hero/WAVE LINE KANAN ATAS.png" alt="wave" width={70} height={95} className="absolute top-[18%] md:top-[14%] left-[16%] md:left-[30%] z-10 -translate-x-1/2" />
                    <Image src="/image/hero/ZIG-ZAG LINE KANAN BAWAH.png" alt="zigzag" width={70} height={95} className="absolute top-[35%] md:top-[26%] left-[90%] md:left-[72.5%] -translate-x-1/2" />

                    {/* ORANG */}
                    <Image src="/image/mentahan/Mentahan-Cewe.png" alt="cewek" width={55} height={114} className="absolute top-[35%] md:top-[26%] left-[47%] md:left-[46%] -translate-x-1/2 z-10" />
                    <Image src="/image/mentahan/Mentahan-Cowo.png" alt="cowok" width={55} height={114} className="absolute top-[34%] md:top-[26%] left-[61%] md:left-[55%] -translate-x-1/2 z-10" />
                    <Image src="/image/hero/BGKUNING.png" alt="uun" width={90} height={160} className="absolute top-[33%] md:top-[28%] left-[52%] md:left-[52%] -translate-x-1/2 z-0" />

                    <Image src="/image/hero/GEROBAK BAKSO.png" alt="gerobak" width={160} height={210} className="absolute top-[40%] md:top-[30%] left-[6%] md:left-[24%] -translate-x-1/2" />
                    <Image src="/image/hero/WARUNG KANAN.png" alt="warung" width={220} height={342} className="absolute top-[37%] md:top-[28%] left-[91%] md:left-[74%] -translate-x-1/2" />
                    <Image src="/image/mentahan/MentahanBakso.png" alt="bakso" width={170} height={355} className="absolute top-[50%] md:top-[38%] left-[36%] md:left-[40%] z-40 -translate-x-1/2" />

                    {/* MENTAHAN KANG BAKSO */}
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
                        className="absolute top-[49%] md:top-[37%] lg:top-[58%] right-[58%] md:left-[38%] lg:left-[36.5%] z-40 w-[33px] md:w-[35px] lg:w-[120px] h-auto"
                    >
                        <Image
                            src="/image/mentahan/MentahanKangBakso.png"
                            alt="bakso"
                            width={55}
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
                        className="absolute top-[32%] md:top-[22%] lg:top-[32%] right-[47%] md:left-[40.7%] lg:left-[37.1%] z-20 w-[50px] md:w-[60px] lg:w-[120px] h-auto"
                    >
                        <Image
                            src="/image/mentahan/Muka-Cewe.png"
                            alt="bakso"
                            width={77}
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
                        className="absolute top-[29%] md:top-[22%] lg:top-[29.5%] right-[33%] md:left-[51%] lg:left-[55.3%] z-20 w-[45px] md:w-[50px] lg:w-[120px] h-auto"
                    >
                        <Image
                            src="/image/mentahan/Muka-Cowo.png"
                            alt="bakso"
                            width={65}
                            height={355}
                        />
                    </motion.div>

                    <img 
                      src="/image/mentahan/Asap.gif" 
                      alt="animasi"
                      className="absolute w-[30px] md:w-[40px] lg:w-[50px] h-auto top-[54%] md:top-[39.5%] lg:top-[65.5%] right-[66%] md:left-[33.5%] lg:left-[28.3%] z-50 opacity-50"
                    />

                    {/* TEXT */}
                    <p className="absolute top-[66%] md:top-[52%] z-10 font-barlow font-bold text-center text-[#F4ECA3] text-[24px] md:text-[44px]">
                        JAJAN - MAIN - MAKAN
                    </p>

                    <p className="absolute top-[73%] md:top-[69%] z-10 font-source text-center text-[#F4ECA3] text-[16px] md:text-[26px]">
                        Untuk
                    </p>

                    <p className="absolute top-[77%] md:top-[75%] z-10 font-barlow font-bold text-center text-[#F4ECA3] text-[20px] md:text-[30px]">
                        John Doe
                    </p>

                    <motion.button
                        onClick={onOpen}
                        className="absolute bottom-[8%] w-[80%] py-2 bg-[#F4ECA3] text-[#EB621F] text-[16px] md:text-[24px] rounded-xl font-bold font-barlow"
                    >
                        Buka Undangan
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}