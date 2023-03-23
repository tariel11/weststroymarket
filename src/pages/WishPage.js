import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";
import { clearWishList } from "../store/slices/wishList";
import { CATALOG_ROUTE } from "../utils/consts";

const WishPage = () => {
    const dispatch = useDispatch();
    const { wishList } = useSelector((state) => state.wishList);

    const handleClearWishList = () => {
        let isAgree = window.confirm(
            "Вы действительно хотите удалить все товары из списка?"
        );
        isAgree && dispatch(clearWishList());
    };

    return (
        <div className="w-5/6 mx-auto pb-10">
            <h1 className="text-3xl mb-5 sm:text-4xl md:text-5xl font-semibold">
                Список отложенных товаров
            </h1>

            {wishList <= 0 ? (
                <div>
                    Список пуст{" "}
                    <Link to={CATALOG_ROUTE} className=" text-blue-500">
                        перейти к списку товаров
                    </Link>
                </div>
            ) : (
                <>
                    {" "}
                    <div className="grid grid-cols-2 ss:grid-cols-3 gap-3">
                        {wishList.map((product) => (
                            <ProductCart
                                key={product.title}
                                product={product}
                            />
                        ))}
                    </div>{" "}
                    <p
                        onClick={handleClearWishList}
                        className=" cursor-pointer block w-fit p-2 border-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-white duration-300 rounded-lg my-4"
                    >
                        Очистить список
                    </p>
                </>
            )}
        </div>
    );
};

export default WishPage;
