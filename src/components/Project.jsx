import Image from "next/image"
import webProfile from "@/../public/project_webProfile.png"
import Shoestock from "@/../public/project_shoestock.png"
import ladampa from "@/../public/project_ladampa.png"

const DetailProject = ({ image, title, desc, demoLink, scLink }) => {
  return (
    <div className="card_shadow rounded-xl p-5 border-black border">
      <div className="overflow-hidden w-full border rounded-xl">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          className="cursor-pointer hover:scale-105 transition-all"
        />
      </div>
      <div className="mt-3">
        <p className="text-xl font-semibold">{title}</p>
        <p>{desc}</p>
        <p>{demoLink}</p>
        <p>{scLink}</p>
      </div>
    </div>
  )
}

const Project = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center font-semibold text-3xl">Projects</h2>
      <div className="mt-10 grid gap-10 h-max md:grid-cols-2 lg:gap-20">
        <DetailProject
          image={webProfile}
          title={"Web profile"}
          desc={"Web profile menggunakan tech next js & tailwind css "}
          demoLink={""}
          scLink={""}
        />
        <DetailProject
          image={Shoestock}
          title={"Web Inventori"}
          desc={
            "Web Inventori untuk mengatur dan mencatat keluar masuk barang, menggunakan tech next js, tailwind css, express js, postgresql"
          }
          demoLink={""}
          scLink={""}
        />
        <DetailProject
          image={ladampa}
          title={"Ladampa"}
          desc={
            "Website untuk melaporkan sampah yang tidak terkelola oleh pemerintah khususnya di daerah Banyumas menggunakan tech next js, tailwind css"
          }
          demoLink={""}
          scLink={""}
        />
      </div>
    </div>
  )
}

export default Project
