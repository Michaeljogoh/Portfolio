"use client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtn from "@/components/workSlideBtn";
import projectImage from "@/public/ppo.png"
import taskTracker from "@/public/task-tracker.png"
import portfolio from "@/public/portfolio.png"



const projects = [
    {
      num:"01",
      category:"Frontend",
      title:"Task Tracker",
      description:"A simplified, interactive web application that allows users to view, add, edit, and delete items from a list",
      stack:[{name:"Next.js"}, {name:"Tailwind"}, {name:"Typescript"} , {name:"Jest"} , {name:"Json-Server"}],
      image:taskTracker,
      live:"https://task-tracker-michaeljogohs-projects.vercel.app",
      github:"https://github.com/Michaeljogoh/Task-Tracker",

    },
    {
      num:"02",
      category:"Frontend",
      title:"Michael's Portfolio",
      description:"My personal portfolio website",
      stack:[{name:"Next.js"}, {name:"Tailwind"}, {name:"Framer-motion"}],
      image:portfolio,
      live:"https://michaeljogoh.vercel.app/",
      github:"https://github.com/Michaeljogoh/Portfolio",
    },
    {
      num:"03",
      category:"frontend",
      title:"project 1",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dolore",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:projectImage,
      live:"",
      github:"",
    },
]


const Work = () => {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) =>{
          const currentIndex = swiper.activeIndex;
          setProject(projects[currentIndex]);
     }

    return (
      <>
    
        <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:1.5, duration: 0.3, ease:"easeIn"}}} 
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0" 
         >
           <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                        {project.title} 
                        </h2>
                        <p className="text-white/60">{project.description}</p>
                        <ul className="flex g-4">
                            {project.stack.map((item, index) =>{
                                return (
                                    <li key={index} className="text-xl text-accent">
                                    {item.name}
                                    {index !== project.stack.length -1 && ","}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="border border-white/20"></div>
                          <div className="flex items-center gap-4">
                            {/* Live Project Button */}
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <Link href={project.live} passHref target="_blank" rel="noopener noreferral">
                                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex 
                                    justify-center items-center group">
                                     <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    </Link>
                                    <TooltipContent>
                                        <p>Live project</p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            {/* Github Project Button */}
                            <Link href={project.github}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex 
                                    justify-center items-center group">
                                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github repository</p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </Link>
                          </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper 
                    spaceBetween={30} 
                    slidesPerView={1} 
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index) =>{
                          return(
                            <SwiperSlide key={index} className="w-full">
                                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    <div className="relative h-full w-full">
                                        <Image src={project.image} priority fill className="object-fill" alt="Project image" />
                                    </div>
                                </div>
                            </SwiperSlide>
                          )
                        })}
                        < WorkSlideBtn containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full
                        justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                        w-[44px] h-[44px] flex justify-center items-center transition-all  " />  
                    </Swiper>
                </div>
            </div>
           </div>
        </motion.section>
    
      </>
    )
}

export default Work
