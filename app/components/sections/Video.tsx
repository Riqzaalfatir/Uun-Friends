import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <section className="relative bg-[#EB621F] w-full px-6 py-10 flex items-center justify-center overflow-hidden">
      
      {/* GARIS BACKGROUND */}
      <div className="absolute top-[128px] left-0 w-full flex flex-col gap-[40px] pointer-events-none">
                <div className="w-full h-[1px] bg-[#CC561B]" />
                <div className="w-full h-[1px] bg-[#CC561B]" />
                <div className="w-full h-[1px] bg-[#CC561B]" />
            </div>

            <div className="absolute bottom-[120px] left-0 w-full flex flex-col gap-[40px] pointer-events-none">
                <div className="w-full h-[1px] bg-[#CC561B]" />
                <div className="w-full h-[1px] bg-[#CC561B]" />
                <div className="w-full h-[1px] bg-[#CC561B]" />
            </div>


      {/* CONTENT */}
      <div className="relative z-10 flex justify-center items-center">
        
        {/* IMAGE */}
      <div className="relative z-10 flex justify-center items-center">
        <Image
          src="/image/video/video.png"
          alt="video"
          width={366}
          height={600}
          className="object-contain"
          priority
        />
      </div>

      </div>
    </section>
  );
};

export default Video;