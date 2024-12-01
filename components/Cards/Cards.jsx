"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaWordpress, FaReact, FaFigma } from "react-icons/fa";

const journey = [
    // experience
    {
        type: "experience",
        company: "Pixency",
        logoUrl: "/assets/journey/experience/logo-1.svg",
        position: "Frontend Developer",
        duration: "01 January 2022 - Present",
        description: "I am working on Themeforest and have approved the HTML5 Template in Themeforest. Built website using HTML5, NextJS, CSS, Tailwind CSS, Bootstrap, Wordpress Elementor. worked on scalable, useer friendly solutions. Develop web interfaces with cross-browser compatibility and responsiveness delivered pixel-perfect designs."
    },
    {
        type: "experience",
        company: "Pixency",
        logoUrl: "/assets/journey/experience/logo-1.svg",
        position: "Intern - Web Design & Development",
        duration: "01 July 2021 - 01 Jan 2022",
        description: "Collaborated with teams to design and develop responsive, user-friendly websites and web applications. Gained hands-on experience in front-end and back-end development using technologies such as HTML, CSS, JavaScript, and relevant frameworks. Assisted in debugging, troubleshooting, and optimizing website performance for better user experiences. Contributed to creating wireframes, prototypes, and UI/UX enhancements to improve design workflows. Gained exposure to content management systems and web hosting platforms."
    },
    // education
    {
        type: "education",
        institution: "techtute.com",
        logoUrl: "/assets/journey/education/institution.svg",
        qualification: "HTML5 template approved on themeforest",
        duration: "Jun 2022 - Feb 2023",
        description: "Learned temeforest. I am working on Themeforest and have approved the HTML5 Template in Themeforest. Built website using HTML5, CSS3, Bootstrap5 & Jquery."
    },
    {
        type: "education",
        institution: "shikhun.net",
        logoUrl: "/assets/journey/education/logo-2.svg",
        qualification: "Web Development & Section Development",
        duration: "Jan 2022 - Aug 2022",
        description: "Learned Web Development and Section Development concepts, focusing on HTML5, CSS3, Bootstrap5, Javascript and Jquery.."
    },
    {
        type: "education",
        institution: "Udemy",
        logoUrl: "/assets/journey/education/logo-1.svg",
        qualification: "Web Design & Development",
        duration: "July 2021 - Jan 2022",
        description: "Learned Web Design & Development concepts, focusing on HTML5, CSS3, Bootstrap5, Javascript and Jquery. completed hands-on projects to solidify skills."
    },
    // skills
    {
        type: "skill",
        name: "HTML",
        icon: <FaHtml5/>,
        duration: "Learned in 2020",
        description: "Crafted structured web content using HTML effectively for modern websites, ensuring semanting marckup and accessibility."
    },
    {
        type: "skill",
        name: "CSS",
        icon: <FaCss3Alt/>,
        duration: "Learned in 2020",
        description: "Styled resposive web pages using CSS, ensuring an appealing user experience with moder design principles and layouts."
    },
    {
        type: "skill",
        name: "Bootstrap",
        icon: <FaBootstrap/>,
        duration: "Learned in 2021",
        description: "Styled resposive web pages using Bootstrap, ensuring an appealing user experience with moder design principles and layouts."
    },
    {
        type: "skill",
        name: "Javascript",
        icon: <FaJs/>,
        duration: "Learned in 2021",
        description: "Implemented javascript for interactivity, enhancing user  engagement on websites through dynamic content and features."
    },
    {
        type: "skill",
        name: "Figma",
        icon: <FaFigma/>,
        duration: "Learned in 2021",
        description: "Designed user interfaces in figma, facilitating collaboration and rapid prototyping to meet user needs and project goals."
    },
    {
        type: "skill",
        name: "Wordpress",
        icon: <FaWordpress/>,
        duration: "Learned in 2022",
        description: "Developed dynamic website with wordpress elementor, simplifying content management processes while ensuring scalability and performance."
    },
    {
        type: "skill",
        name: "ReactJS",
        icon: <FaReact/>,
        duration: "Learned in 2022 - present",
        description: "Built dynamic user interfaces using ReactJS, optimizing component driven design for seamless user experience and efficiency. And now i am using modern NEXT JS framework."
    },
];

const Cards = () => {
  return (
    <>
        <Tabs defaultValue="experience" className="w-full flex flex-col items-center">
            <TabsList className="max-w-max mb-[30px]">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">My skills</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {journey.filter((item) => item.type === "experience").map((card, index) => {
                                return <Card key={index} {...card} />;
                            })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>
            <TabsContent value="education" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {journey.filter((item) => item.type === "education").map((card, index) => {
                                return <Card key={index} {...card} />;
                            })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {journey.filter((item) => item.type === "skill").map((card, index) => {
                            return <Card key={index} {...card} />;
                        })}
                    </motion.div>

                </AnimatePresence>
            </TabsContent>
        </Tabs>
    </>
  );
};

export default Cards;