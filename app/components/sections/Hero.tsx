import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


interface Props {
    onOpen: () => void;
}

const Hero = () => {

    return (
        <section id="home" className="relative w-full min-h-screen bg-[#EB621F] overflow-hidden">

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


            <div className="flex items-center justify-center min-h-screen pt-6 md:pt-40 lg:pt-0">
                <div className="relative w-full max-w-[380px] md:max-w-[600px] lg:max-w-[500px] aspect-[4/5]">

                    <Image
                        src="/image/hero/JAJAN.png"
                        alt="jajan"
                        width={435}
                        height={380}
                        className="absolute -top-[9%] md:-top-[18%] lg:top-[7%] left-1/2 -translate-x-1/2 scale-[0.9] md:scale-100"
                    />

                    <Image
                        src="/image/hero/BARENG.png"
                        alt="bareng"
                        width={600}
                        height={495}
                        className="absolute top-[18%] md:top-[3%] lg:top-[29.8%] left-1/2 -translate-x-1/2 scale-100  md:scale-100"
                    />

                    <Image
                        src="/image/hero/UUN text.png"
                        alt="uun"
                        width={285}
                        height={160}
                        className="absolute top-[30%] md:top-[23%] lg:top-[47.2%] right-[12%] md:right-[27.5%] lg:right-[18.6%] z-30 scale-[0.7] md:scale-100"
                    />

                    <Image
                        src="/image/hero/BGKUNING.png"
                        alt="uun"
                        width={165}
                        height={160}
                        className="absolute top-[34%] md:top-[23%] lg:top-[50.2%] right-[26.5%] md:right-[33.5%] lg:right-[30.6%] z-0 scale-[0.7] md:scale-100"
                    />

                    <Image
                        src="/image/hero/VOLUME 2.png"
                        alt="volume"
                        width={133}
                        height={105}
                        className="absolute -top-[13%] md:-top-[20%] lg:top-[3%] left-[70%] md:left-[69%] lg:left-[70%] scale-[0.8] md:scale-100"
                    />

                    <Image
                        src="/image/hero/WAVE LINE KANAN ATAS.png"
                        alt="wave"
                        width={115}
                        height={95}
                        className="absolute top-[8%] md:-top-[5%] lg:top-[22.7%] right-[78%] md:right-[76%] lg:right-[82%] scale-[0.7] md:scale-100"
                    />

                    <Image
                        src="/image/hero/ZIG-ZAG LINE KANAN BAWAH.png"
                        alt="zigzag"
                        width={150}
                        height={142}
                        className="absolute top-[31%] md:top-[18%] lg:top-[44.7%] left-[79%] md:left-[85%] lg:left-[85.5%] scale-[0.7] md:scale-100"
                    />

                    <Image
                        src="/image/hero/GEROBAK BAKSO.png"
                        alt="gerobak"
                        width={285}
                        height={210}
                        className="absolute top-[33%] md:top-[26%] lg:top-[53%] xl:top-[51.8%] right-[55%] md:right-[68%] lg:right-[21%] xl:right-[65%] scale-[0.7] md:scale-100"
                    />

                    <Image
                        src="/image/hero/WARUNG KANAN.png"
                        alt="warung"
                        width={410}
                        height={342}
                        className="absolute top-[31%] md:top-[22%] lg:top-[48%] left-[54%] md:left-[64%] lg:left-[64.5%] scale-[0.8] md:scale-100"
                    />

                    <Image
                        src="/image/mentahan/Mentahan-Cewe.png"
                        alt="cewek"
                        width={60}
                        height={114}
                        className="absolute top-[33%] md:top-[22%] lg:top-[47.1%] left-[35%] md:left-[40%] lg:left-[40.3%] z-10 scale-[0.6] md:scale-100"
                    />

                    <Image
                        src="/image/mentahan/Mentahan-Cowo.png"
                        alt="cowok"
                        width={60}
                        height={114}
                        className="absolute top-[32%] md:top-[21%] lg:top-[46.1%] right-[32%] md:right-[34%] lg:right-[30.7%] z-10 scale-[0.6] md:scale-100"
                    />

                    <Image
                        src="/image/mentahan/MentahanBakso.png"
                        alt="bakso"
                        width={280}
                        height={355}
                        className="absolute top-[53%] md:top-[41%] lg:top-[70%] right-[27%] md:left-[13%] lg:left-[12.1%] z-40 scale-[0.75] md:scale-100"
                    />

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
                        className="absolute top-[55.7%] md:top-[40%] lg:top-[68.5%] right-[57.7%] md:left-[33%] lg:left-[36.2%] z-40 w-[37px] md:w-[120px] lg:w-[140px] h-auto"
                    >
                        <Image
                            src="/image/mentahan/MentahanKangBakso.png"
                            alt="bakso"
                            width={50}
                            height={355}
                        />
                    </motion.div>

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
                                className="absolute top-[33%] md:top-[18%] lg:top-[42%] right-[51.9%] md:left-[38.7%] lg:left-[38.9%] z-20 w-[44px] md:w-[120px] lg:w-[120px] h-auto"
                                >
                        <Image  src="/image/mentahan/Muka-Cewe.png" alt="bakso" width={66}  height={355} />
                    </motion.div>
                    
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
                            className="absolute top-[32.3%] md:top-[17.5%] lg:top-[42%] right-[35.3%] md:left-[56.8%] lg:left-[58.3%] z-20 w-[33px] md:w-[120px] h-auto">
                        <Image src="/image/mentahan/Muka-Cowo.png" alt="bakso"  width={50}  height={355} />
                    </motion.div>
                    
                    <img src="/image/mentahan/asap.gif" alt="animasi"
                         className="absolute w-[50px] h-auto top-[60%] md:top-[45.5%] lg:top-[75.5%] right-[64.5%] md:left-[26.5%] lg:left-[28.3%] z-50 opacity-50"
                    />
                    


                    <p className="absolute top-[100%] md:top-100%] lg:top-[94.1%]  left-1/2 -translate-x-1/2   text-[35px] md:text-[55px] lg:text-[40px] text-[#F4ECA3]   font-barlow font-bold text-center text-[] scale-[0.9] md:scale-100 whitespace-nowrap">
                        JAJAN - MAIN - MAKAN
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Hero;