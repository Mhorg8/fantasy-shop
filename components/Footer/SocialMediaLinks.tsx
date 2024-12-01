"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
interface SocialMedia {
  logo: IconType;
  path: string;
  color: string;
}
const socialMediaLinks: SocialMedia[] = [
  {
    logo: FaInstagram,
    path: "https://www.instagram.com",
    color: "text-soft-coral",
  },
  { logo: FaTelegram, path: "https://www.telegram.com", color: "text-blue" },
  { logo: FaYoutube, path: "https://www.youtube.com", color: "text-red-400" },
  { logo: FaFacebook, path: "https://www.facebook.com", color: "text-blue/80" },
];

const SocialMediaLinks = () => {
  const router = useRouter();
  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex items-center gap-x-5">
      {socialMediaLinks.map((item) => (
        <motion.button
          onClick={() => handleClick(item.path)}
          key={item.path}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2 }}
        >
          {item.logo && (
            <item.logo size={28} className={`${item.color && item.color}`} />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
