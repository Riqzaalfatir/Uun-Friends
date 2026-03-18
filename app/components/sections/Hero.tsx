import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


interface Props {
    onOpen: () => void;
}

const Hero = () => {

    return (
        <section className="relative w-full min-h-screen bg-[#EB621F] overflow-hidden">

            {/* ✅ GARIS */}
            <div className="absolute top-[68px] md:top-[110px] lg:top-[68px] left-0 w-full flex flex-col gap-[38px] md:gap-[54px]  pointer-events-none">
                <div className="w-full h-[1px] bg-[#CC561B]" />
                <div className="w-full h-[1px] bg-[#CC561B]" />
                <div className="w-full h-[1px] bg-[#CC561B]" />
            </div>

            <div className="absolute bottom-[68px] md:bottom-[97px] lg:bottom-[68px] left-0 w-full flex flex-col gap-[38px] md:gap-[54px]  pointer-events-none">
                <div className="w-full h-[1px] bg-[#CC561B]" />
                <div className="w-full h-[1px] bg-[#CC561B]" />
                <div className="w-full h-[1px] bg-[#CC561B]" />
            </div>

            {/* ✅ WRAPPER CENTER */}
            <div className="flex items-center justify-center min-h-screen pt-6 md:pt-0">
                <div className="relative w-full max-w-[380px] md:max-w-[500px] aspect-[4/5]">

                    {/* TEXT */}
                    <Image
                        src="/image/hero/JAJAN.png"
                        alt="jajan"
                        width={435}
                        height={380}
                        className="absolute -top-[9%] md:top-[12%] lg:top-[7%] left-1/2 -translate-x-1/2 scale-[0.9] md:scale-100"
                    />

                    <Image
                        src="/image/hero/BARENG.png"
                        alt="bareng"
                        width={600}
                        height={495}
                        className="absolute top-[18%] md:top-[47%] lg:top-[29.8%] left-1/2 -translate-x-1/2 scale-100  md:scale-100"
                    />

                    <Image
                        src="/image/hero/UUN text.png"
                        alt="uun"
                        width={285}
                        height={160}
                        className="absolute top-[30%] md:top-[80%] lg:top-[47.2%] right-[12%] md:right-[33.5%] lg:right-[18.6%] z-30 scale-[0.7] md:scale-100"
                    />
                    {/* ILUSTRASI */}

                    <Image
                        src="/image/hero/VOLUME 2.png"
                        alt="volume"
                        width={133}
                        height={105}
                        className="absolute -top-[13%] md:top-[7%] lg:top-[3%] left-[70%] md:left-[65%] lg:left-[70%] scale-[0.8] md:scale-100"
                    />

                    {/* WAVE */}
                    <Image
                        src="/image/hero/WAVE LINE KANAN ATAS.png"
                        alt="wave"
                        width={115}
                        height={95}
                        className="absolute top-[8%] md:top-[36%] lg:top-[22.7%] right-[78%] md:right-[13%] lg:right-[82%] scale-[0.7] md:scale-100"
                    />

                    {/* ZIGZAG */}
                    <Image
                        src="/image/hero/ZIG-ZAG LINE KANAN BAWAH.png"
                        alt="zigzag"
                        width={150}
                        height={142}
                        className="absolute top-[31%] md:top-[73%] lg:top-[44.7%] left-[79%] md:left-[77%] lg:left-[85.5%] scale-[0.7] md:scale-100"
                    />

                    <Image
                        src="/image/hero/GEROBAK BAKSO.png"
                        alt="gerobak"
                        width={285}
                        height={210}
                        className="
                                                              absolute 
                                                              top-[33%] md:top-[84%] lg:top-[53%] xl:top-[51.8%]
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
                                                             top-[31%] md:top-[79%] lg:top-[48%]
                                                             left-[54%] md:left-[60%] lg:left-[64.5%]
                                                             scale-[0.8] md:scale-100
                                                          "
                    />

                    {/* ORANG */}
                    <Image
                        src="/image/hero/Cewek - Kanan.png"
                        alt="cewek"
                        width={95}
                        height={114}
                        className="
                                                          absolute 
                                                          top-[26%] md:top-[72%] lg:top-[41.1%]
                                                          left-[34%] md:left-[41%] lg:left-[38.3%]
                                                          z-10 scale-[0.6] md:scale-100
                                                       "
                    />

                    <Image
                        src="/image/hero/Char - Cowok - Kanan.png"
                        alt="cowok"
                        width={95}
                        height={114}
                        className="
                                                          absolute 
                                                          top-[26%] md:top-[71%] lg:top-[41.1%]
                                                          right-[27%] md:right-[36%] lg:right-[30.7%]
                                                          z-10 scale-[0.6] md:scale-100
                                                       "
                    />

                    <Image
                        src="/image/hero/Kang Bakso.png"
                        alt="bakso"
                        width={280}
                        height={355}
                        className="
                                                          absolute 
                                                          top-[53%] md:top-[108%] lg:top-[70%]
                                                          right-[27%] md:left-[24%] lg:left-[12.1%]
                                                          z-40 scale-[0.75] md:scale-100
                                                       "
                    />


                    {/* TEXT BAWAH */}
                    <p className="
                                      absolute 
                                      top-[100%] md:top-[200%] lg:top-[94.1%]
                                      left-1/2 -translate-x-1/2
                                      text-[#F4ECA3]
                                      text-[35px] md:text-[55px] lg:text-[40px]
                                      font-barlow font-bold text-center scale-[0.9] md:scale-100 whitespace-nowrap
                                   ">
                        JAJAN - MAIN - MAKAN
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Hero;