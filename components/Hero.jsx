"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
// RotatingShape components import here 
import RotatingShape from "./RotatingShape";
// header components import here
import Header from "./Header";
import Stats from "./Stats/Stats";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white" id="home">
        {/* header section area here */}
        <Header/>
        {/* hero section area here */}
        <div className="container mx-auto h-full">
          <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
            <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
              <span className="text-accent">I Build And</span> Design Powerful
              <TypeAnimation 
                preRenderFirstString={true}
                sequence={["HTML5", 2000, "CSS3", 2000, "Sass", 2000, "Less", 2000, "Bootstrap", 2000, "Tailwind", 2000, "ReactJs", 2000, "NextJs", 2000, "Elementor", 2000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                cursor={false}
                className="ml-2 xl:ml-4"
              />
            </h1>
            <p className="lead max-w-[476px] mb-7">Delivering powerful, custom website that blend aesthetics with performance</p>
            <div className="flex flex-col md:flex-row gap-5 mb-8">
              <ScrollLink to="contact" smooth>
                <button className="btn btn-accent capitalize">contact me</button>
              </ScrollLink>
              <Link href="/assets/cv/Md-Ridoy-Khan.pdf" target="_blank" alt="Md-Ridoy-Khan-Resume" rel="noopener notrferrer">
              <button className="btn btn-accent capitalize">Download Resume</button></Link>
            </div>
            {/* stats */}
            <Stats/>
          </div>
          {/* image */}
          <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
            <div className="absolute w-[558px] h-[642px] bottom-0 left-[6.5vw] z-40">
              <Image
                src="/assets/hero/dev.png"
                alt="Dev Photo"
                fill
                quality="100"
                priority
                className="object-contain"
              />
            </div>
            {/* arrow shape */}
            <div className="hidden xl:flex absolute top-48 left-[4vw]" data-scroll data-scroll-speed="0.05">
              <Image 
                src="assets/hero/arrow.svg"
                width={160}
                height={160}
                alt=""
              />
            </div>
            {/* shape 1 */}
            <div className="absolute top-[600px] left-[3vw]" data-scroll data-scroll-speed="0.2">
              <RotatingShape 
                content={
                  <Image 
                    src="assets/hero/shape-1.svg"
                    width={38}
                    height={38}
                    alt=""
                  />
                }
                direction="left"
                duration={6}
              />
            </div>
            {/* shape 2 */}
            <div className="absolute top-[240px] left-[33vw]" data-scroll data-scroll-speed="0.1">
              <RotatingShape 
                content={
                  <Image 
                    src="assets/hero/shape-2.svg"
                    width={34}
                    height={34}
                    alt=""
                  />
                }
                direction="right"
                duration={5}
              />
            </div>
            {/* shape 3 */}
            <div className="absolute top-[480px] left-[40vw]" data-scroll data-scroll-speed="0.08">
              <RotatingShape 
                content={
                  <Image 
                    src="assets/hero/shape-3.svg"
                    width={36}
                    height={36}
                    alt=""
                  />
                }
                direction="left"
                duration={7}
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;