import React from 'react'

const WaktuTempat = () => {
    return (
        <section className='bg-[#F4ECA3] w-full py-12 md:py-16'>
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-5 md:gap-8 lg:gap-10">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-[#EB621F] font-barlow font-bold 
                        text-[40px] leading-[100%] 
                        sm:text-[52px] 
                        md:text-[60px] 
                        lg:text-[80px] 
                        uppercase">
                            JANJIAN 
                            <span className='md:block'>TANGGAL &</span>
                            <span className='md:block'>TEMPATNYA</span>
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <div>

                            {/* INFO */}
                            <div className='flex flex-col sm:flex-row gap-6 md:gap-8 mb-5 md:mb-6'>

                                <p className="font-barlow font-bold 
                                text-[24px] sm:text-[18px] md:text-[18px] lg:text-[24px] 
                                leading-[130%] uppercase">

                                    SENIN, 6 APRIL TAHUN INI

                                    <span className="block">
                                        <span className="md:whitespace-normal">
                                            JAM 5 SORE MULAI,
                                            <span className='md:block'>SAMPAI KENYANG</span>
                                        </span>
                                    </span>

                                </p>

                                <div>
                                    <p className="font-barlow font-bold 
                                    text-[24px] sm:text-[18px] md:text-[18px] lg:text-[24px] 
                                    leading-[130%] uppercase">
                                        PARK VIEW BCC
                                    </p>
                                    <p className='font-source text-[16px] md:text-[15px] leading-[140%] pt-1'>
                                        Jl. Soekarno Hatta No.354, Bandung
                                    </p>
                                </div>
                            </div>

                            {/* MAP */}
                            <div className="w-full h-[200px] sm:h-[240px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden mb-5">
                                <iframe
                                    src="https://www.google.com/maps?q=Jl.+Soekarno+Hatta+No.354,+Bandung&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                ></iframe>
                            </div>

                            {/* BUTTON */}
                            <a
                                href="https://www.google.com/maps?q=Jl.+Soekarno+Hatta+No.354,+Bandung"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center bg-[#EB621F] text-[#F4ECA3] 
  py-4 
  rounded-2xl font-bold 
  text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] 
  font-barlow

  transition-all duration-300 ease-in-out

  hover:bg-[#d9551a] 
  hover:scale-[1.02] 
  active:scale-[0.98]

  shadow-md hover:shadow-xl"
                            >
                                KLIK DISINI BIAR ENGGAK NYASAR
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WaktuTempat