"use client";

import { useState } from "react";
import { createMessage } from "../_libs/actions";
import toast from "react-hot-toast";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("message sent");
    // setIsLoading(true);
    const formData = new FormData(e.target);
    const fullName = formData.get("fullName")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();
    try {
      await createMessage({ fullName, email, message });
      toast.success("Message sent!");
      e.target.reset();
      setIsLoading(false);
    } catch (err) {
      toast.error("Failed to send. Try again.");
      console.log(err);
    }
  }

  return (
    <div
      data-aos="fade-up"
      className="max-w-md mx-auto p-7 my-10  sm:py-9  bg-gradient-to-br from-white via-purple-200 to-purple-300 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 dark:from-[#06102B] dark:via-[#1a1445] dark:to-[#2a1e5c] "
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-slate-300">Bringing your ideas to life.</h2>
      <p className="text-2xl font-semibold mb-2 text-gray-800 dark:text-slate-300"> Lets turn yours vision into reality</p>
      <p className="text-gray-600 dark:text-slate-400 text-[0.95rem] mb-6 font-light">Have a project in mind? Let’s connect!</p>

      <form
        data-aos="fade-up"
        onSubmit={handleSubmit}
        className="space-y-4  bg-gradient-to-br from-white via-white to-gray-100 text-[0.75rem] border shadow border-gray-200 p-6 rounded-lg dark:bg-gradient-to-br dark:from-white/10 dark:via-white/5 dark:to-transparent dark:backdrop-blur-lg dark:border dark:border-white/10 "
      >
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-800 dark:text-slate-400 mb-1">
            Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2  border border-gray-300  dark:border-gray-600 rounded-md focus:outline-none "
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-slate-400 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none "
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-slate-400 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            placeholder="Your Message"
            className="w-full px-4 py-2 border-gray-300 dark:border-gray-600 border rounded-md focus:outline-none "
          ></textarea>
        </div>

        <div
          className=" flex justify-end 
        "
        >
          <button
            type="submit"
            className="border   border-gray-200 dark:border-gray-600 flex items-end text-black/70 dark:text-slate-400 font-medium py-2 px-4 text-[0.8rem] rounded-md  "
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
