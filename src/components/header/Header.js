import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import MyForm from "../UI/MyForm";
import basketIcon from "./../../img/icons/basket.svg";
import userIcon from "./../../img/icons/user.svg";
import wishListIcon from "./../../img/icons/wishList.svg";
import burgerIcon from "./../../img/icons/burger.svg";
import closeIcon from "./../../img/icons/close.svg";
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
import MyButton from "../UI/MyButton";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    if(activeMenu){
        document.body.style.overflow = "hidden" ;
    }else{
        document.body.style.overflow = "auto" ;
    }

    return (
        <header className=" fixed w-full top-0 left-0 z-50 bg-white shadow">
              <div className="w-5/6 mx-auto py-2 hidden sm:block">
                <ul className="flex justify-end gap-3 text-sm">
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
            <hr className="hidden sm:block" />
            <div className="w-5/6 mx-auto py-3 relative grid grid-cols-[1fr,4fr,1fr] gap-3 gap-y-2  items-center sm:grid-cols-[auto,1fr,1.8fr] md:grid-cols-[auto,auto,1fr,1fr] md:gap-4 lg:grid-cols-[auto,auto,2fr,1fr]  ">
                {/* burger */}
                <div className="sm:hidden" onClick={() => setActiveMenu(!activeMenu)} >
                    <button  >
                        <img
                            src={activeMenu ? closeIcon : burgerIcon}
                            alt="burgerIcon"
                            className="w-[25px] object-fill"
                        />
                    </button>
                </div>

                {/* logo */}
                <div className="mx-auto" >
                    <Logo />
                </div>

                {/* catalog */}
                <div className="hidden sm:flex gap-2 bg-yellow-300 text-lg py-3 px-5 ">
                    <img src={burgerIcon} alt="burgerIcon" />
                    <Link to={CATALOG_ROUTE}>Каталог</Link>
                </div>

                <div className="hidden md:block ">
                    <MyForm />
                </div>

                {/* icons */}
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
                    <li onClick={() => setActiveMenu(false)}>
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

                {/* search form */}
                <div className=" col-span-full md:hidden">
                    <MyForm />
                </div>

                <div className={"absolute w-full h-[100vh] bg-white top-[105%] duration-500 " + (activeMenu ? " left-0" : " -left-[120%] ")  } >
                    <ul className="py-3 " >
                        <li onClick={() => setActiveMenu(false)} >
                            <MyButton imgUrl={burgerIcon} link={CATALOG_ROUTE} bg="yellow-300" >Каталог</MyButton>
                        </li>
                        <li onClick={() => setActiveMenu(false)} >
                            <MyButton imgUrl={wishListIcon} link={WISHLIST_ROUTE} >Избранное</MyButton>
                        </li>
                        <li onClick={() => setActiveMenu(false)} >
                            <MyButton imgUrl={basketIcon} link={BASKET_ROUTE} >Корзина</MyButton>
                        </li>
                    </ul>
                    <hr />
                    <ul className="py-3 flex flex-col gap-3" >
                        <li onClick={() => setActiveMenu(false)} >
                            <Link to={HOME_ROUTE}>Главная страница</Link>
                        </li>
                        <li onClick={() => setActiveMenu(false)} >
                            <Link to={PERSONAL_ROUTE}>Личный кабинет</Link>
                        </li>
                        <li onClick={() => setActiveMenu(false)} >
                            <Link to={WISHLIST_ROUTE}>Избранное</Link>
                        </li>
                        <li onClick={() => setActiveMenu(false)} >
                            <Link to={BASKET_ROUTE}>Корзина</Link>
                        </li>
                        <li onClick={() => setActiveMenu(false)} >
                            <Link to={CATALOG_ROUTE}>Каталог</Link>
                        </li>
                        <li onClick={() => setActiveMenu(false)} >
                            <Link to={CONTACTS_ROUTE}>Контакты</Link>
                        </li>
                        <li onClick={() => setActiveMenu(false)} >
                            <Link to={DELIVERY_ROUTE}>Доставка</Link>
                        </li>
                        <li onClick={() => setActiveMenu(false)} >
                            <Link to={RETURN_ROUTE}>Возврат</Link>
                        </li>
                        <li onClick={() => setActiveMenu(false)} >
                            <Link to={SALES_ROUTE}>Акции</Link>
                        </li>
                    </ul>
                </div>
            </div>
           
          
        </header>
    );
};

export default Header;
