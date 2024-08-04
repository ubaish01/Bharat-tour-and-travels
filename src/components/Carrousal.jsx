import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carrousal = ({
  children,
  nav = false,
  dots = false,
  autoplay = false,
  loop = false,
  items = 3,
}) => {
  return (
    <OwlCarousel
      autoplay={autoplay}
      loop={loop}
      className="owl-theme py-3 px-2  w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 transition-transform duration-500 ease-in-out"
      margin={12}
      nav={nav}
      lazyLoad={true}
      lazyContent={true}
      autoplayTimeout={2000}
      autoplayHoverPause
      dots={dots}
      items={items}
    >
      {children}
    </OwlCarousel>
  );
};

export default Carrousal;
