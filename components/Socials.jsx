import Link from "next/link";
import {FaFacebookF, FaGithub, FaLinkedin, FaSkype} from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub/>,
        path: "https://github.com/mdridoykhan138",
    },
    {
        icon: <FaLinkedin/>,
        path: "https://www.linkedin.com/in/mdridoykhan138/",
    },
    {
        icon: <FaFacebookF/>,
        path: "https://www.facebook.com/mdridoykhan1380/",
    },
    {
        icon: <FaSkype/>,
        path: "skype:live:.cid.65a583d09d0adda1?chat",
    },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link href={item.path} key={index} className={iconStyles} target="_blank">
                    <span>{item.icon}</span>
                </Link>
            );
        })}
    </div>
  );
};

export default Socials;