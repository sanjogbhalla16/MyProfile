"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaDocker,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus deleniti itaque asperiores cum rerum suscipit aliquid!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sanjog Bhalla",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9407022268",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "sanjogbhalla16@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus deleniti itaque asperiores cum rerum suscipit aliquid!",
  items: [
    {
      company: "Cognizant Tech Sol Inc.",
      position: "Software Developer",
      duration: "2022 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus deleniti itaque asperiores cum rerum suscipit aliquid!",
  items: [
    {
      institution: "Institute Of Engineering And Technology - DAVV",
      degree: "Electronics and Instrumentation",
      duration: "2018 - 2022",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus deleniti itaque asperiores cum rerum suscipit aliquid!",
  skillset: [
    {
      icon: <FaHtml5></FaHtml5>,
      name: "html5",
    },
    {
      icon: <FaHtml5></FaHtml5>,
      name: "html5",
    },
    {
      icon: <FaHtml5></FaHtml5>,
      name: "html5",
    },
    {
      icon: <FaHtml5></FaHtml5>,
      name: "html5",
    },
  ],
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
