//
//
//
import { FaHtml5, FaTwitter, FaGithub, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiWebflow } from "react-icons/si";
import portfolio from "./components/pages/Portfolio/Portfolio"
// import work1 from "./assets/work1.png";
// import work2 from "./assets/work2.png";
// import work3 from "./assets/work3.png";
// import work4 from "./assets/work4.png";
// import work5 from "./assets/work5.png";
// import work6 from "./assets/work6.png";


export const navItems = [
    'home', 
    'about', 
    'skills', 
    'portfolio', 
    'contact'
]

export const connects = [
    <FaTwitter />,
    <FaGithub />,
    <FaLinkedin />,
]

export const myBios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Raheem"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+2348106016051"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "raheemadebayorr@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiWebflow />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const workHistory = [
  {
    id: 1,
    year: "2022",
    post: "Senior Web Developer",
    company: "shop.com.mm"
  },
  {
    id: 2,
    year: "2021",
    post: "Junior Web Developer",
    company: "shop.com.mm"
  },
  {
    id: 3,
    year: "2019",
    post: "Intern Web Dveloper",
    company: "shop.com.mm"
  }
]
export const completions = [
  {
    id: 1,
    number: '02+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "004+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "069+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "005+",
    itemName: "Clients Served"
  }
]
// export const workImages = [
//   {
//     id: 1,
//     img: work1,
//     name: "project 1",
//     category: "web"
//   },
//   {
//     id: 2,
//     img: work2,
//     name: "project 2",
//     category: "web"
//   },
//   {
//     id: 3,
//     img: work3,
//     name: "project 3",
//     category: "web"
//   },
//   {
//     id: 4,
//     img: work4,
//     name: "project 4",
//     category: "app"
//   },
//   {
//     id: 5,
//     img: work5,
//     name: "project 5",
//     category: 'app'
//   },
//   {
//     id: 6,
//     img: work6,
//     name: "project 6",
//     category: "design"
//   }
// ]


export const workNavs = [
  "All", "Web", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Oyo, Oyo State, Nigeria"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "raheemadebayorr@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+234 810 601 6051"
  }
]