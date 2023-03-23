import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductCart from "../components/ProductCart";
import MyFilter from "../components/UI/MyFilter";
import MyPagination from "../components/UI/MyPagination";
import { fetchSearchProducts } from "../store/slices/products";
import loaderAnimation from "./../img/loader.svg";

const SearchPage = () => {
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const query = sp.get("query") || "all";
    const price = sp.get("price") || "all";
    const order = sp.get("order") || "newest";
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const { searchProducts } = useSelector((state) => state.products);
    const { status, products, countProducts, pages } = searchProducts;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchSearchProducts({ query, price, order, page }));
    }, [query, price, order, page, dispatch]);

    const getFilterUrl = (filter, skipPathname) => {
        const filterPage = filter.page || page;
        const filterQuery = filter.query || query;
        const filterPrice = filter.price || price;
        const sortOrder = filter.order || order;
        return `${
            skipPathname ? "" : "/search?"
        }&query=${filterQuery}&price=${filterPrice}&order=${sortOrder}&page=${filterPage}`;
    };

    return (
        <div className="w-5/6 mx-auto pb-10 ">
            <h1 className="text-3xl mb-5 sm:text-4xl md:text-5xl font-semibold">
                Поиск
            </h1>
            <p className="mb-5">
                по запросу: <span className="font-semibold"> {query}</span>{" "}
                найдено {countProducts}
            </p>

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
                        <div className="grid grid-cols-2 ss:grid-cols-3 gap-3">
                            {products.map((product) => (
                                <ProductCart
                                    key={product.article}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>Непредвиденная ошибка</p>
                    )}
                </div>
                <MyPagination pages={pages} setPage={setPage} page={page} />
            </div>
        </div>
    );
};

export default SearchPage;
