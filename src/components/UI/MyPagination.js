import React from "react";

const MyPagination = ({ pages, setPage, page }) => {
    const paginations = [];
    for (let i = 1; i <= pages; i++) {
        paginations.push(i);
    }

    return (
        <ul className="flex justify-center rounded-lg mt-5 gap-1 p-1  bg-green-300 ">
            {paginations.map((i) => (
                <li
                    key={i}
                    onClick={() => setPage(i)}
                    className={
                        "border rounded-lg border-black p-2 cursor-pointer " +
                        (page === i ? "bg-green-900 text-white" : "")
                    }
                >
                    {i}
                </li>
            ))}
        </ul>
    );
};

export default MyPagination;
