import Image from "next/image";

type Props = {
    name: string;
    message: string;
};

const Pesan = ({ name, message }: Props) => {
    return (
        <div className="w-full rounded-[16px]  border-black border-[1.5px] overflow-hidden bg-[#F4ECA3] flex flex-col justify-between">

            {/* CONTENT */}
            <div className="relative p-[20px] pt-[20px] pl-[20px]">

                {/* QUOTE */}
                <Image
                    src="/image/card/TandaKutip.png"
                    alt="quote"
                    width={40}
                    height={40}
                    className="absolute opacity-70"
                />

                {/* MESSAGE */}
                <p className="text-[16px] text-black font-source mt-[40px] mb-4">
                    {message}
                </p>
            </div>

            {/* NAME */}
            <div className="bg-[#E85D1F] text-white px-[16px] py-[10px] text-[18px] font-bold font-barlow">
                {name}
            </div>
        </div>
    );
};

export default Pesan;