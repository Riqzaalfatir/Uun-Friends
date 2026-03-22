"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiHeadphones } from "react-icons/fi";

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.2,
        },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};

const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};

const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};

const Rsvp = () => {
    const [count, setCount] = useState(2);
    const [isTidak, setIsTidak] = useState(false);

    const phoneNumber = "6283102851438";

    const handleSendWA = () => {
        const message = `Halo, saya ingin mengonfirmasi kehadiran.
Jumlah tamu: ${count} orang.

Terima kasih `;

        const encodedMessage = encodeURIComponent(message);

        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");
    };

    const handleNotAttend = () => {
        const message = `Halo, saya ingin mengonfirmasi bahwa saya tidak dapat hadir di acara tersebut.

Mohon maaf dan terima kasih atas undangannya.`;

        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/6283102851438?text=${encodedMessage}`;

        window.open(url, "_blank");
    };


    const handleMinus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handlePlus = () => {
        setCount(count + 1);
    };

    return (
        <section id="rsvp" className="bg-[#F4ECA3] w-full py-10">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-7 md:gap-10 items-center">

                    {/* TITLE */}
                    <motion.div variants={fadeLeft}>
                        <h2 className="text-[#EB621F] font-barlow font-bold text-[40px] md:text-[60px] lg:text-[80px] leading-[100%] uppercase">
                            DATANG <span className="md:block"> NGGAK NIH?</span>
                        </h2>
                    </motion.div>

                    {/* CONTENT */}
                    <motion.div variants={fadeRight} className="flex flex-col gap-6">

                        <motion.div variants={fadeUp}>
                            <h3 className="font-barlow font-bold text-[25px] leading-[120%] mb-1 text-black">
                                John Doe
                            </h3>
                            <p className="text-[15px] max-w-[350px] font-source text-black ">
                                Daftar dulu ya, biar jajanannya siap nungguin kamu.
                                Jangan lewat dari <span className="font-bold">Rabu, 14 Januari 2026.</span>
                            </p>
                        </motion.div>

                        {/* BUTTONS */}
                        <motion.div variants={fadeUp} className="flex gap-2">
                            <motion.button
                                onClick={() => setIsTidak(false)} // ✅ balik ke datang
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                className={`w-full py-4 rounded-xl font-semibold font-barlow border transition ${!isTidak
                                    ? "bg-[#EB621F] text-white border-[#EB621F]"
                                    : "bg-transparent text-[#EB621F] border-[#EB621F]"
                                    }`}
                            >
                                DATANG DONG!
                            </motion.button>

                            <motion.button
                                onClick={() => setIsTidak(true)} // ✅ ke tidak datang

                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                className={`w-full py-4 rounded-xl font-semibold font-barlow border transition ${isTidak
                                    ? "bg-[#EB621F] text-white border-[#EB621F]"
                                    : "bg-transparent text-[#EB621F] border-[#EB621F]"
                                    }`}
                            >
                                GA BISA DATANG :(
                            </motion.button>

                        </motion.div>

                        {/* COUNTER */}
                        {!isTidak && (
                            <>
                                <motion.div variants={fadeUp} className="flex flex-col  items-center lg:items-center gap-1 md:gap-2 mt-2">
                                    <p className="text-[16px] font-source text-black font-bold uppercase text-center">
                                        Konfirmasi Kedatangan
                                    </p>

                                    <div className="flex flex-col items-start w-full mt-4">
                                        <p className="text-[14px] font-source text-left text-black uppercase">
                                            Jumlah Tamu
                                        </p>
                                        <div className="relative w-full mt-2">
                                            <select
                                                value={count}
                                                onChange={(e) => setCount(Number(e.target.value))}
                                                className="
            w-full h-[50px]
            px-4 pr-10
            rounded-xl
            bg-white
            text-gray-800
            text-[16px]
            font-medium
            outline-none
            appearance-none
            cursor-pointer
        "
                                            >
                                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                                    <option key={num} value={num}>
                                                        {num}
                                                    </option>
                                                ))}
                                            </select>

                                            {/* Arrow */}
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                                                ▾
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>



                                {/* CONTACT */}
                                <motion.div variants={fadeUp} className="flex flex-col items-center justify-between  gap-2">
                                    <p className="text-[15px] font-source text-black uppercase">
                                        Konfirmasi
                                    </p>

                                    <motion.a
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ duration: 0.25 }}
                                        onClick={handleSendWA}
                                        rel="noopener noreferrer"
                                        className="border text-center px-20 border-[#EB621F] bg-[#EB621F] text-white py-2 rounded-xl text-[16px] font-bold font-barlow mx-auto"
                                    >
                                        YA
                                    </motion.a>
                                </motion.div>


                                {/* CONTACT */}
                                <motion.div variants={fadeUp} className="flex flex-col items-center justify-between gap-2 mt-4">
                                    <p className=" text-[13px]  md:text-[15px] font-source text-black uppercase">
                                        Jika ada kendala pada RSVP, silakan hubungi Tim Provite.
                                    </p>

                                    <motion.a
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ duration: 0.25 }}
                                        href="https://wa.me/6283102851438?text=Halo,%20saya%20mengalami%20kendala%20dalam%20pengisian%20RSVP.%20Mohon%20bantuannya."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 border border-[#EB621F] text-[#EB621F] px-12 py-3 rounded-xl text-[16px] font-bold font-barlow"
                                    >
                                        <img src="/image/rsvp/Vector.png" alt="" className="w-4" />
                                        MINTA TOLONG KE TIM PROVITE
                                    </motion.a>
                                </motion.div>
                            </>
                        )}

                        {isTidak && (
                            <>
                                <motion.div variants={fadeUp} className="flex flex-col items-center justify-between gap-2 mt-4">
                                    <p className="text-[15px] font-source text-black uppercase font-bold">
                                        Apa Kamu Yakin ?
                                    </p>

                                    <motion.a
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ duration: 0.25 }}
                                        onClick={handleNotAttend}

                                        rel="noopener noreferrer"
                                        className="flex uppercase items-center gap-3 border bg-[#EB621F] text-white px-12 py-3 rounded-xl text-[16px] font-bold font-barlow"
                                    >
                                        Konfirmasi Tidak Datang
                                    </motion.a>
                                </motion.div>

                                <motion.div variants={fadeUp} className="flex flex-col items-center justify-between gap-2 mt-4">
                                    <p className="text-[13px] font-source text-black uppercase">
                                        Jika ada kendala pada RSVP, silakan hubungi Tim Provite.
                                    </p>

                                    <motion.a
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ duration: 0.25 }}
                                        href="https://wa.me/6283102851438?text=Halo,%20saya%20mengalami%20kendala%20dalam%20pengisian%20RSVP.%20Mohon%20bantuannya."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 border border-[#EB621F] text-[#EB621F] px-12 py-3 rounded-xl text-[16px] font-bold font-barlow"
                                    >
                                        <img src="/image/rsvp/Vector.png" alt="" className="w-4" />
                                        MINTA TOLONG KE TIM PROVITE
                                    </motion.a>
                                </motion.div>
                            </>
                        )}

                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Rsvp;