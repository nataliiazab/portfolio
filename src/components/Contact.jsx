/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";
//motion animation
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <motion.div
      className="contact mx-auto mt-8 px-7"
      id="contact"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <Headline
        title={"CONTACT"}
        subtitle={
          "Feel free to Contact me by submitting the form below and I will get back tou you as soon as possible"
        }
      />
      <div className="md:w-2/3 mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32">
        <form>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            className="p-5"
          ></input>

          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="p-5"
          ></input>

          <label htmlFor="">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="80"
            rows="10"
            placeholder="Enter Your Message"
            className="p-5 mb-8"
          ></textarea>

          <button className="btn px-14 py-4 shadow-sm">Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
