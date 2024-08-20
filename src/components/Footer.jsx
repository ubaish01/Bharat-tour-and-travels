import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import clsx from "clsx";
import { CONSTANTS } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-black  w-full text-white py-24 mt-48 footer px-6 sm:px-20 md:24 relative">
        <div className="flex  md:flex-row  flex-col ">
          <div className=" flex flex-col items-start sm:px-6 pb-8  justify-start gap-2 md:w-1/3  w-full">
            <div className="flex leading-[0px] text-[26px] font-bold items-center justify-center gap-1 relative text-white">
              {/* <img className="w-8 ml-3" src={logo} alt="logo" /> */}
              <div className="text-xl font-bold">
                <span className="text-purple-800">Bharat</span>Tour
                <span className="text-purple-800">And</span>Travel
              </div>
            </div>
            <div className="text-base">
              Just Dream your tour leave rest of the things for us.
            </div>
          </div>
          <div className=" flex flex-col items-start sm:px-6 pb-8  justify-start gap-2 md:w-1/3  w-full">
            <h3 className="text-xl font-semibold">Legal</h3>
            <div className="flex text-sm flex-col gap-1 items-start justify-start">
              <Link to="/" className="hover:text-purple-600 ">
                About us
              </Link>
              <Link to="/" className="hover:text-purple-600 ">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-purple-600 ">
                Cookie Policy
              </Link>
              <Link to="/" className="hover:text-purple-600 ">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start sm:px-6 pb-8  justify-start gap-2 md:w-1/3  w-full">
            <h3 className="text-xl font-semibold">Social</h3>
            <div className="flex text-sm flex-col gap-1 items-start justify-start">
              {CONSTANTS.SOCIALS?.INSTAGRAM ? (
                <Link
                  className="hover:text-purple-600 flex items-center gap-1"
                  target="_blank"
                  to={CONSTANTS.SOCIALS.INSTAGRAM}
                >
                  <FaInstagram />
                  Instagram
                </Link>
              ) : (
                <></>
              )}

              {CONSTANTS.SOCIALS?.FACEBOOK ? (
                <Link
                  className="hover:text-purple-600 flex items-center gap-1"
                  target="_blank"
                  to={CONSTANTS.SOCIALS.FACEBOOK}
                >
                  <FaFacebook />
                  Facebook
                </Link>
              ) : (
                <></>
              )}

              {CONSTANTS.SOCIALS?.LINKEDIN ? (
                <Link
                  className="hover:text-purple-600 flex items-center gap-1"
                  target="_blank"
                  to={CONSTANTS.SOCIALS.LINKEDIN}
                >
                  <FaLinkedin />
                  LinkedIn
                </Link>
              ) : (
                <></>
              )}

              {CONSTANTS.SOCIALS?.TWITTER ? (
                <Link
                  className="hover:text-purple-600 flex items-center gap-1"
                  target="_blank"
                  to={CONSTANTS.SOCIALS.TWITTER}
                >
                  <FaTwitter />
                  Twitter
                </Link>
              ) : (
                <></>
              )}

              {CONSTANTS.SOCIALS?.YOUTUBE ? (
                <Link
                  className="hover:text-purple-600 flex items-center gap-1"
                  target="_blank"
                  to={CONSTANTS.SOCIALS.YOUTUBE}
                >
                  <FaYoutube />
                  Youtube
                </Link>
              ) : (
                <></>
              )}
              {CONSTANTS.SOCIALS?.DISCORD ? (
                <Link
                  className="hover:text-purple-600 flex items-center gap-1"
                  target="_blank"
                  to={CONSTANTS.SOCIALS.DISCORD}
                >
                  <FaDiscord />
                  Discord
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start sm:px-6 pb-8  justify-start gap-2 md:w-1/3  w-full">
            <h3 className="text-xl font-semibold">BharatTourAndTravel</h3>
            <div className="flex text-sm flex-col gap-1 items-start justify-start">
              <h3 className="text-base font-semibold capitalize">
                registered office
              </h3>

              <div className="flex flex-col">
                {CONSTANTS.ADDRESS?.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>

              <div>Email: {CONSTANTS.EMAIL}</div>
              <div>Telephone No: {CONSTANTS.PHONE}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-100 py-2 text-center md:flex hidden items-center justify-center text-sm bg-red-500">
        Copyright © {new Date().getFullYear()} BharatTourAndTravel All Rights
        Reserved | Design & Developed by :{" "}
        <Link
          target="_blank"
          to="https://ubaishmalik.in"
          className="font-bold ml-1"
        >
          Ubaish Malik
        </Link>
      </div>
      <div className="text-gray-100 md:hidden  py-2 text-center flex items-center justify-center text-sm bg-red-500">
        Design & Developed by :{" "}
        <Link
          target="_blank"
          to="https://ubaishmalik.in"
          className="font-bold ml-1"
        >
          Ubaish Malik
        </Link>
      </div>
    </div>
  );
};

export default Footer;
