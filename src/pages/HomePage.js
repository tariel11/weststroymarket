import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutUs from "../components/AboutUs";
import MyMap from "../components/MyMap";
import MySlider from "../components/MySlider";
import ProductsCarousel from "../components/ProductsCarousel";
import { fetchCategoryProducts, fetchSearchProducts } from "../store/slices/products";

const HomePage = () => {
    const dispatch = useDispatch();
    const { categoryProducts } = useSelector((state) => state.products);
    const { searchProducts } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchCategoryProducts({ query: "Плиты ОСБ" }));
        dispatch(fetchSearchProducts({ query: "Штукатурка" }));
    }, [dispatch]);

    return (
        <div className="flex flex-col gap-10 pb-10">
            <div className="w-5/6 mx-auto">
                <MySlider />
            </div>

            <div className="w-5/6 mx-auto">
                {categoryProducts.status === "loaded" && (
                    <ProductsCarousel
                        title="Рекомендуем"
                        products={categoryProducts.products}
                    />
                )}
            </div>
            <div className=" bg-slate-300 py-5">
                <div className="w-5/6 mx-auto">
                    {searchProducts.status === "loaded" && (
                        <ProductsCarousel
                            title="Штукатурки"
                            products={searchProducts.products}
                        />
                    )}
                </div>
            </div>
            <div className="w-5/6 mx-auto">
                <AboutUs />
            </div>
            <MyMap />
        </div>
    );
};

export default HomePage;
