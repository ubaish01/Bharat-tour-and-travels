import { Button } from "@mui/material";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CONSTANTS } from "../../constants";

const Header = () => {
  return (
    <div className="w-screen text-gray-white pt-4">
      <div className="w-full  flex items-center justify-between lg:px-52 md:px-12 px-6 md:text-base text-sm">
        <div className="flex items-center gap-4 capitalize">
          <div className="flex items-center gap-1">
            <FaPhoneAlt size={18} />
            123456789
          </div>
          <div className=" md:flex hidden items-center gap-1">
            <IoMdMail size={18} />
            ubaish@gmail.com
          </div>
          <div className=" items-center gap-1 md:flex hidden">
            <IoLocation size={18} />
            b7 old police statin pakbara
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaFacebook
            onClick={() => {
              window.open(CONSTANTS.SOCIALS.FACEBOOK, "_blank");
            }}
          />
          <FaInstagram
            onClick={() => {
              window.open(CONSTANTS.SOCIALS.INSTAGRAM, "_blank");
            }}
          />
          <FaTwitter
            onClick={() => {
              window.open(CONSTANTS.SOCIALS.TWITTER, "_blank");
            }}
          />
          <FaWhatsapp
            onClick={() => {
              window.open(CONSTANTS.SOCIALS.FACEBOOK, "_blank");
            }}
          />
        </div>
      </div>
      <div className="w-screen h-[1px] bg-white my-4 opacity-90" />
      <div className="w-full  sm:flex hidden items-center justify-between lg:px-52 md:px-12 px-6 text-base">
        <Link to="/" className="text-xl font-bold">
          <span className="text-purple-800">Bharat</span>Tour
          <span className="text-purple-800">And</span>Travel
        </Link>
        <div className="flex text-lg gap-4">
          {/* <Button href="/" color="inherit">
            Home
          </Button>
          <Dropdown
            label="Packages"
            items={[
              {
                label: "Internation Packages",
                link: "/packages/international",
              },
              {
                label: "Domestic Packages",
                link: "/packages/domestic",
              },
            ]}
          /> */}

          <Button href="/about" color="inherit">
            About Us
          </Button>
          <Button href="/contact" color="inherit">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

function Dropdown({ label, items }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        color="inherit"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {label}
      </Button>
      <Menu
        id="basic-menu"
        color="inherit"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {items?.map((item) => (
          <MenuItem onClick={handleClose}>{item.label}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Header;
