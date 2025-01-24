import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  cisco,
  wipro,
  kharidi,
  strack,
  pathFinder,
  willow,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Automation testing",
    icon: backend,
  },
  {
    title: "Developer support",
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Project Engineer",
    company_name: "Wipro",
    icon: wipro,
    iconBg: "white",
    date: "Jun 2019 - Aug 2022",
    points: ["Trained on python technologies."],
  },
  {
    title: "Front end developer",
    company_name: "Client: Wipro internal project",
    icon: wipro,
    iconBg: "white",
    date: "",
    points: [
      "Played a key role in revamping internal timesheet portals, improving the user interface and experience using React.js, JavaScript, and CSS, ensuring responsiveness and accessibility across devices.",
      "Developed mobile-first solutions with React Native, optimizing the internal time management portal for both Android and iOS platforms, enhancing cross-platform compatibility.",
      "Implemented tab bar and navigation bar components in React Native to facilitate smooth navigation and improve user experience across different app screens.",
      "Optimized mobile performance by utilizing lazy loading for assets and code splitting in React Native, ensuring faster load times and a smoother user experience.",
      "Integrated platform-specific design patterns in React Native, ensuring the app adhered to both Android and iOS design guidelines for consistency and usability.",
      "Utilized React Hooks to manage state and side effects in functional components, streamlining code and improving maintainability.",
      "Integrated data using REST APIs, collaborating with backend engineers to ensure seamless data flow between the front-end and server, improving application performance.",
      "Collaborated with backend engineers to design and implement API integrations, ensuring seamless data flow and improving application performance.",
      "Contributed to sprint planning and participated in daily stand-ups, following Agile methodologies to meet development goals and timelines.",
      "Engaged with cloud platforms like Azure for hosting and deployment, ensuring scalability and system reliability.",
      "Worked closely with UI/UX designers, translating Figma designs into fully functional, interactive web and mobile components.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Client: Cisco",
    icon: cisco,
    iconBg: "#383E56",
    date: "Nov 2019 - Dec 2021",
    points: [
      "Provided advanced support for CUCM, handling complex issues related to call control and session management in enterprise environments. Worked as a subject matter expert for troubleshooting SIP and VoIP issues.",
      "Led the development of automation scripts and frameworks using Python to automate the testing of REST APIs and SOAP APIs, improving testing coverage",
      "Designed and implemented an automation framework for integration and performance testing of Cisco IP phones and CUCM components, ensuring system stability across multiple versions and configurations.",
      "Wrote custom Python scripts to automate log collection, system diagnostics, and performance checks, which streamlined support processes and reduced response times.",
      "Led manual and automated testing of complex APIs, identifying and resolving integration issues with services using tools like Postman and SoapUI.",
      "Acted as the primary point of escalation for critical issues, performing in-depth troubleshooting with tools such as Wireshark for packet-level analysis of TCP/IP, SIP, and UDP communications.",
      "Utilized advanced debugging techniques to resolve complex issues related to call routing, session management, and media handling within Cisco CUCM.",
      "Ensured consistent service quality through proactive monitoring, identifying potential failures before they impacted end-users.",
      "Mentored fellow engineers in automation scripting, API integration, and debugging techniques, helping to upskill the team and improve overall efficiency.",
      "Authored and maintained comprehensive technical documentation, knowledge base articles, and internal guides on troubleshooting, automation testing, and API usage for both internal and external teams.",
      "Provided continuous feedback to the development team on API functionality, driving improvements and bug fixes for CUCM and related services.",
    ],
  },
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
    name: "Willow",
    description:
      "Created a simple nft project where a seller can list properties and then a inspector can approve, lender can lend some of the amount for the buyer and the buyer can buy the property",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: willow,
    source_code_link: "https://github.com/HarshaSiriki/willow",
  },
  {
    name: "Strack - productiviy app",
    description:
      "Created a react native app to manage time and expenses using react native, javascript, mongoDB, node.js, python ML model.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
    ],
    image: strack,
    source_code_link:
      "https://www.figma.com/file/zHD24kqGj2IZT5ARxj3AcB/%24Track?type=design&node-id=0%3A1&mode=design&t=yvSc3vK9QCnaXKkQ-1",
  },
  {
    name: "Pathfinder Visualizer",
    description:
      "Built a react web page for finding the shortest path between two nodes using dijkstra's algorithm.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pathFinder,
    source_code_link: "https://github.com/HarshaSiriki/pathfinder",
  },
  {
    name: "Kharidi",
    description:
      "I have created this website whilst learning react development. It has couple of products which can be added to cart to purchase and delete if needed. Simple implementation of a e commerce website. A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kharidi,
    source_code_link: "https://github.com/HarshaSiriki/Kharidi",
  },
];

export { services, technologies, experiences, testimonials, projects };
