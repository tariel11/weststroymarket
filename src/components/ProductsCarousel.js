import React from "react";
import Slider from "react-slick";
import ProductCart from "./ProductCart";

const ProductsCarousel = ({ title, products }) => {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div>
            <h2 className="text-xl mb-5 sm:text-2xl md:text-3xl font-medium">
                {" "}
                {title}{" "}
            </h2>
            <Slider {...settings}>
                {products.map((product) => (
                    <div className="pr-5" key={product.title}>
                        <ProductCart product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductsCarousel;
