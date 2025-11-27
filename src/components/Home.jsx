import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import LinkedInIcon from "../assets/social-media-icons/LinkedIn.svg";
import GitHubIcon from "../assets/social-media-icons/GitHub.svg";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      <Helmet>
        <title>Nataliia Zablotska - Software Engineer</title>
        <meta
          name="description"
          content="Nataliia Zablotska - Software Engineer who delivers results ahead of schedule. 5+ years project management expertise combined with commercial engineering experience. Proven track record with £400k+ projects and high-impact solutions at Bauer Media UK."
        />
      </Helmet>
      <div className="h-screen flex items-center justify-center">
        <motion.div
          className="text-center md:w-1/2"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h1 className="text-primary text-4xl md:text-5xl font-extrabold tracking-wider mb-4 md:mb-8">
            HI👋, I&apos;M NATALIIA ZABLOTSKA
          </h1>
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "Problem Solver",
              1000,
              "Full-Stack Developer",
              1000,
              "JavaScript Developer",
              1000,
              "TypeScript Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1.5rem",
              display: "inline-block",
            }}
            repeat={Infinity}
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-2xl"
          />
          <p className="text-light text-lg md:text-xl my-4 md:my-8 leading-relaxed">
            As a Software Engineer at <strong>Bauer Media Outdoor UK</strong>, I
            specialise in full-stack development using Next.js, TypeScript, and
            NestJS to build an internal tool for one of the UK&apos;s leading
            Out of Home media companies
            <br />
            <br />I bring a unique combination of{" "}
            <strong>5+ years of project management expertise</strong> together
            with{" "}
            <strong>
              1+ year of commercial software engineering experience
            </strong>{" "}
            and <strong>2+ years of production-level development work</strong>.
            I am skilled at delivering projects on time, within budget, and
            exceeding expectations (where possible)
          </p>

          <p className="text-light text-lg md:text-xl mb-8 leading-relaxed">
            I thrive working with organisations that foster excellent company
            culture, utilise modern technology stacks, and offer genuine
            opportunities for professional growth and continuous learning
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="btn py-3 px-8 md:py-4 md:px-12 bg-gradient-to-r from-purple-400 to-pink-600 text-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 font-semibold"
            >
              See My Impact 🚀
            </a>
            <a
              href="#contact"
              className="btn py-3 px-8 md:py-4 md:px-12 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold"
            >
              Let&apos;s Connect 💬
            </a>
          </div>
        </motion.div>
      </div>

      <div className="bg-white w-16 md:w-20 rounded py-1 px-2 absolute left-0 top-32 md:top-48 hidden md:block">
        <div className="py-1">
          <a
            href="https://www.linkedin.com/in/nataliia-zablotska/"
            className="p-2 md:p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              className="w-8 md:w-10 h-8 md:h-10"
            />
          </a>
        </div>
        <div className="py-1">
          <a
            href="https://github.com/nataliiazab"
            className="flex items-center justify-center p-2 md:p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl transition-transform transform-gpu duration-300 ease-in-out"
          >
            <img
              src={GitHubIcon}
              alt="GitHub"
              className="w-6 md:w-8 h-6 md:h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
