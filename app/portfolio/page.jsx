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
      category:"fullstack",
      title:"Spotify clone",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"/resume",
      github:"/service",
      all:"all",
      delay:"0.0s"

    },
    {
      category:"fullstack",
      title:"Ecommerce Website",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"",
      github:"",
      all:"all",
      delay:"0.2s"
    },
    {
      category:"full stack",
      title:"project 1",    
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"",
      github:"",
      all:"all",
      delay:"0.4s"
    },
    {
      category:"backend",
      title:"FastApi",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"",
      github:"",
      all:"all",
      delay:"0.6s"
    },
    {
      category:"backend",
      title:"Web Server",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"",
      github:"",
      all:"all",
      delay:"0.8s"
    },
    {
      category:"backend",
      title:"project 1",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"",
      github:"",
      all:"all",
      delay:"1.0s"
    },
    {
      category:"api",
      title:"project 1",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"",
      github:"",
      all:"all",
      delay:"1.2s"
    },
    {
      category:"api",
      title:"project 1",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:company,
      live:"",
      github:"",
      all:"all",
      delay:"1.4s"
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
                    <TabsTrigger value="backend">Backend</TabsTrigger>                       
                    <TabsTrigger value="api">API</TabsTrigger>                       
                </TabsList>
                <div className="min-h-[70vh] w-full">
                 {/* ALL */}
                <TabsContent value="all" className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-7">
                    {projects.map((project, index)=>{
                        return (
                    <div class="portfolio-wrap" key={index} >
                    <div class="portfolio-img">
                    <Image src={project.image} alt="Image"/>
                    </div>
                    <div className="myGrid">
                    <div class="grid grid-cols-3 gap-4">
                   <div className="col-span-2  my-3 ">
                    <h3 className="text-black font-extrabold ml-4">{project.title}</h3>
                   </div>
 
                   <div className="flex justify-center gap-2 my-3">
                   <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex 
                                    justify-center items-center group">
                                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <Link href={project.live} className="bg-black rounded-md">Live project</Link>
                                    </TooltipContent>
                                </Tooltip>
                          </TooltipProvider>
                    <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex 
                                    justify-center items-center group">
                                    <BsGithub className="text-white text-2xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <Link href={project.github} className="bg-black rounded-md">GitHub</Link>
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
                {projects.filter((project) => project.category === "fullstack").map((project, index)=>{
                        return (
                    <div class="portfolio-wrap" key={index}>
                    <div class="portfolio-img">
                    <Image src={company} alt="Image"/>
                    </div>
                    <div className="myGrid">
                    <div class="grid grid-cols-3 gap-4">
                   <div className="col-span-2  my-3 ">
                    <h3 className="text-black font-extrabold ml-4">{project.title}</h3>
                   </div>
              
                 <div className="flex justify-center gap-2 my-3">
                 <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex 
                                    justify-center items-center group">
                                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="bg-black rounded-md">Live project</p>
                                    </TooltipContent>
                                </Tooltip>
                          </TooltipProvider>
                 <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex 
                                    justify-center items-center group">
                                    <BsGithub className="text-white text-2xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="bg-black rounded-md">GitHub</p>
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
                {/* Backend */}
                <TabsContent value="backend" className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-7">
                 {projects.filter((project) => project.category === "backend").map((project, index) =>{
                    return(
                <div class="portfolio-wrap">
                    <div class="portfolio-img">
                    <Image src={company} alt="Image"/>
                    </div>
                    <div className="myGrid">
                    <div class="grid grid-cols-3 gap-4">
                   <div className="col-span-2  my-3 ">
                    <h3 className="text-black font-extrabold ml-4">Spotify Clone</h3>
                   </div>
 
                 <div className="flex justify-center gap-2 my-3">
                 <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex 
                                    justify-center items-center group">
                                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="bg-black rounded-md">Live project</p>
                                    </TooltipContent>
                                </Tooltip>
                          </TooltipProvider>
                 <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex 
                                    justify-center items-center group">
                                    <BsGithub className="text-white text-2xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="bg-black rounded-md">GitHub</p>
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
                {/* API */}
                <TabsContent value="api" className="w-full">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-7">
                 {projects.filter((project) => project.category === "api").map((project, index) =>{
                    return (
                <div class="portfolio-wrap" key={index}>
                    <div class="portfolio-img">
                    <Image src={project.image} alt="Image"/>
                    </div>
                    <div className="myGrid">
                    <div class="grid grid-cols-3 gap-4">
                   <div className="col-span-2  my-3 ">
                    <h3 className="text-black font-extrabold ml-4">{project.title}</h3>
                   </div>
 
                 <div className="flex justify-center gap-2 my-3">
                 <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex 
                                    justify-center items-center group">
                                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <Link href={project.live} className="bg-black rounded-md">Live project</Link>
                                    </TooltipContent>
                                </Tooltip>
                          </TooltipProvider>
                 <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-[34px] h-[34px] rounded-full bg-black flex 
                                    justify-center items-center group">
                                    <BsGithub className="text-white text-2xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <Link href={project.github} className="bg-black rounded-md">GitHub</Link>
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
                </div>
            </Tabs>
        </div>
        </>
    )
}

export default Resume
 