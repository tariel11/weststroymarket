import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH_ROUTE } from "../../utils/consts";
import searchIcon from './../../img/icons/search.svg'

const MyForm = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(SEARCH_ROUTE + `?query=${searchQuery}`);
        setSearchQuery("");
    };

    return (
        <form
            onSubmit={handleSearch}
            className="a border-solid border-2 rounded-md p-2 flex justify-between"
        >
            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                className="w-full outline-none"
                placeholder="Поиск по магазину"
            />
            <button type="submit">
                {" "}
                <img src={searchIcon} alt="Поиск" />
            </button>
        </form>
    );
};

export default MyForm;
