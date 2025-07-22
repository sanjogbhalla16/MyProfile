import { icons } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub></FaGithub>, path: "https://github.com/sanjogbhalla16" },
  {
    icon: <FaLinkedinIn></FaLinkedinIn>,
    path: "https://www.linkedin.com/in/sanjog-bhalla-2214571b2/",
  },
  { icon: <FaTwitter></FaTwitter>, path: "https://x.com/bhalla_sanjog" },
];

interface SocialProps {
  containerStyle?: string;
  iconStyles?: string;
}

const Social = ({ containerStyle, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className="iconStyle">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
