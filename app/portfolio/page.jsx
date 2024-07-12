"use client"

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import company from "@/public/portfolio-5.jpg"
import Image from "next/image";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import Link from "next/link";



const projects = [
  {
      category:"frontend",
      title:"Michael's Portfolio",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"https://michaeljogoh.vercel.app/",
      github:"https://github.com/Michaeljogoh/Portfolio",
      all:"all",
      delay:"1.4s"
    },
    {
      category:"frontend",
      title:"Task Tracker",
      stack:[{name:"Next.js"}, {name:"Tailwind"}, {name:"CSS"}],
      image:company,
      live:"https://task-tracker-michaeljogohs-projects.vercel.app",
      github:"https://github.com/Michaeljogoh/Task-Tracker",
      all:"all",
      delay:"1.2s"
    },
    {
      category:"full",
      title:"Full Stack Developer",    
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"",
      github:"",
      all:"all",
      delay:"0.4s"
    },
 
    {
      category:"backend",
      title:"Backend Developer",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"",
      github:"",
      all:"all",
      delay:"1.0s"
    },
]



const Resume = () => {
   
    return (
        <>
        <div className="container mx-auto">
        <h3 className="text-center text-4xl font-bold mb-3">My Excellent Portfolio</h3>
            <Tabs defaultValue="all" className="">
              <TabsList className="flex flex-col md:flex-row w-3/6 mx-auto  gap-6">
                    <TabsTrigger value="all">All</TabsTrigger>                       
                    <TabsTrigger value="full">Full Stack</TabsTrigger>                       
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>                       
                    <TabsTrigger value="backend">Backend</TabsTrigger>                       
                </TabsList>
                <motion.section initial={{opacity:0}} animate={{opacity:1,
                 transition:{delay:1.6, duration: 0.4, ease:"easeIn"}}} >
                <div className="min-h-[70vh] w-full">
                 {/* ALL */}
                <TabsContent value="all" className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-7">
                    {projects.map((project, index)=>{
                        return (
                    <div className="portfolio-wrap" key={index} >
                    <div className="portfolio-img">
                    <Image src={project.image} alt="Image"/>
                    </div>
                    <div className="myGrid">
                    <div className="grid grid-cols-3 gap-4">
                   <div className="col-span-2  my-3 ">
                    <h3 className="text-black font-extrabold ml-4">{project.title}</h3>
                   </div>
                   <div className="flex justify-center gap-2 my-3">
                 <TooltipProvider delayDuration={100}>
                 <Tooltip>
                 <Link href={project.live} passHref target="_blank" rel="noopener noreferrer" className="bg-black rounded-full">
                 <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex  justify-center items-center group">
                 <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
                 </TooltipTrigger>
                 </Link>    
                 <TooltipContent>
                  <p className="bg-black rounded-md px-2">Live project</p>
                 </TooltipContent>               
                 </Tooltip>
                 </TooltipProvider>
                 <TooltipProvider delayDuration={100}>
                 <Tooltip>
                 <Link href={project.github} passHref target="_blank" rel="noopener noreferrer" className="bg-black rounded-full">
                 <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex  justify-center items-center group">
                 <BsGithub className="text-white text-2xl group-hover:text-accent"/>
                 </TooltipTrigger>
                 </Link>   
                 <TooltipContent>
                  <p className="bg-black rounded-md px-2">Github</p>
                  </TooltipContent>
                 </Tooltip>
                </TooltipProvider>
                   </div>
                   </div>
                   </div>
                  </div>           
                   )
                    })}
                    </div>                   
                </TabsContent>
                {/* Full */}
                <TabsContent value="full" className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-7">
                {projects.filter((project) => project.category === "full").map((project, index)=>{
                        return (
                    <div className="portfolio-wrap" key={index}>
                    <div className="portfolio-img">
                    <Image src={company} alt="Image"/>
                    </div>
                    <div className="myGrid">
                    <div className="grid grid-cols-3 gap-4">
                   <div className="col-span-2  my-3 ">
                    <h3 className="text-black font-extrabold ml-4">{project.title}</h3>
                   </div>
                   <div className="flex justify-center gap-2 my-3">
                 <TooltipProvider delayDuration={100}>
                 <Tooltip>
                 <Link href={project.live} passHref target="_blank" rel="noopener noreferrer" className="bg-black rounded-full">
                 <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex  justify-center items-center group">
                 <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
                 </TooltipTrigger>
                 </Link>       
                 </Tooltip>
                 </TooltipProvider>
                 <TooltipProvider delayDuration={100}>
                 <Tooltip>
                 <Link href={project.github} passHref target="_blank" rel="noopener noreferrer" className="bg-black rounded-full">
                 <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex  justify-center items-center group">
                 <BsGithub className="text-white text-2xl group-hover:text-accent"/>
                 </TooltipTrigger>
                 </Link>   
                 </Tooltip>
                </TooltipProvider>
                    </div>
                </div>
                 </div>
                 </div>
                            
                        )
                    })}
                 </div>
                </TabsContent>
                {/* Backend */}
                <TabsContent value="backend" className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-7">
                 {projects.filter((project) => project.category === "backend").map((project, index) =>{
                    return(
                <div class="portfolio-wrap" key={index}>
                    <div className="portfolio-img">
                    <Image src={project.image} alt="Image"/>
                    </div>
                    <div className="myGrid">
                    <div className="grid grid-cols-3 gap-4">
                   <div className="col-span-2  my-3 ">
                    <h3 className="text-black font-extrabold ml-4">{project.title}</h3>
                   </div>
                <div className="flex justify-center gap-2 my-3">
                 <TooltipProvider delayDuration={100}>
                 <Tooltip>
                 <Link href={project.live} passHref target="_blank" rel="noopener noreferrer" className="bg-black rounded-full">
                 <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex  justify-center items-center group">
                 <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
                 </TooltipTrigger>
                 </Link>       
                 </Tooltip>
                 </TooltipProvider>
                 <TooltipProvider delayDuration={100}>
                 <Tooltip>
                 <Link href={project.github} passHref target="_blank" rel="noopener noreferrer" className="bg-black rounded-full">
                 <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex  justify-center items-center group">
                 <BsGithub className="text-white text-2xl group-hover:text-accent"/>
                 </TooltipTrigger>
                 </Link>   
                 </Tooltip>
                </TooltipProvider>
                 </div>
                </div>
                 </div>
                </div>
                 )
                 })}
                 </div>
                </TabsContent>
                {/* API */}
                <TabsContent value="frontend" className="w-full">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-7">
                 {projects.filter((project) => project.category === "frontend").map((project, index) =>{
                    return (
                    <div className="portfolio-wrap" key={index}>
                    <div className="portfolio-img">
                    <Image src={project.image} alt="Image"/>
                    </div>
                    <div className="myGrid">
                    <div className="grid grid-cols-3 gap-4">
                     <div className="col-span-2  my-3 ">
                    <h3 className="text-black font-extrabold ml-4">{project.title}</h3>
                   </div>
                 <div className="flex justify-center gap-2 my-3">
                 <TooltipProvider delayDuration={100}>
                 <Tooltip>
                 <Link href={project.live} passHref target="_blank" rel="noopener noreferrer" className="bg-black rounded-full">
                 <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex  justify-center items-center group">
                 <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
                 </TooltipTrigger>
                 </Link>       
                 </Tooltip>
                 </TooltipProvider>
                 <TooltipProvider delayDuration={100}>
                 <Tooltip>
                 <Link href={project.github} passHref target="_blank" rel="noopener noreferrer" className="bg-black rounded-full">
                 <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex  justify-center items-center group">
                 <BsGithub className="text-white text-2xl group-hover:text-accent"/>
                 </TooltipTrigger>
                 </Link>   
                 </Tooltip>
                </TooltipProvider>
                 </div>
                </div>
                 </div>
                </div>  
                    )
                })}
                 </div>
                </TabsContent>
                </div>
                </motion.section>
            </Tabs>
        </div>
        </>
    )
}

export default Resume
 