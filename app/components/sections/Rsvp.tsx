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
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
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
                            <h3 className="font-barlow font-bold text-[25px] leading-[120%] mb-1">
                                John Doe
                            </h3>
                            <p className="text-[15px] max-w-[350px] font-source ">
                                Daftar dulu ya, biar jajanannya siap nungguin kamu.
                                Jangan lewat dari Rabu, 14 Januari 2026.
                            </p>
                        </motion.div>

                        {/* BUTTONS */}
                        <motion.div variants={fadeUp} className="flex gap-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                className="bg-[#EB621F] text-white w-full py-4 rounded-xl font-semibold text-[16px] font-barlow"
                            >
                                DATANG DONG!
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                className="bg-[#EB621F] text-white w-full py-4 rounded-xl font-semibold font-barlow"
                            >
                                GA BISA DATANG :(
                            </motion.button>
                        </motion.div>

                        {/* COUNTER */}
                        <motion.div variants={fadeUp} className="flex flex-col lg:flex-row items-start lg:items-center gap-1 md:gap-4 mt-2">
                            <p className="text-[16px] font-source text-left">
                                Datang berapa orang?
                            </p>

                            <div className="flex items-center justify-between bg-white rounded-xl px-6 h-[50px] w-full lg:w-[220px]">

                                <motion.button
                                    onClick={handleMinus}
                                    whileTap={{ scale: 0.8 }}
                                    className="flex items-center w-[24px] h-[24px]"
                                >
                                    <div className="w-[12px] h-[2.5px] bg-[#EB621F] rounded-full"></div>
                                </motion.button>

                                <motion.span
                                    key={count}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.25 }}
                                    className="text-[14px] font-source font-normal text-slate-700"
                                >
                                    {count}
                                </motion.span>

                                <motion.button
                                    onClick={handlePlus}
                                    whileTap={{ scale: 0.8 }}
                                    className="text-[#EB621F] text-2xl"
                                >
                                    +
                                </motion.button>

                            </div>
                        </motion.div>

                        {/* CONTACT */}
                        <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-2">
                            <p className="text-[15px] font-source">
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

                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Rsvp;