import Slider from "react-slick";
import { slides } from "../utils/consts";

const MySlider = () => {
    const settings = {
        infinite: true,
        dots: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div
                        className="  pr-5 w-full h-32 sm:h-44 md:h-56 lg:h-64"
                        key={slide.number}
                    >
                        <div
                            className={`w-full h-full rounded-lg ${slide.color} flex items-center justify-center cursor-pointer`}
                        >
                            <p className="font-bold text-3xl">
                                Слайд {slide.number}{" "}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MySlider;
