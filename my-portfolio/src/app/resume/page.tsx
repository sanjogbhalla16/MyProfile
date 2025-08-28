"use client";
// we will complete this tomorrow
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

//about data will do it today
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
      <div className="container mx-auto px-5">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul>
                  {skills.skillset.map((skill, index) => {
                    return <li key={index}>{skill.name}</li>;
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent value="about" className="w-full">
              About Me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
