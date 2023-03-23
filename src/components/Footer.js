import React from "react";
import { Link } from "react-router-dom";
import { navList } from "../utils/consts";
import MyLogo from "./UI/MyLogo";

const Footer = () => {
    return (
        <footer className=" bg-[#30323A] text-white mt-auto">
            <div className="">
                <div className=" md:w-5/6 md:mx-auto py-5 flex flex-col md:flex-row md:justify-between">
                    <div className="w-5/6 mx-auto py-5 grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                        <div className="">
                            <MyLogo inHeader={false} />
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
                            {navList.map((li) => (
                                <li key={li.title}>
                                    <Link to={li.to}>{li.title}</Link>
                                </li>
                            ))}
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
