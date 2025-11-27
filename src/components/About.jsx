import { Helmet } from "react-helmet";
import Headline from "../shared/Headline";
import skills from "../../public/skills.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 md:py-8 px-7" id="about">
      <Helmet>
        <title>Nataliia Zablotska</title>
        <meta name="description" content="Learn about Nataliia" />
      </Helmet>
      <Headline
        title="ABOUT ME"
        subtitle="This is a brief overview of my background and tech skills."
      />

      <div className="flex flex-col md:flex-row items-start justify-start">
        <motion.div
          className="md:w-1/2 my-8"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-2xl font-bold mb-8">Get to know me!</h1>
          <div className="md:w-10/12 text-lg text-[#666] mb-8">
            <p className="mb-5">
              I&apos;m Nataliia, a <strong>Software Engineer</strong> currently
              working at <strong>Bauer Media Outdoor UK</strong>, one of the
              UK&apos;s leading Out of Home media companies. I specialize in
              building scalable web applications using modern technologies like{" "}
              <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>NestJS</strong>.
            </p>

            <p className="mb-5">
              In my current role, I contributed to major workstreams, including
              building a platform for enforcing hundreds of advertising
              restrictions and helping deliver a key commercial feature one
              months ahead of schedule. I integrated Salesforce and other
              systems with thorough testing and ran load tests that helped
              reduce processing times from 30+ seconds to under 5. I also
              improved team effectiveness by onboarding new colleagues, writing
              clear documentation, and representing the team across the
              business.
            </p>

            <p className="mb-5">
              Beyond commercial work, I&apos;m passionate about{" "}
              <strong>social impact technology</strong>. I&apos;ve contributed
              to open-source projects supporting Ukrainian refugees and
              empowering individuals from disadvantaged backgrounds through{" "}
              <strong>CodeYourFuture</strong>. I&apos;m particularly proud of
              leading a project that trained 80+ Ukrainian veterans in
              cybersecurity -{" "}
              <a
                href="https://www.crdfglobal.org/insights/cybersecurity-gives-me-opportunity-continue-path-defender/"
                className="text-secondary font-bold underline"
              >
                CyberDefenders
              </a>
              .
            </p>

            <p className="mb-5">
              My journey into tech began after a successful career in{" "}
              <strong>project management</strong> across cybersecurity,
              education, and humanitarian sectors. This background taught me how
              to get things done on time and within budget - skills that serve
              me well in fast-paced development environments.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 my-8"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-2xl font-bold mb-8">My Skills</h1>
          <div className="flex flex-wrap gap-3 md:w-10/12">
            {skills.map((skill) => (
              <p
                key={skill.id}
                className="bg-slate-200 py-2 px-4 rounded text-sm uppercase font-semibold text-gray-700"
              >
                {skill.title}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
