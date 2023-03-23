import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORY_ROUTE } from "../utils/consts";
import arrowIcon from "./../img/icons/arrow.svg";

const CatalogItem = ({ i }) => {
    const [showList, setShowList] = useState(false);
    return (
        <li>
            {!i.subItems ? (
                <Link
                    to={CATEGORY_ROUTE + `?category=${i.title}`}
                    className="hover:text-blue-700 duration-200"
                >
                    {i.title}{" "}
                </Link>
            ) : (
                <button
                    onClick={() => setShowList(!showList)}
                    className="w-full flex justify-between"
                >
                    <span>{i.title}</span>

                    <img
                        src={arrowIcon}
                        alt="arrow"
                        className={!showList ? "rotate-180" : "" }
                    />
                </button>
            )}
            {!i.subItems <= 0 && (
                <ul
                    className={
                        "flex flex-col gap-3 pl-5 pt-4 " +
                        (showList ? "block" : "hidden")
                    }
                >
                    {i.subItems.map((s) => (
                        <li key={s.title}>
                            <Link
                                to={CATEGORY_ROUTE + `?category=${s.title}`}
                                className="hover:text-blue-700 duration-200"
                            >
                                {s.title}{" "}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default CatalogItem;
