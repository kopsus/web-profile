import Image from "next/image"

// assets
import imagePerson from "@/../public/about-person.svg"

const Biography = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row lg:gap-20">
        <div className="lg:order-2 lg:flex-[0.7] flex justify-center items-center">
          <div className="overflow-hidden w-[80%] mx-auto border-2 border-black md:w-1/2 lg:w-[80%] rounded-xl card_shadow">
            <Image
              src={imagePerson}
              alt="iamge"
              className="block w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 my-10 lg:order-1 lg:flex-[1.2]">
          <h3 className="text-2xl font-semibold">Biography</h3>
          <p>
            Hai, saya Tegar Setio, seorang pengembang web dengan hasrat untuk
            menciptakan pengalaman digital yang indah, fungsional, dan berpusat
            pada pengguna. Dengan pengalaman 2 tahun di bidangnya. Saya selalu
            mencari cara baru dan inovatif untuk mewujudkan visi klien saya.
          </p>
          <p>
            Saat saya mengerjakan situs web atau produk digital lainnya, saya
            berkomitmen terhadap keunggulan website dan pemikiran yang berpusat
            pada pengguna pada setiap proyek yang saya kerjakan. Saya menantikan
            kesempatan untuk membawa keterampilan dan semangat saya ke proyek
            Anda berikutnya.
          </p>
        </div>
      </div>
    </>
  )
}

export default Biography
