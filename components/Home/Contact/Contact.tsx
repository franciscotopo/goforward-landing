"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import AnimatedTitle from "../../../hooks/AnimatedTitle";

const Contact = () => {
  const [state, handleSubmit] = useForm("xblkodaa");

  return (
    <section id="contact" className="scroll-mt-30">
      <div className="relative w-full bg-gray-100 py-16 px-4 sm:px-10 lg:px-20">
        <AnimatedTitle text="Contact Us" textColor="text-black" />

        <div className="mt-35 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-8 mt-5">
            <div>
              <h3 className="text-6xl font-anton text-orange">Based In</h3>
              <p className="mt-2 text-3xl text-gray-700"> Miami, Florida</p>
            </div>
            <div>
              <h3 className="text-6xl font-anton text-black">Email Us</h3>
              <p className="mt-2 text-3xl text-gray-700">info@goforwardsports.net</p>
            </div>
            <div>
              <h3 className="text-6xl font-anton text-black">Call Us</h3>
              <p className="mt-2 text-3xl text-gray-700">+54 0 12 3456 7890</p>
            </div>
          </div>

          {/* Right: Form */}
          <form
            action="https://formspree.io/f/xblkodaa"
            method="POST"
            className="bg-white p-6 rounded-xl shadow-md space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="input"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input w-full"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="input w-full"
              maxLength={600}
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="btn-primary"
            >
              Send
            </button>
            {state.succeeded && (
              <div className="mb-4 text-orange-400 font-bold">
                <p>Message received! We`ll keep in touch.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
