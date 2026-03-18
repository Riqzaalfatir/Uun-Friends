"use client"

import React, { useState } from "react";
import { FiHeadphones } from "react-icons/fi";

const Rsvp = () => {
    const [count, setCount] = useState(2);

    const handleMinus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handlePlus = () => {
        setCount(count + 1);
    };

    return (
        <section className="bg-[#F4ECA3] w-full py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-center">

                    {/* KIRI */}
                    <div>
                        <h2 className="text-[#EB621F] font-barlow font-bold text-[40px] md:text-[60px] lg:text-[80px] leading-[100%] uppercase">
                            DATANG <br />
                            NGGAK NIH?
                        </h2>
                    </div>

                    {/* KANAN */}
                    <div className="flex flex-col gap-5">

                        {/* NAMA */}
                        <div>
                            <h3 className="font-barlow font-bold text-[24px] leading-[120%] mb-1">
                                John Doe
                            </h3>
                            <p className="text-[15px] max-w-[350px] font-source">
                                Daftar dulu ya, biar jajanannya siap nungguin kamu.
                                Jangan lewat dari Rabu, 14 Januari 2026.
                            </p>
                        </div>

                        {/* BUTTON */}
                        <div className="flex gap-2">
                            <button className="bg-[#EB621F] text-white w-full py-3 rounded-xl font-semibold text-[16px] font-barlow">
                                HADIR DONG!
                            </button>
                            <button className="bg-[#EB621F] text-white w-full py-3 rounded-xl font-semibold font-barlow">
                                GA BISA DATANG :(
                            </button>
                        </div>

                        {/* JUMLAH */}
                        <div className="flex items-center gap-4 mt-2">
                            <p className="text-[16px] font-source">Datang berapa orang?</p>

                            <div className="flex items-center justify-between bg-white rounded-xl px-6 h-[50px] w-[220px]">

                                <button
                                    onClick={handleMinus}
                                    className="flex items-center w-[24px] h-[24px]"
                                >
                                    <div className="w-[12px] h-[2.5px] bg-[#EB621F] rounded-full"></div>
                                </button>

                                <span className="text-[14px] font-source font-normal text-slate-700">{count}</span>

                                <button
                                    onClick={handlePlus}
                                    className="text-[#EB621F] text-2xl"
                                >
                                    +
                                </button>

                            </div>
                        </div>

                        {/* NOTE + BUTTON */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
                            <p className="text-[16px] font-source">
                                Jika ada kendala pada RSVP, silakan hubungi Tim Provite.
                            </p>

                            <button className="flex items-center gap-2 border border-[#EB621F] text-[#EB621F] px-6 py-3 rounded-xl text-[16px] font-bold font-barlow">
                                <FiHeadphones className="text-[18px]" />
                                MINTA TOLONG KE TIM PROVITE
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Rsvp;