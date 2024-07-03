"use client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";
import projectImage from "@/public/ppo.png"
import WorkSlideBtn from "@/components/workSlideBtn";
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';




const projects = [
    {
      num:"01",
      category:"frontend",
      title:"project 1",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dolore",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:projectImage,
      live:"",
      github:""

    },
    {
      num:"02",
      category:"IAAS",
      title:"project 1",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dolore",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:projectImage,
      live:"",
      github:""

    },
    {
      num:"03",
      category:"Saas",
      title:"project 1",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dolore",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:projectImage,
      live:"",
      github:""

    },
    {
      num:"04",
      category:"full stack project",
      title:"project 1",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dolore",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:projectImage,
      live:"",
      github:""

    },
    {
      num:"05",
      category:"Graphql api",
      title:"project 1",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dolore",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:projectImage,
      live:"",
      github:""

    },
    {
      num:"06",
      category:"full stack",
      title:"project 1",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium dolore",
      stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
      image:projectImage,
      live:"",
      github:""

    }
]


const Work = () => {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) =>{
          const currentIndex = swiper.activeIndex;
          setProject(projects[currentIndex]);
    }

    useEffect(() => {
      const wow = new WOW.WOW({live: false});
      wow.init();
      
    }, []);
    
   
    
    return (
      <>
           <div className="wow fadeInUp" data-wow-delay="1.0s">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nisi itaque, perferendis facilis repudiandae maxime veritatis totam vero
          laboriosam voluptatibus ipsum sit id quaerat voluptatum, facere pariatur
          dolores consectetur reiciendis impedit alias, deserunt iste debitis amet velit.
          Facere consectetur temporibus esse, magni iure cumque ut dignissimos. Doloribus
          maxime voluptatibus veniam illo vero repellendus expedita alias fugiat impedit,
          praesentium voluptate, molestiae ab. Vero earum excepturi asperiores minima atque
          tempore dolores veritatis numquam quisquam officiis, reiciendis eius eveniet pariatur
          odio temporibus delectus praesentium et cupiditate quaerat rerum animi tenetur? Nisi
          modi reiciendis ipsum provident vitae obcaecati odio minus vel fuga unde veniam deleniti
          quaerat vero tenetur, voluptate incidunt perferendis ut animi ab sit mollitia. Deleniti
          nulla magnam harum ad expedita impedit consequuntur ex libero inventore fuga, distinctio
          nisi, ducimus voluptas! Natus totam expedita, quisquam dicta recusandae ducimus voluptates
          unde asperiores eius rem dolorum cumque eligendi perferendis impedit accusantium! Ducimus
          dolores doloribus in hic doloremque dignissimos. Dolorum at incidunt, veritatis nisi rerum
          vel molestias odit harum ad in labore inventore, illum sapiente sit laborum possimus qui
          debitis dolores tempora ipsam ullam odio! Ducimus itaque hic est explicabo reiciendis
          assumenda soluta maxime quasi labore, aliquid consequuntur eos molestiae ipsum dolorem
          veritatis saepe adipisci placeat. Eum.
        </div>
           <div className="wow wow bounceInUp" data-wow-delay="2.0s">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nisi itaque, perferendis facilis repudiandae maxime veritatis totam vero
          laboriosam voluptatibus ipsum sit id quaerat voluptatum, facere pariatur
          dolores consectetur reiciendis impedit alias, deserunt iste debitis amet velit.
          Facere consectetur temporibus esse, magni iure cumque ut dignissimos. Doloribus
          maxime voluptatibus veniam illo vero repellendus expedita alias fugiat impedit,
          praesentium voluptate, molestiae ab. Vero earum excepturi asperiores minima atque
          tempore dolores veritatis numquam quisquam officiis, reiciendis eius eveniet pariatur
          odio temporibus delectus praesentium et cupiditate quaerat rerum animi tenetur? Nisi
          modi reiciendis ipsum provident vitae obcaecati odio minus vel fuga unde veniam deleniti
          quaerat vero tenetur, voluptate incidunt perferendis ut animi ab sit mollitia. Deleniti
          nulla magnam harum ad expedita impedit consequuntur ex libero inventore fuga, distinctio
          nisi, ducimus voluptas! Natus totam expedita, quisquam dicta recusandae ducimus voluptates
          unde asperiores eius rem dolorum cumque eligendi perferendis impedit accusantium! Ducimus
          dolores doloribus in hic doloremque dignissimos. Dolorum at incidunt, veritatis nisi rerum
          vel molestias odit harum ad in labore inventore, illum sapiente sit laborum possimus qui
          debitis dolores tempora ipsam ullam odio! Ducimus itaque hic est explicabo reiciendis
          assumenda soluta maxime quasi labore, aliquid consequuntur eos molestiae ipsum dolorem
          veritatis saepe adipisci placeat. Eum.
        </div>
        <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:1.5, duration: 0.3, ease:"easeIn"}}} 
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0" 
         >
           <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                        {project.category} project
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
                            <Link href={project.live}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex 
                                    justify-center items-center group">
                                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Live project</p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </Link>
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
                                    <div className="relative w-full h-full ">
                                        <Image src={project.image} priority fill className="object-cover" alt="Project image" />
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
        {/*  */}

        <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:1.5, duration: 0.3, ease:"easeIn"}}} 
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0" 
         >
           <div className="container mx-auto wow fadeInUp">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                        {project.category} project
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
                            <Link href={project.live}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex 
                                    justify-center items-center group">
                                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Live project</p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </Link>
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
                                    <div className="relative w-full h-full ">
                                        <Image src={project.image} priority fill className="object-cover" alt="Project image" />
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
