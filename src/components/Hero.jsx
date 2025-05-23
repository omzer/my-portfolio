import { motion } from 'framer-motion';
import { styles } from '../styles';
import { omar, bwmap, worldmap } from '../assets';

const Hero = () => {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px]
          lg:top-[150px] xl:top-[250px] ${styles.paddingX}
          max-w-[90%] mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I&apos;m
            </h1>
            <div
              className="sm:text-battleGray sm:text-[90px]
              text-eerieBlack text-[50px] font-mova
              font-extrabold uppercase flex items-center gap-4 mt-2">
              Omar Sabri
              <motion.div
                className="relative w-32 h-32 cursor-pointer"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute w-full h-full"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={omar}
                    alt="omar"
                    className="w-32 h-32 rounded-full object-cover border-2 border-battleGray"
                  />
                </motion.div>
                <motion.div
                  className="absolute w-full h-full flex items-center justify-center bg-battleGray rounded-full border-2 border-battleGray"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <span className="text-6xl">🧑‍💻</span>
                </motion.div>
              </motion.div>
            </div>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              <b>Senior Frontend Software Engineer</b> with a passion for building scalable and
              efficient systems ({yearsOfExperience}+ years of experience). <br className="sm:block hidden" />
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
