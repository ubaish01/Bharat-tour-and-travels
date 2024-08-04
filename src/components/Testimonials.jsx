import { useEffect, useState } from "react";
import Carrousal from "./Carrousal";
import { Rating } from "@mui/material";

const useWidth = () => {
  const [width, setWidth] = useState(0);

  const handleWidthChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidthChange);
    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);

  useEffect(() => {
    handleWidthChange();
  });

  return width;
};

const img1 =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const img2 =
  "https://plus.unsplash.com/premium_photo-1708274148660-f510a6695ada?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img3 =
  "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img4 =
  "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const testimonials = [
  {
    user: {
      name: "Ubaish Malik",
      avatar: img1,
    },
    trip: "Ladakh trip",
    ratings: 5,
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias hic aliquid sapiente mollitia nisi enim velit dicta optio eius amet aut, deserunt voluptatem nam laboriosam quasi nihil similique sunt asperiores doloremque, aspernatur veritatis tenetur. Corporis velit ad odit quae minima mollitia culpa fugit, suscipit deleniti accusamus nam amet nesciunt ab asperiores eligendi quia? Harum debitis earum nemo velit reprehenderit placeat, eveniet rem quibusdam dolorem sit dolores corporis ex voluptatibus eaque ut sed quisquam neque delectus beatae atque distinctio veniam. Cumque aut alias vel rerum adipisci provident pariatur, quo animi id voluptas. Vitae omnis maxime totam, doloribus assumenda molestiae aliquam veniam?`,
  },
  {
    user: {
      name: "Usman Khan",
      avatar: img2,
    },
    trip: "Manali Group tour",
    ratings: 4.5,
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias hic aliquid sapiente mollitia nisi enim velit dicta optio eius amet aut, deserunt voluptatem nam laboriosam quasi nihil similique sunt asperiores doloremque, aspernatur veritatis tenetur. Corporis velit ad odit quae minima mollitia culpa fugit, suscipit deleniti accusamus nam amet nesciunt ab asperiores eligendi quia? Harum debitis earum nemo velit reprehenderit placeat, eveniet rem quibusdam dolorem sit dolores corporis ex voluptatibus eaque ut sed quisquam neque delectus beatae atque distinctio veniam. Cumque aut alias vel rerum adipisci provident pariatur, quo animi id voluptas. Vitae omnis maxime totam, doloribus assumenda molestiae aliquam veniam?`,
  },
  {
    user: {
      name: "Asif Saifi",
      avatar: img3,
    },
    trip: "Ajmer spiritual tour",
    ratings: 4.8,
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias hic aliquid sapiente mollitia nisi enim velit dicta optio eius amet aut, deserunt voluptatem nam laboriosam quasi nihil similique sunt asperiores doloremque, aspernatur veritatis tenetur. Corporis velit ad odit quae minima mollitia culpa fugit, suscipit deleniti accusamus nam amet nesciunt ab asperiores eligendi quia? Harum debitis earum nemo velit reprehenderit placeat, eveniet rem quibusdam dolorem sit dolores corporis ex voluptatibus eaque ut sed quisquam neque delectus beatae atque distinctio veniam. Cumque aut alias vel rerum adipisci provident pariatur, quo animi id voluptas. Vitae omnis maxime totam, doloribus assumenda molestiae aliquam veniam?`,
  },
  {
    user: {
      name: "Rihan Saifi",
      avatar: img4,
    },
    trip: "Fun City Bareily",
    ratings: 3.5,
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias hic aliquid sapiente mollitia nisi enim velit dicta optio eius amet aut, deserunt voluptatem nam laboriosam quasi nihil similique sunt asperiores doloremque, aspernatur veritatis tenetur. Corporis velit ad odit quae minima mollitia culpa fugit, suscipit deleniti accusamus nam amet nesciunt ab asperiores eligendi quia? Harum debitis earum nemo velit reprehenderit placeat, eveniet rem quibusdam dolorem sit dolores corporis ex voluptatibus eaque ut sed quisquam neque delectus beatae atque distinctio veniam. Cumque aut alias vel rerum adipisci provident pariatur, quo animi id voluptas. Vitae omnis maxime totam, doloribus assumenda molestiae aliquam veniam?`,
  },
];

const Testimonials = () => {
  const screenWidth = useWidth();

  return (
    <div className="w-full md:px-12  flex flex-col bg-white text-black items-center px-4 py-10 gap-8">
      <h3 className="text-center text-5xl mt-12 font-extrabold text-[#353636] uppercase">
        What do our customers say
      </h3>
      <div className="w-full bg-gray-500 h-[1px]" />
      <div className="flex flex-row   overflow-x-hidden w-full gap-4 justify-start items-center  ">
        <Carrousal
          autoplay
          loop
          items={screenWidth > 900 ? 3 : screenWidth > 600 ? 2 : 1}
        >
          {testimonials &&
            testimonials?.map((item, index) => (
              <Testimonial key={index} testimonial={item} />
            ))}
        </Carrousal>
      </div>
    </div>
  );
};

const Testimonial = ({ testimonial }) => {
  const [hide, setHide] = useState(true);

  return (
    <div
      className="flex h-[25rem] m-2 text-black bg-white flex-col items-center justify-start px-6 py-4 rounded-xl hover:scale-105 mb-4 "
      style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
    >
      <div className=" w-24 h-24  rounded-full aspect-square overflow-hidden">
        <img
          onContextMenu={(e) => {
            e.preventDefault();
          }}
          className="object-cover w-full h-full"
          src={testimonial?.user?.avatar}
          alt=""
        />
      </div>
      <div className="font-semibold text-xl mb-2">
        {testimonial?.user?.name}
      </div>
      <div className="font-semibold text-xl mb-2">
        <Rating name="read-only" value={testimonial.ratings} readOnly />
      </div>
      <div className="text-sm text-center uppercase text-gray-500 mb-2">
        {testimonial?.trip}
      </div>
      <div className={`text-sm mb-2 max-h-28 overflow-y-scroll `}>
        {hide
          ? `${testimonial?.content.substring(0, 300)}...`
          : testimonial?.content}
      </div>
      <button
        className="text-sm text-blue-500 cursor-pointer"
        onClick={() => {
          setHide((prev) => !prev);
          console.log("Click worked");
        }}
      >
        {hide ? "Read More" : "Read Less"}
      </button>
    </div>
  );
};

export default Testimonials;
