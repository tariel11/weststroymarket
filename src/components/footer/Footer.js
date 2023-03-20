import React from "react";
import { Link } from "react-router-dom";
import {
    BASKET_ROUTE,
    CATALOG_ROUTE,
    CONTACTS_ROUTE,
    DELIVERY_ROUTE,
    HOME_ROUTE,
    PERSONAL_ROUTE,
    RETURN_ROUTE,
    SALES_ROUTE,
    WISHLIST_ROUTE,
} from "../../utils/consts";
import Logo from "../header/Logo";

const Footer = () => {
    return (
        <footer className=" bg-[#30323A] text-white mt-auto">
            <div className="">
                <div className="w-5/6 mx-auto py-5 flex flex-col md:flex-row md:justify-between">
                    <div className="w-5/6 mx-auto py-5 grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                        <div className="">
                            <Logo />
                        </div>
                        <div>
                            <p className="mb-2">
                                <a href="mailto:info@weststroymarket.ru">
                                    info@weststroymarket.ru
                                </a>
                            </p>
                            <p>
                                <a href="tel:+7999134578">+7 (980) 132-48-41</a>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="w-5/6 mx-auto py-5 ">
                        <ul className="grid grid-cols-2 gap-3">
                            <li>
                                <Link to={HOME_ROUTE}>Главная страница</Link>
                            </li>
                            <li>
                                <Link to={PERSONAL_ROUTE}>Личный кабинет</Link>
                            </li>
                            <li>
                                <Link to={WISHLIST_ROUTE}>Избранное</Link>
                            </li>
                            <li>
                                <Link to={BASKET_ROUTE}>Корзина</Link>
                            </li>
                            <li>
                                <Link to={CATALOG_ROUTE}>Каталог</Link>
                            </li>
                            <li>
                                <Link to={CONTACTS_ROUTE}>Контакты</Link>
                            </li>
                            <li>
                                <Link to={DELIVERY_ROUTE}>Доставка</Link>
                            </li>
                            <li>
                                <Link to={RETURN_ROUTE}>Возврат</Link>
                            </li>
                            <li>
                                <Link to={SALES_ROUTE}>Акции</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="w-5/6 mx-auto py-5 text-center ">
                    <p>&copy; Все права защишены</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
