import {
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap2,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import aws from "../assets/traningtechnologies/awslogo.png";
import js from "../assets/traningtechnologies/jslogo.png";
import react from "../assets/traningtechnologies/reactlogo.png";
import node from "../assets/traningtechnologies/nodelogo.png";
import graphql from "../assets/traningtechnologies/graphql.png";
import more from "../assets/traningtechnologies/more.png";
import kubernetes from "../assets/traningtechnologies/kuberneteslogo.png"
import github from "../assets/traningtechnologies/githublogo.png"
import docker from "../assets/traningtechnologies/dockerlogo.png"
import denefig1 from "../assets/roadmap/image-3.png"
import structuredlearning from "../assets/roadmap/structureleaning.svg"
import widerange from "../assets/roadmap/widerange.svg"









export const navigation = [
  {
    id: "0",
    title: "About",
    url: "/about",
  },
  {
    id: "1",
    title: "Training & Plassments",
    url: "/training",
  },
  {
    id: "2",
    title: "Contact Us",
    url: "/contact",
  },
  {
    id: "3",
    title: "IT Services",
    url: "",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Industry level projects",
    text: "Master Real-World Skills with Hands-On, Industry-Level Projects – Learn, Build, and Excel in Your Career with Confidence and Expertise!",
    imageUrl: denefig1,
    colorful: true,
  },
  {
    id: "1",
    title: "Inclusive community",
    text: "An inclusive community exists to foster connection, support, and collaboration among diverse individuals.",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Wide range of courses including",
    text: "Explore a wide range of courses including Data Structures & Algorithms, Web Development, DevOps, Machine Learning, and more!",
    imageUrl: structuredlearning,
  },
  {
    id: "3",
    title: "Structured Learning, Real-World Impact!",
    text: "All of our courses are well structure with great quality. We cover every topic in detail with a Real-life Case Studies.",
    imageUrl: widerange,
    colorful: true,
  },
];

export const collabText =
  "We provide customized IT services designed to meet your unique business needs and drive growth";

export const collabContent = [
  {
    id: "0",
    title: "Tailored Solutions:",
    text: collabText,
  },
  {
    id: "1",
    title: "Expert Support",
  },
  {
    id: "2",
    title: "Proven Results",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const training = [
  {
    id: "0",
    title: "Full Stack Developer",
    text: "You will complete 4 projects during the training and after completion of training, you will get a job 100% guarantee.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    benefits:["Deeps Knowlege", "24*7 support", "Industry level project","100% placement"],
    technologies : [
      {
        id: 1,
        name: "AWS",
        designation: "Cloud Platform",
        image: aws  ,
      },
      {
        id: 2,
        name: "JavaScript",
        designation: "Programing Language",
        image: js,
      },
      {
        id: 3,
        name: "React.js",
        designation: "Front-end Develpment",
        image: react,
      },
      {
        id: 4,
        name: "Node.js",
        designation: "Back-end development",
        image: node,
      },
      {
        id: 5,
        name: "GraphQL",
        designation: "Back-end Development",
        image: graphql,
      },
      {
        id: 6,
        name: "10 +",
        designation: "othen technologies",
        image: more,
      },
    ],
    
  },
  {
    id: "1",
    title: "DevOps",
    text: "You will complete minimum 5 projects during the training and after completion of training, you will get a job 100% guarantee.",
    benefits:["Deeps Knowlege", "24*7 support", "Industry level project","100% placement"],
    technologies : [
      {
        id: 1,
        name: "AWS",
        designation: "Cloud Platform",
        image: aws  ,
      },
      {
        id: 2,
        name: "JavaScript",
        designation: "Programing Language",
        image: js,
      },
      {
        id: 3,
        name: "Docker",
        designation: "Containerization",
        image: docker,
      },
      {
        id: 4,
        name: "GitHub",
        designation: "version control system",
        image: github,
      },
      {
        id: 5,
        name: "Kubernetes",
        designation: "Cloud Platform",
        image: kubernetes,
      },
      {
        id: 6,
        name: "10 +",
        designation: "othen technologies",
        image: more,
      },
    ],
    light: true,
  },
  {
    id: "2",
    title: "Power BI",
    text: "You will complete minimum 5 projects during the training and after completion of training, you will get a job 100% guarantee.",
    benefits:["Deeps Knowlege", "24*7 support", "Industry level project","100% placement"],
    technologies : [
      {
        id: 1,
        name: "AWS",
        designation: "Cloud Platform",
        image: aws  ,
      },
      {
        id: 2,
        name: "JavaScript",
        designation: "Programing Language",
        image: js,
      },
      {
        id: 3,
        name: "React.js",
        designation: "Front-end Develpment",
        image: react,
      },
      {
        id: 4,
        name: "Node.js",
        designation: "Back-end development",
        image: node,
      },
      {
        id: 5,
        name: "GraphQL",
        designation: "Back-end Development",
        image: graphql,
      },
      {
        id: 6,
        name: "10 +",
        designation: "othen technologies",
        image: more,
      },
    ],
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
