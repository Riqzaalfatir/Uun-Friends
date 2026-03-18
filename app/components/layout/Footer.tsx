import Image from "next/image"

const Footer = () => {
  return (
    <footer className='py-6  bg-[#EB621F] w-full flex items-center justify-center'>

        <Image
          src="/image/footer/Provite Logo.png"
          alt="Logo"
          width={70}
          height={70}
          />

    </footer>
  )
}

export default Footer