import React from "react";
import { FaGithub ,FaLinkedin ,FaInstagram  } from "react-icons/fa";

function TeamMemberCard() {
  return (
    <div className="w-[370px] h-[564px]">
      <div className="w-full bg-gray-100 flex items-center justify-center">
        <div className="w-[326px] h-[392px]">
          <img className="w-full h-full" src="/images/Admin1.png" />
        </div>
      </div>
      <div className="mt-3">
        <h5 className="text-xl font-bold">Mohammad Reza Momeneh</h5>
        <p className="my-2">Front-End Developer</p>
        <div className="flex justify-start items-center gap-2">
          <FaGithub className="w-6 h-6" />
          <FaLinkedin className="w-6 h-6" />
          <FaInstagram className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
