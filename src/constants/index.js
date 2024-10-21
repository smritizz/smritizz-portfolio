import {
  mobile,
  backend,
  creator,
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
  jira,
  nextjs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  density,
  eb,
  health,
  budget,
  chatapp,
  quizmify,
  evogym,
  ashoptweek
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tech Blogger",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Jira",
    icon: jira,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Edgebricks",
    icon: eb,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Collaborated with a cross-functional team to develop the frontend of an EdgeCloud product, focusing on modern web technologies like Next.js and TypeScript along with seamless API integrations.",
      "Optimized the performance of the product by 42% and managed the complex states of infrastructure and VM creation in the application using Redux, ensuring efficient data handling and maintainable code.",
      "Worked on an end-to-end chatbot creation product, implementing pagination and designing a folder structure similar to Google Drive for improved user experience and organization"
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Density Exchange",
    icon: density,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - March 2024",
    points: [
      "Revamped company’s website with the team using ReactJS, TypeScript, and Material UI, resulting in a more responsive, user-friendly interface, optimizing the performance by 37%.",
      "Developed a comprehensive admin panel from scratch, seamlessly incorporating CRUD functionalities to display and update user data retrieved through API integration.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HealthLink",
    description:
      "A responsive Fullstack healthcare patient management platform with CRUD functionalities that empower patients to easily register, schedule, and manage their appointments with healthcare professionals. The application includes an intuitive admin panel for doctors to efficiently manage their schedules, confirm, reschedule, and cancel appointments, all while providing real-time updates through SMS notifications. Built using the power of Next.js, the platform maintains security and scalability to meet the evolving needs of modern healthcare.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "shadCN",
        color: "blue-text-gradient",
      },
    ],
    image: health,
    source_code_link: "https://github.com/smritizz/HealthLink",
  },
  {
    name: "Budget Buddy",
    description:
      " A responsive Fullstack web application that allows users to track their expenses and group transactions by timeline and categories, maintaining the history.Contains a flexible categories section, allowing for easy addition, modification, and deletion of categories with integrated table to present transaction details, where transactions can be added, removed, and filtered efficiently.Leveraged Clerk for secure authentication, React Query for efficient server-side syncing and MongoDB for efficient storage and retrieval.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: budget,
    source_code_link: "https://github.com/smritizz/Budget-Buddy/",
  },
  {
    name: "ShopTweek",
    description:
      "A user-friendly E-Commerce platform built on the MERN stack, offering secure JWT authentication for personalized shopping experiences. The site allows users to effortlessly browse products, manage their carts, and place orders with ease. The platform features an intuitive admin panel where administrators can manage products, view detailed order histories, and update order statuses in real-time. Integrated Stripe for payment gateway to ensure secure and smooth transactions and used MongoDB for efficient data storage",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: ashoptweek,
    source_code_link: "https://github.com/smritizz/ShopTweek",
  },
  {
    name: "Quizmify",
    description:
    "A responsive full-stack web application enabling users to generate quizzes dynamically based on their chosen topics, receive instant feedback on their quiz performance, and track their progress over time.Integrated OpenAI API, used MySQL Database for storage of users’ history and allowing users to seamlessly switch between dark and light modes.",
    tags: [
      {
        name: "nextAuth",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
      {
        name: "material UI",
        color: "blue-text-gradient",
      },
    ],
    image: quizmify,
    source_code_link: "https://github.com/smritizz/Quizmify-an-_Ai_quiz_platform",
  },
  {
    name: "Evogym",
    description:
  "A responsive fitness application that connects fitness enthusiasts with expert trainers, providing an easy way for users to explore gym facilities, manage memberships, leave reviews and join a variety of fitness classes.Built using React-TypeScript and styled with Tailwind CSS, it features smooth transitions powered by FramerMotion animations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "blue-text-gradient",
      },
    ],
    image: evogym,
    source_code_link: "https://github.com/smritizz/evogym",
  },
  {
    name: "ChatterBox",
    description:
  "A FullStack Chat App enabling users to exchange messages in real-time. Powered by Socket.io, the app ensures instant communication and delivers a seamless user experience while storing data in MongoDB database. With a sleek and intuitive chat interface, users can instantly connect and enjoy smooth, reliable real-time conversations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
     
    ],
    image: chatapp,
    source_code_link: "https://github.com/smritizz/chatterbox/",
  }
];

export { services, technologies, experiences, testimonials, projects };
