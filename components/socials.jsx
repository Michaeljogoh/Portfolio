import Link from "next/link";

import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"


const socials = [
    {
        icon:<FaGithub />,
        path:"https://github.com/Michaeljogoh"
    },
    {
        icon:<FaLinkedin />,
        path:"https://www.linkedin.com/in/michael-jogoh-257778222/"
    },
    {
        icon:<FaTwitter />,
        path:"https://x.com/Mykael_Jo"
    }
]



const  Socials = ({containerStyles, iconStyles}) => {
    return (
        <>
         <div className={containerStyles}>
            {socials.map((item, index) =>{
                return (
                 <Link key={index}  href={item.path} passHref target="_blank" rel="noopener noreferrer" className={iconStyles}>{item.icon}</Link>
                )
            })}

         </div>

        </>
    )
}

export default Socials
