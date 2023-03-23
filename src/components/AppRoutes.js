import React from "react";
import { Route, Routes } from "react-router-dom";
import BasketPage from "../pages/BasketPage";
import CatalogPage from "../pages/CatalogPage";
import CategoryPage from "../pages/CategoryPage";
import ContactsPage from "../pages/ContactsPage";
import DeliveryPage from "../pages/DeliveryPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import SearchPage from "../pages/SearchPage";
import WishPage from "../pages/WishPage";
import {
    BASKET_ROUTE,
    CATALOG_ROUTE,
    CATEGORY_ROUTE,
    CONTACTS_ROUTE,
    DELIVERY_ROUTE,
    HOME_ROUTE,
    PRODUCT_ROUTE,
    SEARCH_ROUTE,
    WISHLIST_ROUTE,
} from "../utils/consts";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<HomePage />} />
            <Route path={CATALOG_ROUTE} element={<CatalogPage />} />
            <Route path={CATEGORY_ROUTE} element={<CategoryPage />} />
            <Route path={BASKET_ROUTE} element={<BasketPage />} />
            <Route path={SEARCH_ROUTE} element={<SearchPage />} />
            <Route path={WISHLIST_ROUTE} element={<WishPage />} />
            <Route path={PRODUCT_ROUTE + ":slug"} element={<ProductPage />} />
            <Route path={DELIVERY_ROUTE} element={<DeliveryPage />} />
            <Route path={CONTACTS_ROUTE} element={<ContactsPage />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
};

export default AppRoutes;
