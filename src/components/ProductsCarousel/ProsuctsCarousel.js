import React from "react";
import Slider from "react-slick";
import ProductCart from "../productCart/ProductCart";

const ProductsCarousel = ({products}) => {
  
    const settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            initialSlide: 2
          }
        },
      ]
    };

    return (
      <div>
        <h2 className="text-xl mb-5 sm:text-2xl md:text-3xl font-medium" > Рекомендуем </h2>
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