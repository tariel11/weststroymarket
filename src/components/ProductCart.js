import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseProduct, increaseProduct } from "../store/slices/basket";
import { addToWishList, removeToWishList } from "../store/slices/wishList";
import QuantityButtons from "./UI/QuantityButtons";
import heartIcon from "./../img/icons/heart.svg";
import heartDoneIcon from "./../img/icons/heart__done.svg";
import { PRODUCT_ROUTE } from "../utils/consts";

const ProductCart = ({ product }) => {
    const dispatch = useDispatch();
    const { basketItems } = useSelector((state) => state.basket);
    const { wishList } = useSelector((state) => state.wishList);
    const storeProduct = basketItems.find(
        (item) => item.title === product.title
    );
    const wishProduct = wishList.find((item) => item.title === product.title);
    const [isLiked, setIsLiked] = useState(wishProduct ? true : false);

    const handleDecreaseProduct = () => {
        dispatch(decreaseProduct(product));
    };
    const handleIncreaseProduct = (product) => {
        dispatch(increaseProduct(product));
    };
    const handleAddToWishList = () => {
        dispatch(addToWishList(product));
        setIsLiked(true);
    };
    const handleRemoveToWishList = () => {
        dispatch(removeToWishList(product));
        setIsLiked(false);
    };

    return (
        <div className="relative grid grid-rows-[1fr,1fr,auto] xs:grid-rows-[2fr,1fr,auto] pt-5 min-h-[300px] rounded-lg bg-white  p-3 border-[1px] hover:shadow-2xl duration-300">
            <div className="absolute top-2 right-2 cursor-pointer w-6 h-6">
                <img
                    src={isLiked ? heartDoneIcon : heartIcon}
                    alt="heartIcon"
                    onClick={() =>
                        !isLiked
                            ? handleAddToWishList()
                            : handleRemoveToWishList()
                    }
                    className={
                        `w-full object-contain ` +
                        (isLiked ? " text-red-500" : " text-slate-400")
                    }
                />
            </div>
            <div className="w-full h-full  mb-3">
                <Link
                    to={PRODUCT_ROUTE + product.slug}
                    className="w-full h-full"
                >
                    <img
                        src={product.img}
                        alt="alt"
                        className="w-full h-full object-contain"
                    />
                </Link>
            </div>

            <div className=" pb-5">
                <i className=" text-xs">артикуль {product.article} </i>
                <Link to={PRODUCT_ROUTE + product.slug}>
                    <p className=" text-sm">{product.title}</p>
                </Link>
            </div>

            <div className="mt-auto">
                <p className="mb-4 font-semibold">{product.price} ₽</p>
                {storeProduct ? (
                    <QuantityButtons
                        product={product}
                        handleDecreaseProduct={handleDecreaseProduct}
                        handleIncreaseProduct={handleIncreaseProduct}
                        quantity={storeProduct.quantity}
                    />
                ) : (
                    <button
                        className=" w-full p-1 bg-yellow-300 hover:bg-yellow-500 duration-300 rounded-lg "
                        onClick={() => handleIncreaseProduct(product)}
                    >
                        В корзину
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCart;
