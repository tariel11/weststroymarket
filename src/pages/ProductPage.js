import React, { useEffect, useState } from "react";
import QuantityButtons from "../components/UI/QuantityButtons";
import { useDispatch, useSelector } from "react-redux";
import { decreaseProduct, increaseProduct } from "../store/slices/basket";
import { useParams } from "react-router-dom";
import { addToWishList, removeToWishList } from "../store/slices/wishList";
import checkIcon from "./../img/icons/check.svg";
import { fetchOneProduct } from "../store/slices/products";
import loaderAnimation from "./../img/loader.svg";

const ProductPage = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { basketItems } = useSelector((state) => state.basket);
    const { oneProduct } = useSelector((state) => state.products);
    const { status, product } = oneProduct;

    const [isLiked, setIsLiked] = useState(false);

    const storeProduct = basketItems.find(
        (item) => item.title === product.title
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchOneProduct(slug));
    }, [dispatch, slug]);

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
        <div className="w-5/6 mx-auto pb-10">
            {status === "loading" ? (
                <div className="flex items-center justify-center">
                    <img src={loaderAnimation} alt="Идет загрузка..." />
                </div>
            ) : status === "error" ? (
                <div className="flex items-center justify-center">
                    <p>Данные не загрузились, повторите попытку позже</p>
                </div>
            ) : status === "loaded" ? (
                <div>
                    <h1 className="text-2xl mb-5 sm:text-3xl md:text-4xl font-semibold">
                        {product.category}
                    </h1>
                    <div className="flex flex-col p-5 gap-5 mb-5 ss:flex-row">
                        <div className="shadow flex-1 p-5 rounded-lg">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="mx-auto"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-end">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-auto">
                                {product.title}
                            </h2>
                            <div className="flex items-center gap-2 my-4">
                                {" "}
                                <img src={checkIcon} alt="checkIcon" />{" "}
                                <span className=" text-[#3BAA35]">
                                    В наличии
                                </span>
                            </div>
                            <i className="mb-3">
                                Артикул <span>{product.article}</span>{" "}
                            </i>
                            <div>
                                <p className="mb-4 font-semibold">
                                    Цена товара {product.price} ₽
                                </p>
                                <button
                                    onClick={() =>
                                        !isLiked
                                            ? handleAddToWishList()
                                            : handleRemoveToWishList()
                                    }
                                    className={
                                        " w-full mb-3 p-1 rounded-lg " +
                                        (isLiked
                                            ? "bg-slate-300"
                                            : " bg-green-500")
                                    }
                                >
                                    {isLiked
                                        ? "Удалить из отложенных"
                                        : "Добавить в отложенные"}
                                </button>

                                {storeProduct ? (
                                    <QuantityButtons
                                        product={product}
                                        handleDecreaseProduct={
                                            handleDecreaseProduct
                                        }
                                        handleIncreaseProduct={
                                            handleIncreaseProduct
                                        }
                                        quantity={storeProduct.quantity}
                                    />
                                ) : (
                                    <button
                                        className=" w-full p-1 bg-yellow-300 hover:bg-yellow-500 duration-300 rounded-lg"
                                        onClick={() =>
                                            handleIncreaseProduct(product)
                                        }
                                    >
                                        В корзину
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="p-5 bg-[#F6F6F6] flex flex-col gap-4 rounded-2xl border">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
                            Описание
                        </h2>
                        <p>
                            Штукатурка Волма Слой, 30кг Штукатурка на гипсовой
                            основе для ручного нанесения.
                        </p>
                        <p>
                            НАЗНАЧЕНИЕ: <br /> Выравнивание оснований в
                            помещениях нормальной влажности перед нанесением
                            декоративного слоя; Создание ровной поверхности на
                            цементных, цементно-известковых, бетонных,
                            кирпичных, гипсовых и гипсокартонных плоскостях.
                        </p>
                        <p>
                            ПРЕИМУЩЕСТВА: <br /> Экономичная (расход продукта
                            8-9 кг на 1 кв.м, не требует покрытия шпаклевкой);
                            Пластичная; Слой нанесения от 5 до 60мм; Можно
                            использовать для создания декоративных поверхностей.
                        </p>
                    </div>
                </div>
            ) : (
                <p>Непредвиденная ошибка</p>
            )}
        </div>
    );
};

export default ProductPage;
