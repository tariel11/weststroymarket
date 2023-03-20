import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutUs from "../components/AboutUs";
import MyMap from "../components/MyMap/MyMap";
import MySlider from "../components/MySlider/MySlider";
import ProductsCarousel from "../components/ProductsCarousel/ProsuctsCarousel";
import { fetchCategoryProducts } from "../store/slices/products";

const Home = () => {
    const dispatch = useDispatch();
    const { categoryProducts } = useSelector((state) => state.categoryProducts);


    useEffect(() => {
        dispatch(fetchCategoryProducts("Влагостойкий"));
    }, []);

    return (
        <>
            <div className="w-5/6 mx-auto flex flex-col gap-10 pb-10" >
              <MySlider />
              <ProductsCarousel products={categoryProducts.items} />
              <AboutUs/>
            </div>
            <MyMap />
        </>
    );
};

export default Home;
