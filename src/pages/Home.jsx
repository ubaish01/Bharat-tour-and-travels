import { Button, Input } from "@mui/material";
import video from "../assets/home.mp4";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { LuBike } from "react-icons/lu";
import { TbTrekking } from "react-icons/tb";
import { FaFire } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

import tagIcon from "../assets/tag.png";
import addIcon from "../assets/add.png";
import botIcon from "../assets/bot.png";
import mindIcon from "../assets/mind.png";
import Testimonials from "../components/Testimonials";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    label: "Mount Everest",
    image:
      "https://images.unsplash.com/photo-1542662565-7e4b66bae529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
  },
  {
    label: "Leh Ladakh",
    image:
      "https://plus.unsplash.com/premium_photo-1674635191027-3d9a5520790f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "Mount Everest",
    image:
      "https://images.unsplash.com/photo-1542662565-7e4b66bae529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
  },
  {
    label: "Leh Ladakh",
    image:
      "https://plus.unsplash.com/premium_photo-1674635191027-3d9a5520790f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    label: "Leh Ladakh",
    image:
      "https://plus.unsplash.com/premium_photo-1674635191027-3d9a5520790f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "Mount Everest",
    image:
      "https://images.unsplash.com/photo-1542662565-7e4b66bae529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
  },
  {
    label: "Leh Ladakh",
    image:
      "https://plus.unsplash.com/premium_photo-1674635191027-3d9a5520790f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "Mount Everest",
    image:
      "https://images.unsplash.com/photo-1542662565-7e4b66bae529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
  },
];

const populoadPackages = [
  {
    label: "Bike Tour",
    icon: <LuBike size={72} />,
  },
  {
    label: "Trekking Tour",
    icon: <TbTrekking size={72} />,
  },
  {
    label: "Spiritual Yatra",
    icon: <FaFire size={72} />,
  },
  {
    label: "corporate Tour",
    icon: <GiWorld size={72} />,
  },
  {
    label: "Trekking Tour",
    icon: <TbTrekking size={72} />,
  },
  {
    label: "Spiritual Yatra",
    icon: <FaFire size={72} />,
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Main />
      <TopDestinations />
      <PopulorPackages />
      <Features />
      <Enquire />
      <LimitedOffers />
      <Testimonials />
    </div>
  );
};

const Main = () => {
  return (
    <div className="w-full flex items-center justify-center h-[30rem] ">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="flex flex-col items-center justify-center text-white gap-4">
        <h1 className="text-7xl font-extrabold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Travel Whole India
        </h1>
        <div className="text-xl px-60 text-center ">
          Leading Travel Company In Motorcycle touring Industry || Major Deal
          With Ladakh || Spiti || Himachal || Uttarakhand Rides & Chardham Yatra
          ( Uttarakhand)
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            onClick={() => navigate("/about")}
            variant="contained"
            color="error"
          >
            Read More
          </Button>
          <Button onClick={() => navigate("/contact")} variant="contained">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

const TopDestinations = () => {
  return (
    <div className="px-40 my-40">
      <h1 className="uppercase w-full text-center text-4xl  text-[#353636] my-6 font-extrabold ">
        Top destinations
      </h1>
      <div className="grid grid-cols-4 gap-3">
        {destinations?.map((dest, index) => (
          <div
            key={index}
            className="col-span-1 w-full overflow-hidden max-h-96 rounded-md relative group transition-all "
          >
            <img
              src={dest.image}
              alt="img"
              className="h-full w-full object-cover"
            />
            <div className="absolute w-full   group-hover:top-0 top-[-25rem] transition-all duration-300 bottom-0 h-full bg-black  opacity-50" />
            <div className="absolute z-10 w-full text-center px-4 text-white bottom-4 text-2xl left-1/2 -translate-x-1/2">
              {dest.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PopulorPackages = () => {
  return (
    <div className="px-40 mt-40 parallex h-[32rem] flex items-center justify-center flex-col">
      <h1 className="text-6xl font-extrabold text-gray-100 uppercase mb-8">
        POPULAR PACKAGES
      </h1>
      <div className="flex items-center capitalize gap-8 justify-center">
        {populoadPackages?.map((pkg, index) => (
          <>
            <div className="text-white flex flex-col justify-center  items-center gap-2">
              {pkg.icon}
              <div className="text-2xl font-medium mt-[-8px]">{pkg.label}</div>
            </div>
            {index < populoadPackages?.length - 1 && (
              <div className="h-28 bg-white w-[1px]" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="px-40  h-[30rem] flex items-center justify-center flex-col">
      <h1 className="text-5xl mt-12 font-extrabold text-[#353636] uppercase">
        WHY TRAVEL WHOLE INDIA
      </h1>
      <p>We have a unique way of meeting your adventurous expectations!</p>
      <div className="grid grid-cols-4 w-full gap-2 mt-8">
        <div className="col-span-1 bg-gray-100 border rounded-md aspect-square flex items-center flex-col gap-2 justify-center">
          <img
            src={tagIcon}
            alt=""
            className="p-8 rounded-full  border-[5px] border-gray-500"
          />
          <div className="text-xl font-medium">Effective Rates</div>
        </div>
        <div className="col-span-1 bg-gray-100 border rounded-md aspect-square flex items-center flex-col gap-2 justify-center">
          <img
            src={addIcon}
            alt=""
            className="p-8 rounded-full  border-[5px] border-gray-500"
          />
          <div className="text-xl font-medium">Tailor Made Packages</div>
        </div>
        <div className="col-span-1 bg-gray-100 border rounded-md aspect-square flex items-center flex-col gap-2 justify-center">
          <img
            src={mindIcon}
            alt=""
            className="p-8 rounded-full  border-[5px] border-gray-500"
          />
          <div className="text-xl font-medium">Quality Services</div>
        </div>
        <div className="col-span-1 bg-gray-100 border rounded-md aspect-square flex items-center flex-col gap-2 justify-center">
          <img
            src={botIcon}
            alt=""
            className="p-8 rounded-full  border-[5px] border-gray-500"
          />
          <div className="text-xl font-medium">24×7 Support Team</div>
        </div>
      </div>
    </div>
  );
};

const Enquire = () => {
  return (
    <div className="w-full  py-12 relative h-screen overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1576413209841-efe9c2cd11aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className=" w-full object-cover h-[50rem]"
      />
      <div className="w-full h-[43rem] bg-black absolute bottom-0 left-0 opacity-50" />
      <div className="absolute w-full px-60 text-white left-1/2 top-1/2 gap-6 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
        <div className="col-span-1 flex items-start flex-col justify-between">
          <h1 className="text-7xl font-extrabold ">
            JOURNEY TO EXPLORE NATURE
          </h1>
          <div className="text-xl">
            Travel Whole Indiais a holiday and travel experiences company. We
            love vacations and our love of travel combined with passion turned
            into a profession to serve our travelers for destinations in India
            and other countries to find a perfect holiday And corporate. We are
            providing excellent Solutions!
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant="contained" color="error" size="large">
              Read More
            </Button>
            <Button variant="contained" size="large">
              Contact Us
            </Button>
          </div>
        </div>

        <div className=" bg-blue-500  py-8 grid grid-cols-2 gap-6 col-span-1 px-6 items-center justify-center">
          <input
            type="text"
            placeholder="Your name"
            className="bg-white px-4 py-2 rounded-sm h-16 col-span-1  "
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-white px-4 py-2 rounded-sm h-16 col-span-1  "
          />
          <input
            type="text"
            placeholder="Phone number"
            className="bg-white px-4 py-2 rounded-sm h-16 col-span-1  "
          />
          <input
            type="text"
            placeholder="Destination"
            className="bg-white px-4 py-2 rounded-sm h-16 col-span-1  "
          />
          <input
            type="number"
            placeholder="Number of people"
            className="bg-white px-4 py-2 rounded-sm h-16 col-span-1  "
          />
          <input
            type="date"
            placeholder="Expected date"
            className="bg-white px-4 py-2 rounded-sm h-16 col-span-1  "
          />
          <textarea
            placeholder="Write your message here..."
            className="bg-white px-4 py-2 rounded-sm h-40 col-span-full"
          />

          <div className="col-span-full flex items-center justify-center">
            <Button
              variant="contained"
              color="error"
              size="lg"
              className="w-full h-12"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LimitedOffers = () => {
  return (
    <div className="px-40 my-40">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-extrabold text-[#353636] uppercase">
          LIMITED TIME OFFERS
        </h1>
        <div className="w-1/2">
          Travel Whole India is a holiday and travel experiences company. We
          love vacations and our love of travel combined with passion turned
          into a profession .
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {destinations?.map((dest, index) => (
          <div
            key={index}
            className="col-span-1 w-full overflow-hidden max-h-96 rounded-md relative group transition-all "
          >
            <img
              src={dest.image}
              alt="img"
              className="h-full w-full object-cover"
            />
            <div className="absolute w-full   top-0  transition-all duration-300 bottom-0 h-full bg-black  opacity-50" />
            <div className="px-4 py-2 rounded-sm bg-amber-400 absolute top-2">
              Trending
            </div>
            <div className="absolute z-10 w-full text-center px-4 text-white bottom-4 text-2xl left-1/2 -translate-x-1/2">
              {dest.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
