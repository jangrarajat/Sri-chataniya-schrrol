import React from "react";
import {   FacebookIcon,   InstagramIcon,  MessageCircleCodeIcon,   YoutubeIcon } from "lucide-react";

const QuickContactSidebar = () => {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[99999] hidden md:block ">
            <ul className="list-none m-0 p-0 ">
                
                {/* WhatsApp - Quick Contact */}
                <li className="relative w-[53px] m-0 p-0 cursor-pointer text-white block  ">
                    <div className="bg-gradient-to-b from-red-600 to-red-700 w-[53px] h-[53px] flex flex-col items-center justify-center rounded-tl-2xl">
                        <a
                            href="https://wa.me/919982451367?text=Hello%20Sri%20Chetanaya%20Team"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-yellow-300 transition flex flex-col items-center"
                            title="Chat on WhatsApp"
                        >
                            <MessageCircleCodeIcon size={24}/>
                            <span className="text-[8px] font-medium tracking-wide mt-0.5">Quick</span>
                            <span className="text-[8px] font-medium tracking-wide -mt-0.5">Contact</span>
                        </a>
                    </div>
                </li>

                {/* Facebook */}
                <li className="relative w-[53px] m-0 p-0 cursor-pointer text-white block">
                    <a
                        href="https://www.facebook.com/share/18fDsdQu5V/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1877F2] hover:bg-[#0f62e0] w-[53px] h-[53px] flex items-center justify-center text-white transition"
                    >
                        <FacebookIcon size={24}/>
                    </a>
                </li>

                {/* Instagram */}
                <li className="relative w-[53px] m-0 p-0 cursor-pointer text-white block">
                    <a
                        href="https://www.instagram.com/srichaitanyakotputli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-[#FCAF45] via-[#F56040] to-[#C13584] w-[53px] h-[53px] flex items-center justify-center text-white hover:opacity-80 transition"
                    >
                        <InstagramIcon size={24}/>
                    </a>
                </li>

                {/* YouTube */}
                <li className="relative w-[53px] m-0 p-0 cursor-pointer text-white block">
                    <a
                        href="https://www.youtube.com/@srichaitanyakotputli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF0000] hover:bg-[#cc0000] w-[53px] h-[53px] flex items-center justify-center text-white transition  rounded-bl-2xl"
                    >
                        <YoutubeIcon size={24}/>
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default QuickContactSidebar;