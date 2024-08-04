import { Button } from "@mui/material";
import React from "react";
import { FaMapSigns, FaPhoneVolume } from "react-icons/fa";
import { CONSTANTS } from "../../constants";
import { IoIosMail } from "react-icons/io";

const bgImg =
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ContactUs = () => {
  return (
    <div className="w-screen h-fit">
      <div
        className={`h-60 w-screen  flex items-center justify-center overflow-hidden`}
      >
        <img
          src={bgImg}
          className="absolute right-0 top-0 h-80 w-full object-cover z-[-1]"
        />
        <h1 className="text-5xl font-bold text-white left-0 top-0 -translate-x ">
          Contact Us
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 px-36">
        <div className="col-span-1 flex justify-start items-start gap-4 flex-col pr-24">
          <h1 className="text-5xl mt-12 mb-12 font-extrabold text-[#353636] uppercase ">
            contact us
          </h1>
          <input
            type="text"
            placeholder="Your name"
            className="bg-white px-4 py-2 rounded-sm h-10   border border-black w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-white px-4 py-2 rounded-sm h-10   border border-black w-full"
          />
          <textarea
            placeholder="Write your message here..."
            className="bg-white px-4 py-2 rounded-sm h-24 border border-black w-full"
          />
          <Button
            variant="contained"
            color="success"
            size="lg"
            className="w-full h-10 mt-"
          >
            Submit Now
          </Button>
        </div>
        <div className="col-span-1 flex justify-start items-start gap-5 flex-col pr-24">
          <h1 className="text-5xl mt-12 mb-12 font-extrabold text-[#353636] uppercase">
            GET IN TOUCH
          </h1>

          <div className="flex pl-8 gap-4">
            <div className="bg-green-900 rounded-full  h-16 w-20 flex items-center justify-center ">
              <FaMapSigns size={32} className="text-white " />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-medium">Location Address</div>
              <div className="text-lg">{CONSTANTS.ADDRESS}</div>
            </div>
          </div>
          <div className="flex pl-8 gap-4">
            <div className="bg-green-900 rounded-full w-16 h-16 flex items-center justify-center ">
              <IoIosMail size={32} className="text-white aspect-square" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-medium">Email Address</div>
              <div className="text-lg">{CONSTANTS.EMAIL}</div>
            </div>
          </div>
          <div className="flex pl-8 gap-4">
            <div className="bg-green-900 rounded-full w-16 h-16 flex items-center justify-center ">
              <FaPhoneVolume
                size={32}
                className="text-white aspect-square -rotate-45"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-medium">Phone</div>
              <div className="text-lg">{CONSTANTS.PHONE}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 grid grid-cols-6  gap-16 px-36">
        <h1 className="text-5xl mt-12 mb-12  col-span-full  text-center font-extrabold text-[#353636] uppercase ">
          VISIT US ON SOCIAL
        </h1>
        <div className="col-span-1 flex flex-col justify-between"></div>
        <div className="col-span-2 flex flex-col justify-between">
          <img
            src="https://www.travelwholeindia.com/assets/fb.jpeg"
            className="mb-4"
            alt=""
          />
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              window.open(CONSTANTS.SOCIALS.FACEBOOK, "_blank");
            }}
          >
            Follow Us
          </Button>
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          <img
            src="https://www.travelwholeindia.com/assets/insta.jpeg"
            alt=""
            className="mb-4"
          />
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              window.open(CONSTANTS.SOCIALS.INSTAGRAM, "_blank");
            }}
          >
            Follow Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
