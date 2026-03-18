import Image from "next/image"

const Footer = () => {
  return (
    <footer className='py-10  bg-[#EB621F] w-full flex items-center justify-center'>

        <Image
          src="/image/footer/Provite Logo.png"
          alt="Logo"
          width={90}
          height={90}
          />

    </footer>
  )
}

export default Footer