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
      icon: <FaCss3></FaCss3>,
      name: "Css",
    },
    {
      icon: <FaJs></FaJs>,
      name: "Javascript",
    },
    {
      icon: <FaReact></FaReact>,
      name: "React",
    },
    {
      icon: <FaNodeJs></FaNodeJs>,
      name: "NodeJs",
    },
    {
      icon: <FaPython></FaPython>,
      name: "Python",
    },
    {
      icon: <FaGit></FaGit>,
      name: "Github",
    },
    {
      icon: <FaDocker></FaDocker>,
      name: "Docker",
    },
    {
      icon: "/assets/resume/icons-amazon-aws",
      name: "AWS",
    },
    {
      icon: "/assets/resume/icons-chatgpt",
      name: "ChatGPT",
    },
    {
      icon: "/assets/resume/icons-kubernetes",
      name: "Kubernetes",
    },
    {
      icon: "/assets/resume/icons-linux",
      name: "Linux",
    },
    {
      icon: "/assets/resume/icons-mongodb",
      name: "Mongodb",
    },
    {
      icon: "/assets/resume/icons-mysql",
      name: "MySQL",
    },
    {
      icon: "/assets/resume/icons-nextjs",
      name: "NextJs",
    },
    {
      icon: "/assets/resume/icons-postgresql",
      name: "Postgresql",
    },
    {
      icon: "/assets/resume/icons-postman",
      name: "Postman",
    },
    {
      icon: "/assets/resume/icons-prisma",
      name: "Prisma",
    },
    {
      icon: "/assets/resume/icons-typescript",
      name: "Typescript",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value={""}>Experience</TabsTrigger>
            <TabsTrigger value={""}>Education</TabsTrigger>
            <TabsTrigger value={""}>Skills</TabsTrigger>
            <TabsTrigger value={""}>About Me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
