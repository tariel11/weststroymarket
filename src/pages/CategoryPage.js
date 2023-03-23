import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProducts } from "../store/slices/products";
import ProductCart from "../components/ProductCart";
import { useLocation } from "react-router-dom";
import MyFilter from "../components/UI/MyFilter";
import MyPagination from "../components/UI/MyPagination";

import loaderAnimation from "./../img/loader.svg";

const CategoryPage = () => {
    const { search } = useLocation();
    const sp = new URLSearchParams(search); 
    const category = sp.get("category") || "all";
    const price = sp.get("price") || "all";
    const order = sp.get("order") || "newest";
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const { categoryProducts } = useSelector((state) => state.products);
    const { status, products, countProducts, pages } =
        categoryProducts;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchCategoryProducts({ category, price, order, page }));
    }, [category, price, order, page, dispatch]);

    const getFilterUrl = (filter, skipPathname) => {
        const filterQuery = filter.category || category;
        const filterPrice = filter.price || price;
        const sortOrder = filter.order || order;
        return `${
            skipPathname ? "" : "/category?"
        }&category=${filterQuery}&price=${filterPrice}&order=${sortOrder}`;
    };

    return (
        <div className="w-5/6 mx-auto pb-10 ">
            <h1 className="text-3xl mb-5 sm:text-4xl md:text-5xl font-semibold">
                {category}
            </h1>

            <div className="lg:grid grid-cols-[1fr,4fr] gap-x-10 ">
                <MyFilter
                    getFilterUrl={getFilterUrl}
                    sp={sp}
                    showCurrent={products.length}
                    countProducts={countProducts}
                    page={page}
                    pages={pages}
                />
                <div>
                    {status === "loading" ? (
                        <div className="flex items-center justify-center">
                            <img src={loaderAnimation} alt="Идет загрузка..." />
                        </div>
                    ) : status === "error" ? (
                        <div className="flex items-center justify-center">
                            <p>
                                Данные не загрузились, повторите попытку позже
                            </p>
                        </div>
                    ) : status === "loaded" ? (
                        <div className="grid grid-cols-2 ss:grid-cols-3 md:grid-cols-4 gap-3">
                            {products.map((product) => (
                                <ProductCart
                                    key={product.article}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>Непредвиденная ощибка</p>
                    )}
                </div>
                <MyPagination pages={pages} setPage={setPage} page={page} />
            </div>
        </div>
    );
};

export default CategoryPage;
