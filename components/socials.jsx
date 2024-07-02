import Link from "next/link";

import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"


const socials = [
    {
        icon:<FaGithub />,
        path:""
    },
    {
        icon:<FaLinkedin />,
        path:""
    },
    {
        icon:<FaTwitter />,
        path:""
    }
]


const  Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className="flex gap-6">
            {socials.map((social, index) =>{
                <Link href={social.path} key={index} className="w-9 h-9 border border-accent rounded-full flex justify-center items-center 
                text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">{social.icon}</Link>
            }
            )}
         
        </div>
    )
}

export default Socials
