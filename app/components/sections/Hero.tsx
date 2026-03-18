import Image from "next/image";
import React from "react";

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
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1440px] px-4 pt-10 md:pt-36 lg:pt-0">

                    <div className="relative w-full aspect-[1440/850]">

                        {/* TEXT BESAR */}
                        <Image
                            src="/image/hero/JAJAN.png"
                            alt="jajan"
                            width={475}
                            height={380}
                            className="absolute top-[30%] md:top-[12%] lg:top-[11.8%] left-1/2 -translate-x-1/2 scale-[0.9] md:scale-100"
                        />

                        <Image
                            src="/image/hero/BARENG.png"
                            alt="bareng"
                            width={590}
                            height={495}
                            className="absolute top-[85%] md:top-[47%] lg:top-[31.8%] left-1/2 -translate-x-1/2 scale-100  md:scale-100"
                        />

                        <Image
                            src="/image/hero/UUN text.png"
                            alt="uun"
                            width={285}
                            height={160}
                            className="absolute top-[103%] md:top-[80%] lg:top-[48.2%] right-[6%] md:right-[33.5%] lg:right-[40.6%] z-30 scale-[0.7] md:scale-100"
                        />

                        {/* BADGE */}
                        <Image
                            src="/image/hero/VOLUME 2.png"
                            alt="volume"
                            width={133}
                            height={105}
                            className="absolute top-[23%] md:top-[7%] lg:top-[9.4%] left-[65%] md:left-[65%] lg:left-[58.6%] scale-[0.8] md:scale-100"
                        />

                        {/* WAVE */}
                        <Image
                            src="/image/hero/WAVE LINE KANAN ATAS.png"
                            alt="wave"
                            width={115}
                            height={95}
                            className="absolute top-[63%] md:top-[36%] lg:top-[24.7%] right-[78%] md:left-[13%] lg:left-[30%] scale-[0.7] md:scale-100"
                        />

                        {/* ZIGZAG */}
                        <Image
                            src="/image/hero/ZIG-ZAG LINE KANAN BAWAH.png"
                            alt="zigzag"
                            width={150}
                            height={142}
                            className="absolute top-[112%] md:top-[73%] lg:top-[44.7%] left-[79%] md:left-[77%] lg:left-[64.5%] scale-[0.7] md:scale-100"
                        />

                        {/* GEROBak */}
                        <Image
                            src="/image/hero/GEROBAK BAKSO.png"
                            alt="gerobak"
                            width={275}
                            height={210}
                            className="
                               absolute 
                               top-[115%] md:top-[84%] lg:top-[53%] xl:top-[51.8%]
                               right-[55%] md:right-[65%] lg:left-[21%] xl:left-[22.9%]
                               scale-[0.7] md:scale-100
                            "
                        />

                        {/* WARUNG */}
                        <Image
                            src="/image/hero/WARUNG KANAN.png"
                            alt="warung"
                            width={410}
                            height={342}
                            className="
                               absolute 
                               top-[114%] md:top-[79%] lg:top-[48%]
                               left-[55%] md:left-[60%] lg:left-[55.5%]
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
                               top-[96%] md:top-[71%] lg:top-[44.1%]
                               left-[33%] md:left-[41%] lg:left-[45.3%]
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
                               top-[96%] md:top-[71%] lg:top-[44.1%]
                               right-[25%] md:right-[36%] lg:right-[41.7%]
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
                               top-[161%] md:top-[108%] lg:top-[64.7%]
                               right-[19%] md:left-[24%] lg:left-[35.1%]
                               z-40 scale-[0.75] md:scale-100
                            "
                        />

                        {/* TEXT BAWAH */}
                        <p className="
                           absolute 
                           top-[220%] md:top-[200%] lg:top-[84.1%]
                           left-1/2 -translate-x-1/2
                           text-[#F4ECA3]
                           text-[35px] md:text-[55px] lg:text-[40px]
                           font-barlow font-bold text-center scale-[0.9] md:scale-100 whitespace-nowrap
                        ">
                            JAJAN - MAIN - MAKAN
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;