import Image from "next/image";
import { motion } from "framer-motion";
// component
import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shapes */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[488px] flex items-end justify-center">
                <Image
                  src="/assets/about/ridoy.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt=""
                />
              </div>
              {/* rotating shape */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                <motion.div 
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity
                  }}
                >
                  <Image 
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt=""
                  />
                </motion.div>
                <div className="absolute text-center text-white">
                  <div className="text-4xl font-bold leading-none">3+</div>
                  <div className="leading-none text-center">Years of <br /> Experience</div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text="My Name is Md Ridoy Khan" textStyles="h2 mb-2"/>
              <p className="text-lg">Frontend Developer</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">I create visually stunning and functional website using modern frontend technologies with react and next js. Explore my work to see how i combine creativity with technical skill to deliver exception digital expperiences.</p>
            {/* info items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-max mx-auto xl:mx-0 items-center xl:place-items-stretch place-items-center">
              {/* item 1 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Age</div>
                <p>26 Years</p>
              </div>
              {/* item 2 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Born in</div>
                <p>Dhaka, Bangladesh</p>
              </div>
              {/* item 3 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Phone</div>
                <p>+8801314623970</p>
              </div>
              {/* item 4 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Email</div>
                <p>ridoykhan.cse.web@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;