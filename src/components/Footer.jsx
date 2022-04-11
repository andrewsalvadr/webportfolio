import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="h-44 xl:lg:h-24 w-auto md:h-24 sm:h-16 overflow-y-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3ded97"
          fill-opacity="1"
          d="M0,320L0,96L130.9,96L130.9,192L261.8,192L261.8,96L392.7,96L392.7,32L523.6,32L523.6,256L654.5,256L654.5,160L785.5,160L785.5,224L916.4,224L916.4,96L1047.3,96L1047.3,64L1178.2,64L1178.2,128L1309.1,128L1309.1,96L1440,96L1440,320L1309.1,320L1309.1,320L1178.2,320L1178.2,320L1047.3,320L1047.3,320L916.4,320L916.4,320L785.5,320L785.5,320L654.5,320L654.5,320L523.6,320L523.6,320L392.7,320L392.7,320L261.8,320L261.8,320L130.9,320L130.9,320L0,320L0,320Z"
        ></path>
      </svg>
      </div>
      <div className="bg-theme w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="p-10 font-pops text-center">
            <p className="text-white pb-5">Designed & Developed by</p>
            <div className="h-1 border-2 border-white border-dotted"></div>

            <div className="flex text-white w-full justify-between py-3 text-4xl">
              <FaFacebook />
              <FaMailBulk />
              <FaLinkedin />
              <FaGithub />
            </div>

            <div className="h-1 border-2 border-white border-dotted"></div>
            <p className="text-white py-2">Andrew V. Salvador</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
