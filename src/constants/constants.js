import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
  techoutsLogo,
  tajWebsite,
  vivanta,
  ginger,
  grasimPaints,
  ssBeauty,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Programmer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  }
];

const projects = [
  {
    name: "Taj IHCL",
    description:
      "Developed a responsive, high-end website for Taj Hotels (IHCL) showcasing luxury properties and enabling seamless booking. Focused on elegant UI/UX, performance, and brand-aligned design",
    features: [
      "Users can create a room and invite others to join the room using a unique room code.",
      "Users can draw on the whiteboard and the changes will be reflected in real-time to all the users in the room.",
    ],
    tags: [
      {
        name: "NextJs",
        color: "black-text-gradient",
      },
      {
        name: "Sanity",
        color: "orange-text-gradient",
      },
      {
        name: "MUI",
        color: "blue-text-gradient",
      },
    ],
    textColor: "#AD8B3A",
    image: tajWebsite,
    source_code_link: "",
    live_link: "https://www.tajhotels.com/en-in",
  },
  {
    name: "Vivanta",
    description:
      "Developed a vibrant, responsive website for Vivanta (IHCL), emphasizing modern design, smooth navigation, and an optimized booking experience.",
    features: [
      "User authentication using NextAuth.js with JWT and OAuth providers.",
      "Redux to Manage app state effectively.",
      "Play, pause, skip, and control the playback of songs.",
      "Users can Create, update and delete their own playlists.",
      "Add songs to favorites in one click.",
      "Auto adds similar songs to the queue.",
      "Swipe and touch gestures for touch-responsive devices.",
      "Display song details such as title, artist, album, and album artwork.",
      "PWA (Progressive Web App) support. ",
    ],
    tags: [
      {
        name: "NextJs",
        color: "black-text-gradient",
      },
      {
        name: "Sanity",
        color: "orange-text-gradient",
      },
      {
        name: "MUI",
        color: "blue-text-gradient",
      },
    ],
    textColor: "#502C8E",
    image: vivanta,
    source_code_link: "",
    live_link: "https://www.vivantahotels.com/en-in",
  },
  {
    name: "Ginger",
    description:
      "Developed a clean, fast-loading website for Ginger Hotels (IHCL), focused on smart, budget-friendly travel with intuitive UX and streamlined booking functionality",
    features: [
      "Implemented Email verification and using OTP user authentication and login/signup functionality using JWT for secure access to the platform.",
      "Students can browse and purchase courses. Instructors can create new courses, edit existing courses, and delete courses they have created.",
      "Integrated MongoDB database to store user information, course data, and progress tracking.",
      "Employed RESTful API principles for seamless communication between the frontend and backend systems.",
      "Razorpay payment integration.",
      "PWA (Progressive Web App) support.",
    ],
    tags: [
      {
        name: "NextJs",
        color: "black-text-gradient",
      },
      {
        name: "Sanity",
        color: "orange-text-gradient",
      },
      {
        name: "MUI",
        color: "blue-text-gradient",
      },
    ],
    backgroundImage: "linear-gradient(#FFA100,#F7470F,#EE1162)",
    image: ginger,
    source_code_link: "",
    live_link: "https://www.gingerhotels.com/",
  },
  {
    name: "SSBeauty",
    description:
      "Developed a modern, responsive website for ssBeauty, highlighting beauty services and products with a sleek UI, easy appointment booking, and engaging visuals.",
    features: [
      "Users can add products to the watchlist by clicking on the extension icon on the product page.",
      "Users can set a price alert by entering the desired price for the product.",
    ],
    tags: [
      {
        name: "NextJs",
        color: "black-text-gradient",
      },
      {
        name: "Sanity",
        color: "orange-text-gradient",
      },
      {
        name: "MUI",
        color: "blue-text-gradient",
      },
    ],
    textColor: "#AD184C",
    image: ssBeauty,
    source_code_link: "",
    live_link: "https://www.ssbeauty.in/",
  },
  {
    name: "Grasim Paints",
    description:
      "Developed an engaging, responsive website for Grasim Paints, showcasing product ranges with vibrant visuals and user-friendly navigation to enhance customer experience.",
    features: [
      "User authentication using JWT and OAuth providers.",
      "Infinite scroll for posts.",
      "Image and video uploads.",
      "Like, comment, and share posts.",
      "Follow and unfollow users.",
      "Dark mode support.",
    ],
    tags: [
      {
        name: "HTML",
        color: "black-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
    ],
    textColor: "#198F4ACC",
    image: grasimPaints,
    source_code_link: "",
    live_link: "https://www.grasim.com/",
  },
];

const experiences = [
  {
    id: 0,
    img: techoutsLogo,
    role: "Front end Developer",
    company: "Techouts",
    date: "Feb-2022 - Present",
    desc: "Developed dynamic and scalable web applications using the Next js, handling both frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Material Ui",
      "Mobx",
      "Next Js",
    ],
  },
  {
    id: 1,
    img: techoutsLogo,
    role: "Front end Developer",
    company: "Techouts",
    date: "Feb-2022 - Present",
    desc: "Developed dynamic and scalable web applications using the Next js, handling both frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Material Ui",
      "Mobx",
      "Next Js",
    ],
  },
];

export {
  services,
  technologies,
  experiences,
  //  testimonials,
  projects,
};
