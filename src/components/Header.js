import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyForm from "./UI/MyForm";
import basketIcon from "./../img/icons/basket.svg";
import userIcon from "./../img/icons/user.svg";
import wishListIcon from "./../img/icons/wishList.svg";
import burgerIcon from "./../img/icons/burger.svg";
import closeIcon from "./../img/icons/close.svg";
import {
    BASKET_ROUTE,
    btnsList,
    CATALOG_ROUTE,
    navList,
    PERSONAL_ROUTE,
    WISHLIST_ROUTE,
} from "../utils/consts";
import MyButton from "./UI/MyButton";
import MyLogo from "./UI/MyLogo";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    if (activeMenu) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return (
        <header className=" fixed w-full top-0 left-0 z-50 bg-white shadow">
            <div className="w-5/6 mx-auto py-2 hidden sm:block">
                <ul className="flex justify-end gap-3 text-sm">
                    {navList.map((li) => (
                        <li key={li.title}>
                            <Link to={li.to}>{li.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <hr className="hidden sm:block" />
            <div className="w-5/6 mx-auto py-3 grid grid-cols-[1fr,4fr,1fr] gap-3 gap-y-2 items-center sm:grid-cols-[auto,1fr,1.8fr] md:grid-cols-[auto,auto,1fr,1fr] md:gap-4 lg:grid-cols-[auto,auto,2fr,1fr]">
                <div
                    className="sm:hidden"
                    onClick={() => setActiveMenu(!activeMenu)}
                >
                    <button>
                        <img
                            src={activeMenu ? closeIcon : burgerIcon}
                            alt="burgerIcon"
                            className="w-[25px] object-fill"
                        />
                    </button>
                </div>
                <div className="mx-auto">
                    <MyLogo />
                </div>
                <Link
                    to={CATALOG_ROUTE}
                    className="hidden sm:flex gap-2 bg-yellow-300 text-lg py-3 px-5 rounded-xl duration-400 hover:bg-yellow-500 "
                >
                    <img src={burgerIcon} alt="burgerIcon" />
                    <span>Каталог</span>
                </Link>
                <div className="hidden md:block ">
                    <MyForm />
                </div>
                <ul className="flex items-center justify-end text-sm sm:justify-between">
                    <li className="hidden sm:block">
                        <Link
                            to={PERSONAL_ROUTE}
                            className="flex flex-col items-center"
                        >
                            <div>
                                <img
                                    src={userIcon}
                                    alt="Профиль"
                                    className="w-[25px] object-fill"
                                />
                            </div>
                            <p className="hidden sm:block">Профиль</p>
                        </Link>
                    </li>
                    <li className="hidden sm:block">
                        <Link
                            to={WISHLIST_ROUTE}
                            className="flex flex-col items-center"
                        >
                            <div>
                                <img
                                    src={wishListIcon}
                                    alt="Избранные"
                                    className="w-[25px] object-fill"
                                />
                            </div>
                            <p className="hidden sm:block">Избранные</p>
                        </Link>
                    </li>
                    <li
                        onClick={() => setActiveMenu(false)}
                        className="relative"
                    >
                        <Link
                            to={BASKET_ROUTE}
                            className="flex flex-col items-center"
                        >
                            <div>
                                <img
                                    src={basketIcon}
                                    alt="Корзина"
                                    className="w-[25px] object-fill"
                                />
                            </div>
                            <p className="hidden sm:block">Корзина</p>
                        </Link>
                    </li>
                </ul>
                <div className=" col-span-full md:hidden">
                    <MyForm />
                </div>

                <div
                    className={
                        "absolute px-10 w-full h-[100vh] bg-white top-full duration-500 " +
                        (activeMenu ? " left-0" : " -left-[120%] ")
                    }
                >
                    <ul className="py-3 ">
                        {btnsList.map((btn) => (
                            <li
                                key={btn.title}
                                onClick={() => setActiveMenu(false)}
                            >
                                <MyButton
                                    title={btn.title}
                                    img={btn.img}
                                    link={btn.to}
                                    bg={btn.bg}
                                />
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <ul className="py-3 flex flex-col gap-3">
                        {navList.map((li) => (
                            <li
                                key={li.title}
                                onClick={() => setActiveMenu(false)}
                            >
                                <Link to={li.to}>{li.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
