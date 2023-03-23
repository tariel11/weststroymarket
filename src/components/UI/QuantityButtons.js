import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const QuantityButtons = ({
    quantity,
    handleDecreaseProduct,
    handleIncreaseProduct,
    product,
}) => {
    return (
        <div className="flex justify-between border-[1px] rounded-lg p-1">
            <button
                onClick={() => quantity > 1 && handleDecreaseProduct(product)}
                className=" px-2"
            >
                {" "}
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>{" "}
            </button>
            <span className="px-2">{quantity}</span>
            <button
                onClick={() => handleIncreaseProduct(product)}
                className=" px-2"
            >
                {" "}
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>{" "}
            </button>
        </div>
    );
};

export default QuantityButtons;
