import React, { Component } from "react";
import Slider from "react-slick";
import ProductCart from "../productCart/ProductCart";

const ProductsCarousel = ({products}) => {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };

    return (
      <div>
        <h2 className=" font-semibold text-xl md:text-2xl mb-5" > Рекомендуем </h2>
        <Slider {...settings}>

          {products.map(product => 
            <div className="pr-5" key={product.title}>
              <ProductCart
                product={product}
                />
            </div>
            )}
        </Slider>
      </div>
    );
}

export default ProductsCarousel