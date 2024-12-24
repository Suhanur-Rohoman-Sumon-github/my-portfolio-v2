/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Title from "../title/Title";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef(null);

  const sendEmail = (data: any) => {
    emailjs.sendForm("YOUR_SERVICE_ID", "template_xvv4erq", "#myForm").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text, data);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };
  const onSubmit = (data: any) => {
    sendEmail(data);
  };

  return (
    <div className="">
      <Title title="Contact" subTitle="Contact now" />
      <Element className=" " name="contact">
        <div className="">
          <div className="  ">
            <div className="flex  gap-8">
              <div data-aos="zoom-in" data-aos-duration="3000" className=" ">
                <Player
                  autoplay
                  speed={1.5}
                  loop
                  src="https://lottie.host/0dccab9a-8719-480a-9acd-5e2e5252035b/x3nFVy5sG3.json"
                  style={{ height: "600px", width: "600px" }}
                >
                  <Controls
                    buttons={[
                      "play",
                      "repeat",
                      "frame",
                      "debug",
                      "snapshot",
                      "background",
                    ]}
                  />
                </Player>
              </div>

              {/* Contact Form */}
              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                className=" mt-8 w-full  p-5"
              >
                <form ref={form} onSubmit={handleSubmit(onSubmit)} action="">
                  <div className="flex justify-center gap-3">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="name"
                        className="text-[18px] font-medium text-[#787C8B]"
                      >
                        Name <span className="text-[#F51843]">*</span>
                      </label>

                      <input
                        type="text"
                        id="name"
                        {...register("name", {
                          required: true,
                          pattern: /^[A-Za-z\s]+$/i,
                        })}
                        className="outline-none border rounded-lg border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-2 mt-1"
                      />

                      {errors.name?.type === "required" && (
                        <p className="text-red-500 mt-1">Name is required</p>
                      )}
                      {errors.name?.type === "pattern" && (
                        <p className="text-red-500 mt-1">
                          Please enter only valid text
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="email"
                        className="text-[18px] font-medium text-[#787C8B]"
                      >
                        Email <span className="text-[#F51843]">*</span>
                      </label>

                      <input
                        type="text"
                        id="email"
                        {...register("email", {
                          required: true,
                          pattern: /^\S+@\S+\.\S+$/,
                        })}
                        className="outline-none border rounded-lg border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-2 mt-1"
                      />

                      {errors.email?.type === "required" && (
                        <p className="text-red-500 mt-1">Email is required</p>
                      )}
                      {errors.email?.type === "pattern" && (
                        <p className="text-red-500 mt-1">
                          Please enter a valid email
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="message"
                        className="text-[18px] font-medium text-[#787C8B]"
                      >
                        Message <span className="text-[#F51843]">*</span>
                      </label>
                      <textarea
                        aria-label="message"
                        id="message"
                        rows={8}
                        {...register("message", { required: true })}
                        className="outline-none border rounded-lg border-[#69727D] focus:border-[#D8D9E5] w-full p-2 mt-1 "
                      ></textarea>
                      {errors.message?.type === "required" && (
                        <p className="text-red-500 mt-1">Message is required</p>
                      )}
                    </div>
                  </div>
                  <button className="btn-primary mt-4">Send Message</button>
                </form>
                <div className="mt-8">
                  <h3 className="text-[18px] font-medium text-[#787C8B] mb-4">
                    Or reach out to me directly:
                  </h3>
                  <ul className="space-y-4 gird grid-cols-3">
                    <li className="flex items-center gap-3">
                      <FaEnvelope className="text-[#D0ABFF]" />
                      <a
                        href="mailto:sumonsuhanurrohman@gmail.com"
                        className="text-[#787C8B] hover:text-[#F51843]"
                      >
                        sumonsuhanurrohman@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaPhone className="text-[#D0ABFF]" />
                      <span className="text-[#787C8B]">01955704863</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaLinkedin className="text-[#D0ABFF]" />
                      <a
                        href="https://linkedin.com/in/sumonsuhanurrohman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#787C8B] hover:text-[#F51843]"
                      >
                        LinkedIn Profile
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaFacebook className="text-[#D0ABFF]" />
                      <a
                        href="https://facebook.com/sumonsuhanurrohman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#787C8B] hover:text-[#F51843]"
                      >
                        Facebook Profile
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaGithub className="text-[#D0ABFF]" />
                      <a
                        href="https://github.com/sumonsuhanurrohman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#787C8B] hover:text-[#F51843]"
                      >
                        GitHub Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Contact;
