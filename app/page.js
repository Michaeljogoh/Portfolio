

import {FiDownload} from "react-icons/fi";
import Photo from "@/components/photo";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import Socials from "@/components/socials";


export default function Home() {
  return (
    <>
 <section className="h-full">
   <div className="container mx-auto h-full">
     <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Engineer</span>
          <h1 className="h1 mb-6">Hello I 'm <br/> <span className="text-accent">Michael Jogoh</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80 ">
             I am proficient in various programming languages and technologies.
          </p>
           {/* CV  */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
            <a href="michael-jogoh.pdf" download="Michael-Jogoh-Resume">
            <span>Download CV</span>
            </a>
            <FiDownload className="text-xl" />
            </Button>
               {/* Social */}
               <div className="mb-8 xl:mb-0">
                <Socials 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                items-center text-accent text-base 
                hover:bg-accent hover:text-primary hover: transition-all duration-500" 
                />
               </div> 
           </div>
          </div>
          {/* Photo */}
         <div className="order-1 xl:order-none mb-8 xl:mb-0">
         <Photo />
         </div>
     </div>
   <Stats />
   </div>
 </section>
 </>
  );
}
