import React from "react";
import { Link } from "react-router-dom";

const MyButton = ({ children, imgUrl, link, bg = "transparent" }) => {
    return (
        <Link to={link} >
            <button className={`w-full flex py-3 px-5 items-center justify-center gap-5 border mb-2 bg-${bg} ` } >
                {" "}
                <img src={imgUrl} alt={children} className="w-[25px] object-fill" /> {children}{" "}
            </button>
        </Link>
    );
};

export default MyButton;
