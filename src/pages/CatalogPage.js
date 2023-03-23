import React from "react";
import CatalogItem from "../components/CatalogItem";

import { categories } from "./../utils/consts";

const CatalogPage = () => {
    return (
        <div className="w-5/6 mx-auto">
            <h1 className="text-3xl mb-5 sm:text-4xl md:text-5xl font-semibold">
                Каталог
            </h1>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10">
                {categories.map((c) => (
                    <div key={c.title}>
                        <div className=" h-36 flex p-5 items-center justify-center border mb-5 rounded-lg">
                            <img
                                src={c.img}
                                alt={c.title}
                                className=" w-auto max-h-24  "
                            />
                        </div>
                        <h2 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5">
                            {c.title}
                        </h2>
                        <ul className="flex flex-col gap-4 pl-5">
                            {c.items.map((i) => (
                                <CatalogItem key={i.title} i={i} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
