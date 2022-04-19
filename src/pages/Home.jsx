import React from "react";
import Layout from "../components/Layout";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ProjectsData from "../Projects/projectsData";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 2000,
});
function Home() {
  return (
    <Layout>
      {/* Introduction Section */}
      <div>
        <div className="h-screen bg-theme">
          <div
            className="bg-theme grid md:grid-cols-1 grid-cols-2 h-screen items-center 
          border-4 border-white transform  rotate-12 md:rotate-0 md:border-0 mx-10"
          >
            <div className="h-1/2 sm:h-96" data-aos="slide-down">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_gnb0jsok.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="font-bold text-white md:px-5 sm:ml-14">
              <h1 className="text-7xl md:text-4xl" data-aos="slide-right">
                Hello, I am <b className="text-blue-500">ANDREW</b>
              </h1>
              <h1
                className="text-red-500 text-4xl md:text-xl"
                data-aos="slide-left"
              >
                FrontEnd <b className="text-blue-500">Developer</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Languages */}
      <div className="mt-20">
        <h1 className="text-4xl text-blue-800 font-bold text-center my-8">
          Tech Use
        </h1>
        <div className="grid md:grid-cols-1 grid-cols-3" data-aos="slide-up">
          <FaReact
            size={160}
            color="cyan"
            className="w-full text-center mt-20 sm:h-16"
          />
          <FaJs
            size={160}
            color="orange"
            className="w-full text-center mt-20 animate-bounce sm:h-16"
          />
          <SiTailwindcss
            size={160}
            color="green"
            className="w-full text-center mt-20 sm:h-16"
          />
          <FaBootstrap
            size={160}
            color="purple"
            className="w-full text-center mt-20 animate-bounce sm:h-16"
          />
          <FaCss3
            size={160}
            color="blue"
            className="w-full text-center mt-20 sm:h-16"
          />
          <FaHtml5
            size={160}
            color="red"
            className="w-full text-center mt-20 animate-bounce sm:h-16"
          />
        </div>
      </div>

      {/* React buff */}
      <div className="my-20 bg-theme">
        <div className="bg-theme py-12 border-4 border-white transform -rotate-6 md:rotate-0 md:border-0 mx-10">
          <h1 className="text-white font-bold text-4xl text-center py-12 rotate-6 md:rotate-0">
            My language is <b className=" text-blue-500">Java</b>
            <b className=" text-red-500">Script</b>
          </h1>

          <div className="h-96 mb-6 rotate-6 md:rotate-0" data-aos="zoom">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_aptscmnx.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>

          <p className="text-4xl text-white rotate-6 text-center mr-16 md:rotate-0 md:text-4xl md:ml-8 sm:ml-12">
            and <b className="text-blue-500">Frontend</b>
            <b className=" text-red-500"> is</b> what{" "}
            <b className="text-violet-500">I</b>{" "}
            <b className=" text-violet-500">do</b>
          </p>
        </div>
      </div>

      {/* Dev info */}

      <div>
        <h1 className="text-4xl text-blue-500 text-center mt-6">
          But who is Andrew?
        </h1>

        <div className="h-screen relative" data-aos="slide-right">
          <div className="h-full">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_uchndyff.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-left text-blue-500">
              Hi , Hello World. .
              <hr />
              <pre className="text-xl md:text-sm text-blue-500 my-5 text-pops">
                {JSON.stringify(
                  {
                    name: "Andrew Salvador",
                    age: null,
                    gender: "Male",
                    country: "Philippines",
                  },
                  null,
                  2
                )}
              </pre>
            </h1>
            <h1 className="text-xl font-bold font-pops text-blue-500 mb-5">
              Current Tech Stacks:
            </h1>
            <h3 className="font-pops text-blue-500 sm:text-xs">
              {" "}
              HTML5, CSS3, BOOTSTRAP5, JAVASCRIPT,
            </h3>
            <h3 className="font-pops text-blue-500 mb-5 sm:text-xs">
              {" "}
              TAILWIND, REACT-REDUX, REACT JS
            </h3>
            <a href="/contact" className="flex justify-center font-pops font-bold text-white bg-blue-500 p-1 border border-white hover:bg-blue-600">Contact me</a>

          </div>
        </div>
      </div>



      <h1 className="text-4xl font-bold text-left text-blue-500 text-center mt-6">
        Projects
      </h1>

      <div className="grid mt-20 md:grid-cols-1 grid-cols-2 item-center pb-28 justify-center gap-10 mx-20 md:5">
        {ProjectsData.map((project) => {
          return (
            <a href={project.link} key={project.image}>
              <div>
                <div className="relative m-10 border-2 text-center border-theme">
                  <img 
                    src={project.image}
                    height="300"
                    width="300"
                    className="w-full h-96 xl-96 lg:h-52 md:h-52 sm:h-32"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center flex-col cursor-pointer opacity-0 bg-theme hover:opacity-60"
                    onClick={project.link}
                  >
                    <h1 className="text-3xl font-semi-bold text-white">
                      {project.title}
                    </h1>
                  </div>
                </div>
                <div>
                  <h2 className="flex justify-center m-5 text-2xl font-bold">
                    {project.title}
                  </h2>
                  <p className="">{project.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </Layout>
  );
}

export default Home;
