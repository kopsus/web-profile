import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

export const skills = [
  {
    id: "1",
    icon: <FaHtml5 size={40} color="#e44d26" />,
    name: "Html",
  },
  {
    id: "2",
    icon: <FaCss3Alt size={40} color="#264de4" />,
    name: "Css",
  },
  {
    id: "3",
    icon: <FaBootstrap size={40} color="#7711f6" />,
    name: "Bootstrap",
  },
  {
    id: "4",
    icon: <SiTailwindcss size={40} color="#38bdf8" />,
    name: "Tailwind",
  },
  {
    id: "5",
    icon: <SiJavascript size={40} color="#f7e018" />,
    name: "JavaScript",
  },
  {
    id: "6",
    icon: <SiTypescript size={40} color="#2d79c7" />,
    name: "TypeScript",
  },
  {
    id: "7",
    icon: <FaReact size={40} color="#58d1f3" />,
    name: "React",
  },
  {
    id: "8",
    icon: <SiNextdotjs size={40} />,
    name: "Next Js",
  },
  {
    id: "9",
    icon: <SiExpress size={40} />,
    name: "Express Js",
  },
];

export const projects = [
  {
    id: "1",
    image: "/project_psikocare.png",
    title: "Psikocare",
    desc: "Psikocare merupakan platform konsultasi psikologi daring yang menyediakan layanan konsultasi langsung kepada dokter psikolog melalui fitur chat, yang di bangun menggunakan teknologi Next js, Tailwind css, Express js, Postgresql",
    link_repo: "https://gitlab.com/kopsuss/psikocare",
    git: <FaGitlab size={40} color="#e24329" />,
    link_demo: "",
  },
  {
    id: "2",
    image: "/project_shoestock.png",
    title: "Inventori",
    desc: "Merancang dan Mengembangkan Aplikasi Inventori Online yang Elegan dengan Menggabungkan Teknologi Next.js, Tailwind CSS, Express.js, dan PostgreSQL untuk Optimalisasi Pencatatan dan Manajemen Keluar-Masuk Barang.",
    link_repo: "https://github.com/pendragonnn/final-project-inventory-web",
    git: <FaGithub size={40} />,
    link_demo: "",
  },
  {
    id: "3",
    image: "/project_webProfile.png",
    title: "Web profile",
    desc: "My personal web profile, di bangun menggunakan teknologi Next Js dan tailwind css",
    link_repo: "https://web-profile-chi.vercel.app/",
    git: <FaGithub size={40} />,
    link_demo: "https://web-profile-chi.vercel.app/",
  },
  {
    id: "4",
    image: "/project_ladampa.png",
    title: "Ladampa",
    desc: "Ladampa merupakan website untuk pelaporan sampah khusus di Banyumas, di bangun menggunakan teknologi Next Js dan tailwind css",
    link_repo: "https://github.com/kopsus/ladampa",
    git: <FaGithub size={40} />,
    link_demo: "",
  },
  {
    id: "5",
    image: "/project_webAdmin.png",
    title: "Template Web Admin",
    desc: "Mmebuat Template Web Admin untuk kebutuhan admin panel, dibangun menggunakan teknologi react dan tailwind css",
    link_repo: "https://github.com/kopsus/admin-fe-KSM-KuduBisa",
    git: <FaGithub size={40} />,
    link_demo: "https://web-admin-ksm-kudubisa.netlify.app/",
  },
  {
    id: "6",
    image: "/ksm.png",
    title: "KSM KuduBisa",
    desc: "KSM KuduBisa merupakan suatu kelompok swadaya masyarakat di kabupaten Banyumas yang bertugas untuk memgambil, memilah dan mengelola sampah",
    link_repo: "https://github.com/kopsus/ksm-kudubisa",
    git: <FaGithub size={40} />,
    link_demo: "https://ksm-kudubisa.my.id/",
  },
];

export const experiences = [
  {
    id: "1",
    title: "Freelancer",
    company: "Fastwork",
    companyLink: "https://fastwork.id/user/kopsus",
    desc: "Carry out independent work activities by becoming a freelancer on the Fastwork platform.",
    date: "19 August 2023 - Now",
  },
  {
    id: "2",
    title: "Front-end Engineer",
    company: "PT.Hudoro Solusi Digital",
    companyLink:
      "https://www.linkedin.com/company/hudoro-solusi-digital/mycompany/",
    desc: "Freelance Front-End Engineer, specializing in developing enterprise application interfaces using React and TypeScript.",
    date: "1 April 2024 - july 2024",
  },
  {
    id: "3",
    title: "Front-end Engineer",
    company: "PT.Sineas Kreatif indonesia",
    companyLink:
      "https://www.linkedin.com/company/sineaskreatifindonesia/mycompany/",
    desc: "Freelance Front-End Engineer, specializing in developing enterprise application interfaces using Next.js, Tailwind css and TypeScript.",
    date: "1 August 2024 - 1 Februari 2025",
  },
];

export const educations = [
  {
    id: "1",
    title: "Rakamain Academy",
    companyLink: "https://www.rakamin.com/",
    desc: "Participated in the MSIB Independent Study Full Stack Web Development Intensive Bootcamp program at Rakamin Academy",
    date: "14 Agu 2023 - 31 Des 2023",
  },
  {
    id: "2",
    title: "Telkom University Purwokerto",
    companyLink: "https://ittelkom-pwt.ac.id/",
    desc: "Active student at the Telkom University Purwokerto, Informatics Engineering study program",
    date: "Oktober 2021 - Februari 2025",
  },
];
