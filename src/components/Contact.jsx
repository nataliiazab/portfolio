import React from "react";
import Headline from "../shared/Headline";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xaygopzr");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (await handleSubmit(event)) {
      // Form submission was successful
      alert("Thank you for submitting!");
    }
  };

  return (
    <motion.div
      className="contact mx-auto mt-8 px-7"
      id="contact"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Headline
        title="CONTACT"
        subtitle="I am always happy to hear from you. Please get in touch by submitting the form below if you have any questions."
      />
      <div className="md:w-2/3 mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            className="p-5"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="p-5"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="80"
            rows="10"
            placeholder="Enter Your Message"
            className="p-5 mb-8"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          {state.succeeded ? (
            <p className="text-indigo-600">Thank you for your message!</p>
          ) : (
            <button
              className="btn px-14 py-4 shadow-sm transition-transform duration-300 transform uppercase font-semibold text-white bg-[#7843e9] border rounded-lg text-lg"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
