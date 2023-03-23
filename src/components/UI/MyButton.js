import React from "react";
import { Link } from "react-router-dom";

const MyButton = ({ title, img, link, bg }) => {
    return (
        <Link to={link}>
            <button
                className={`w-full flex py-3 px-5 items-center justify-center gap-5 border mb-2 bg-${bg} rounded-xl duration-500 hover:bg-yellow-500 `}
            >
                {" "}
                <img
                    src={img}
                    alt={title}
                    className="w-[25px] object-fill"
                />{" "}
                {title}{" "}
            </button>
        </Link>
    );
};

export default MyButton;
