"use client";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'
export default function SocialBar() {
    const socials = [
        { name: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/MendozaDGE/" },
        { name: "Instagram", icon: <FaInstagram />, url: "https://x.com/MzaDGE" },
        { name: "Youtube", icon: <FaYoutube />, url: "https://www.youtube.com/@PortalEducativoDGE" },
        { name: "X", icon: <FaXTwitter />, url: "https://x.com/MzaDGE" },
    ];

    return (
        <div className="flex justify-center gap-4  p-4">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:text-[rgb(213,186,140)] transition-colors text-2xl"
                    title={social.name}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
