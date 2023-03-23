import React from "react";
import { Link } from "react-router-dom";
import { sorts } from "../../utils/consts";

const MyFilter = ({
    getFilterUrl,
    sp,
    showCurrent,
    countProducts,
    page,
    pages,
}) => {
    const order = sp.get("order") || "newest";

    return (
        <div className=" bg-slate-200 p-5 rounded-lg mb-5 flex flex-col gap-3 sm:flex-row justify-between h-min lg:flex-col">
            <div>
                <i>
                    Показaнo {showCurrent}{" "}
                    {showCurrent > 1 ? "товаров" : "товар"} из {countProducts}
                </i>{" "}
                <br />
                <i>
                    Страница {page} из {pages}
                </i>
            </div>
            <ul className="flex flex-wrap md:flex-col ">
                {sorts.map((sort) => (
                    <li
                        key={sort.value}
                        className={
                            " mr-4 " +
                            (order === sort.value
                                ? " text-black font-medium"
                                : " text-[#8B8D92]")
                        }
                    >
                        {" "}
                        <Link to={getFilterUrl({ order: sort.value })}>
                            {sort.name}
                        </Link>{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyFilter;
