import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  increaseProduct,
  decreaseProduct,
  removeProduct,
} from "../store/slices/basket";
import { PRODUCT_ROUTE } from "../utils/consts";
import QuantityButtons from "./UI/QuantityButtons";
import trashIcon from "./../img/icons/trash.svg";

const BasketCart = ({ product }) => {
    const dispatch = useDispatch();

    const handleRemoveProduct = (product) => {
        let isAgree = window.confirm(
            `Вы действительно хотите удалить ${product.title} из корзины?`
        );
        isAgree && dispatch(removeProduct(product));
    };
    const handleDecreaseProduct = () => {
        dispatch(decreaseProduct(product));
    };
    const handleIncreaseProduct = (product) => {
        dispatch(increaseProduct(product));
    };

    return (
        <div className="relative grid gap-3 items-center border-b-2 text-center p-3 pt-7 xs:pt-3 ss:grid-cols-[1fr,4fr,2fr] grid-cols-2 xs:grid-cols-[1fr,2fr,1fr]">
            <div className="text-center hidden xs:block">
                <img
                    src={product.img}
                    alt="alt"
                    className="w-full object-contain"
                />
            </div>

            <p className="font-medium">
                {" "}
                <Link to={PRODUCT_ROUTE + product.slug}>
                    {product.title}
                </Link>{" "}
            </p>

            <div>
                <p className="text-center mb-4">
                    Цена: <span>{product.price} ₽ </span>
                </p>
                <QuantityButtons
                    product={product}
                    handleDecreaseProduct={handleDecreaseProduct}
                    handleIncreaseProduct={handleIncreaseProduct}
                    quantity={product.quantity}
                />
                <p className="text-center mt-4">
                    Сумма:{" "}
                    <span className="font-bold">
                        {product.price * product.quantity}
                    </span>{" "}
                    ₽
                </p>
            </div>

            <button
                className="absolute top-2 -right-2"
                onClick={() => handleRemoveProduct(product)}
            >
                <img src={trashIcon} alt="Удалить" />
            </button>
        </div>
    );
};

export default BasketCart;
