"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

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
    const [status, setStatus] = useState<"hadir" | "tidak" | null>("hadir");

    const handleMinus = () => {
        if (count > 1) setCount(count - 1);
    };

    const handlePlus = () => {
        setCount(count + 1);
    };

    return (
        <section id="rsvp" className="bg-[#F4ECA3] w-full py-10">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
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
                            <h3 className="font-barlow font-bold text-[25px] mb-1 text-black">
                                John Doe
                            </h3>
                            <p className="text-[15px] max-w-[350px] font-source text-black">
                                Daftar dulu ya, biar jajanannya siap nungguin kamu.
                                Jangan lewat dari <span className="font-bold">Rabu, 14 Januari 2026.</span>
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <motion.div variants={fadeUp} className="flex gap-2">
                            <motion.button
                                onClick={() => setStatus("hadir")}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className={`w-full py-4 rounded-xl font-semibold font-barlow
                                ${status === "hadir" ? "bg-[#EB621F] text-white" : "bg-[#EB621F] text-white"}`}
                            >
                                DATANG DONG!
                            </motion.button>

                            <motion.button
                                onClick={() => setStatus("tidak")}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className={`w-full py-4 rounded-xl font-semibold font-barlow
                                ${status === "tidak" ? "bg-white text-[#EB621F]" : "bg-[#EB621F] text-white"}`}
                            >
                                GA BISA DATANG :(
                            </motion.button>
                        </motion.div>

                        {/* ========================= */}
                        {/* ❌ TIDAK HADIR */}
                        {/* ========================= */}
                        {status === "tidak" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col gap-3 mt-2"
                            >
                                <p className="text-[15px] text-black text-center">
                                    Yahh sayang banget kamu gak bisa datang 😢
                                </p>

                                <p className="text-[14px] text-black text-center">
                                    Semoga kita bisa ketemu di lain waktu ya!
                                </p>

                                <a
                                    href="https://wa.me/6283102851438?text=Maaf saya tidak bisa hadir"
                                    target="_blank"
                                    className="bg-[#EB621F] text-white text-center py-3 rounded-xl font-bold"
                                >
                                    Kirim Konfirmasi
                                </a>
                            </motion.div>
                        )}

                        {/* ========================= */}
                        {/* ✅ HADIR */}
                        {/* ========================= */}
                        {status === "hadir" && (
                            <>
                                {/* COUNTER */}
                                <motion.div variants={fadeUp} className="flex flex-col gap-2 mt-2">
                                    <p className="text-[16px] text-black">
                                        Datang berapa orang?
                                    </p>

                                    <div className="flex items-center justify-between bg-white rounded-xl px-6 h-[50px] w-full">

                                        <button onClick={handleMinus}>
                                            -
                                        </button>

                                        <span>{count}</span>

                                        <button onClick={handlePlus}>
                                            +
                                        </button>

                                    </div>
                                </motion.div>

                                {/* KONFIRMASI */}
                                <motion.div variants={fadeUp} className="flex flex-col gap-2 mt-2">
                                    <p className="text-[15px] text-black">
                                        Konfirmasi Kedatangan
                                    </p>

                                    <a
                                        href="https://wa.me/6283102851438"
                                        target="_blank"
                                        className="bg-[#EB621F] text-white px-12 py-2 rounded-xl text-center font-bold"
                                    >
                                        Ya
                                    </a>
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