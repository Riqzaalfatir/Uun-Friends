"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";

type WishesProps = {
  onShowAll: () => void;
};

const Wishes = ({ onShowAll }: WishesProps) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [showNotif, setShowNotif] = useState(false)
    

    const handleSubmit = () => {
        if (!name || !message) return;

        setShowNotif(true);

        setName("")
        setMessage("")

        setTimeout(() => {
            setShowNotif(false);
        }, 3000)
    }

    return (
        <section id="wishes" className="pt-20 pb-10 bg-[#EB621F] w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    <motion.div  initial={{ opacity: 0, x: -40 }} 
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                       viewport={{ once: true }} 
                       className="flex flex-col gap-6">
                        <h2 className="text-[#F4ECA3] font-barlow font-bold text-[40px] md:text-[70px] lg:text-[90px] leading-[100%] uppercase">
                            DOA DAN <span className="lg:block">HARAPAN UNTUK </span>
                            <span className="md:block">KITA SEMUA</span>
                        </h2>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            className="bg-[#F8F8F6] rounded-xl px-4 py-3 placeholder:text-[14px] placeholder:text-slate-400 outline-none placeholder:font-source font-source text-sm"
                        />

                        <textarea
                            placeholder="Tulis Pesan..."
                            rows={8}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-[#F8F8F6] rounded-xl px-4 py-3 placeholder:text-[14px] placeholder:text-slate-400 placeholder:font-source  outline-none resize-none font-source text-sm"
                        />

                        <button onClick={handleSubmit}
                            className="bg-[#F4ECA3] text-[#EB621F] text-[16px] py-3 rounded-xl font-bold font-barlow">
                            KIRIM PESAN BIAR SEMUA BISA BACA
                        </button>
                    </motion.div>

                    <motion.div
                       initial={{ opacity: 0, x: 40 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                       viewport={{ once: true }} 
                       className="flex flex-col justify-between h-full">

                        <div className="flex flex-col gap-4 max-h-[300px] lg:max-h-none overflow-y-auto">

                            <div className="px-6">
                                <h4 className="text-[#F4ECA3] text-[20px] font-bold font-barlow mb-1">John Doe</h4>
                                <p className="text-[14px] md:text-[16px] font-source text-slate-100">
                                    Congrats Andre & Stephanie! happily ever after. God bless!
                                </p>
                            </div>

                            <div className="w-full h-[1.5px] bg-white/20 shrink-0" />

                            <div className="px-6">
                                <h4 className="text-[#F4ECA3] text-[20px] font-bold font-barlow mb-1">Christian Ebbyanto</h4>
                                <p className="text-slate-100 text-[14px] md:text-[16px] font-source">
                                    Happy wedding day boskuu! Happily ever after. Tuhan berkati selalu keluarga barunya
                                </p>
                            </div>

                            <div className="w-full h-[1.5px] bg-white/20 shrink-0" />

                            <div className="px-6">
                                <h4 className="text-[#F4ECA3] text-[20px] font-bold font-barlow mb-1">Stevano</h4>
                                <p className="text-slate-100 text-[14px] md:text-[16px] font-source">
                                    Happy wedding day boskuu! Happily ever after. Tuhan berkati selalu keluarga barunya
                                </p>
                            </div>

                            <div className="w-full h-[1.5px] bg-white/20 shrink-0" />

                            <div className="px-6">
                                <h4 className="text-[#F4ECA3] text-[20px] font-bold font-barlow mb-1">John Doe</h4>
                                <p className="text-slate-100 text-[14px] md:text-[16px] font-source">
                                    Congrats Andre & Stephanie! happily ever after. God bless!
                                </p>
                            </div>

                            <div className="w-full h-[1.5px] bg-white/20 shrink-0" />

                            <div className="px-6">
                                <h4 className="text-[#F4ECA3] text-[20px] font-bold font-barlow mb-1">Christian Ebbyanto</h4>
                                <p className="text-slate-100 text-[14px] md:text-[16px] font-source">
                                    Happy wedding day boskuu! Happily ever after. Tuhan berkati selalu keluarga barunya
                                </p>
                            </div>

                            <div className="w-full h-[1.5px] bg-white/20 shrink-0" />

                        </div>

                        <button onClick={onShowAll} className="mt-6 border border-[#F4ECA3] text-[#F4ECA3] py-3 rounded-xl font-bold text-[16px] font-barlow">
                            LIHAT PESAN YANG LAIN
                        </button>
                    </motion.div>

                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    viewport={{ once: true }}
                    className="text-center mt-24 text-[#F4ECA3] text-[16px] font-bold font-barlow space-y-5">
                    <p>TERIMA KASIH TEMAN-TEMAN YANG MAU JAJAN BARENG UUN VOL. 2!</p>
                    <p>SEMOGA PULANG TIDAK BAWA KENYANG, TAPI JUGA <span className="block md:inline">KENANGAN</span></p>
                </motion.div>
            </div>

            {showNotif && (
                <div className="fixed inset-0 flex items-center justify-center z-50">

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative bg-[#F4ECA3] text-[#EB621F] px-8 py-6 rounded-2xl shadow-xl text-center font-barlow animate-fadeIn">
                        <h3 className="text-[20px] font-bold mb-2">Terima Kasih :)</h3>
                        <p className="text-sm">
                            Pesan kamu berhasil dikirim!
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Wishes;