import Slider from "react-slick";
import image from "../../../public/img/2.png";
import image2 from "../../../public/img/slider1.png";
import image3 from "../../../public/img/slider2.png";

import Carousel from "react-elastic-carousel";

const MySlider = () => {
  const items = [
    { id: 1, title: "Item 1", img: image2 },
    { id: 1, title: "Item 1", img: image3 },
    { id: 1, title: "Item 1", img: image },
  ];
  return (
    <div className="hidden md:block mt-4">
      <Carousel enableAutoPlay autoPlaySpeed={2000} infinite>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MySlider;
