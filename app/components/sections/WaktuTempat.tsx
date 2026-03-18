import React from 'react'

const WaktuTempat = () => {
    return (
        <section className='bg-[#F4ECA3] w-full py-16'>
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10">

                    <div>
                        <h2 className="text-[#EB621F] font-barlow font-bold text-[80px] leading-[100%] uppercase">
                            JANJIAN <br />
                            TANGGAL & <br />
                            TEMPATNYA
                        </h2>
                    </div>

                    <div>
                        <div className="">

                            <div className='flex gap-10 mb-[24px]'>
                                <p className="font-barlow font-bold text-[24px] leading-[120%] uppercase">
                                    SENIN, 6 APRIL TAHUN INI <br />
                                    JAM 5 SORE MULAI, <br /> SAMPAI KENYANG
                                </p>

                                <div>
                                    <p className="font-barlow font-bold text-[24px] leading-[120%] uppercase">
                                        PARK VIEW BCC</p>
                                    <p className='font-source text-[16px] leading-[140%]'>Jl. Soekarno Hatta No.354, Bandung</p>
                                </div>
                            </div>

                            {/* MAP */}
                            <div className="w-full h-[260px] rounded-lg overflow-hidden mb-[16px]">
                                <iframe
                                    src="https://www.google.com/maps?q=Jl.+Soekarno+Hatta+No.354,+Bandung&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            {/* BUTTON */}
                            <button className="w-full bg-[#EB621F] text-[#F4ECA3] py-3 rounded-md font-bold text-[14px] font-barlow">
                                KLIK DISINI BIAR ENGGAK NYASAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WaktuTempat