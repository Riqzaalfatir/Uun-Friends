import React from "react";

const Wishes = () => {
  return (
    <section className="pt-20 pb-10 bg-[#EB621F] w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

          {/* KIRI */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#F4ECA3] font-barlow font-bold text-[40px] md:text-[70px] lg:text-[90px] leading-[100%] uppercase">
              DOA DAN <br />
              HARAPAN UNTUK <br />
              KITA SEMUA
            </h2>

            {/* INPUT */}
            <input
              type="text"
              placeholder="John Doe"
              className="bg-[#F8F8F6] rounded-xl px-4 py-3 placeholder:text-[14px] placeholder:text-black outline-none placeholder:font-source"
            />

            <textarea
              placeholder="Write your message here"
              rows={6}
              className="bg-[#F8F8F6] rounded-xl px-4 py-3 placeholder:text-[14px] placeholder:text-slate-400 placeholder:font-source  outline-none resize-none"
            />

            {/* BUTTON */}
            <button className="bg-[#F4ECA3] text-[#EB621F] text-[16px] py-3 rounded-xl font-bold font-barlow">
              KIRIM PESAN BIAR SEMUA BISA BACA
            </button>
          </div>

          {/* KANAN */}
          <div className="flex flex-col justify-between h-full">

            {/* LIST PESAN */}
            <div className="flex flex-col gap-4  overflow-y-auto pr-2">

              {/* ITEM */}
              <div className="px-4">
                <h4 className="text-[#F4ECA3] text-[20px] font-bold font-barlow">John Doe</h4>
                <p className="text-[#F8F8F6] text-[16px] font-source">
                  Congrats Andre & Stephanie! happily ever after. God bless!
                </p>
              </div>
              
              <hr className="border-0 h-[1.5px] bg-white/20 mb-2" />

              <div className="px-4">
                <h4 className="text-[#F4ECA3] text-[20px] font-bold font-barlow">Christian Ebbyanto</h4>
                <p className="text-[#F8F8F6] text-[16px] font-source">
                  Happy wedding day boskuu! Happily ever after. Tuhan berkati selalu keluarga barunya
                </p>
              </div>
              
              <hr className="border-0 h-[1.5px] bg-white/20 mb-2" />

              <div className="px-4">
                <h4 className="text-[#F4ECA3] text-[20px] font-bold font-barlow">Stevano</h4>
                <p className="text-[#F8F8F6] text-[16px] font-source">
                  Happy wedding day boskuu! Happily ever after. Tuhan berkati selalu keluarga barunya
                </p>
              </div>
              
              <hr className="border-0 h-[1.5px] bg-white/20 mb-2" />

              <div className="px-4">
                <h4 className="text-[#F4ECA3] text-[20px] font-bold font-barlow">John Doe</h4>
                <p className="text-[#F8F8F6] text-[16px] font-source">
                  Congrats Andre & Stephanie! happily ever after. God bless!
                </p>
              </div>
              
              <hr className="border-0 h-[1.5px] bg-white/20 mb-2" />

               <div className="px-4">
                <h4 className="text-[#F4ECA3] text-[20px] font-bold font-barlow">Christian Ebbyanto</h4>
                <p className="text-[#F8F8F6] text-[16px] font-source">
                  Happy wedding day boskuu! Happily ever after. Tuhan berkati selalu keluarga barunya
                </p>
              </div>
              
              <hr className="border-0 h-[1.5px] bg-white/20 mb-2" />

            </div>

            {/* BUTTON BAWAH */}
            <button className="mt-6 border border-[#F4ECA3] text-[#F4ECA3] py-3 rounded-xl font-bold text-[16px] font-barlow">
              LIHAT PESAN YANG LAIN
            </button>
          </div>

        </div>

        {/* FOOTER TEXT */}
        <div className="text-center mt-16 text-[#F4ECA3] text-[16px] font-bold font-barlow space-y-5">
          <p>TERIMA KASIH TEMAN-TEMAN YANG MAU JAJAN BARENG UUN VOL. 2!</p>
          <p>SEMOGA PULANG TIDAK BAWA KENYANG, TAPI JUGA KENANGAN.</p>
        </div>
      </div>
    </section>
  );
};

export default Wishes;