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
    points: ["Was trained on python technologies and worked for Cisco Client"],
  },
  {
    title: "Software Engineer",
    company_name: "Cisco DevNet (through Wipro)",
    icon: cisco,
    iconBg: "#383E56",
    date: "Nov 2019 - June 2022",
    points: [
      "Implemented automation testing for IP phones in the Cisco DevNet project.",
      "Conducted unit testing on Cisco Unified Call Manager APIs using Python and generated detailed HTML reports for test results.",
      "Created sample code snippets to facilitate the implementation of Cisco Unified Call Manager APIs.",
      "Offered developer support for Cisco Unified Call Manager APIs within the Collaboration related APIs, resolving integration errors in client codes.",
      "Handled high priority tickets with customers and collaborated with multiple teams and engineers across the globe to handle critical customer needs.",
      "Proficient in troubleshooting simple and complex CUCM API integration issues, achieving a satisfaction rate of over 95%.",
      "Analyzed client network logs to identify errors and provided effective solutions for integration issues.",
      "Worked extensively with XML/JSON data, TCP/IP protocols, VoIP Phones, REST APIs, SOAP APIs, Session Initiation Protocols (SIP), UDP, and SDP.",
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
