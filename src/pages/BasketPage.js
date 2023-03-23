import axios from "../utils/axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketCart from "../components/BasketCart";
import { clearBasket } from "../store/slices/basket";
import { CATALOG_ROUTE } from "../utils/consts";
import Popap from "../components/Popap";

const BasketPage = () => {
    const dispatch = useDispatch();
    const { basketItems } = useSelector((state) => state.basket);
    // const { basketItems, et;

    let totalSum = basketItems.reduce((a, c) => a + c.price * c.quantity, 0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [isCreatedOrder, setIsCreatedOrder] = useState(false);
    const [showPopap, setShowPopap] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const { data } = await axios.post(`/orders/create`, {
                    params: {
                        name,
                        phone,
                        email,
                        address,
                        comment,
                        totalItems: basketItems.length,
                        totalSum,
                        items: basketItems,
                    },
                });
                setIsCreatedOrder(data.created);
                setShowPopap(true);
                setName("");
                setEmail("");
                setPhone("");
                setAddress("");
                setComment("");
                dispatch(clearBasket());
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    };

    const handleClearBasket = () => {
        let isAgree = window.confirm(
            "Вы действительно хотите удалить все товары из корзины?"
        );
        isAgree && dispatch(clearBasket());
    };

    if (showPopap) {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return (
        <div className="w-5/6 mx-auto pb-10">
            <h1 className="text-3xl mb-5 sm:text-4xl md:text-5xl font-semibold">
                Корзина
            </h1>

            <Link
                to={CATALOG_ROUTE}
                className="block text-center py-8 rounded-2xl border-dashed border-2 bg-slate-100 w-full duration-200 hover:text-lg hover:text-blue-400 hover:bg-slate-300"
            >
                Добавить товар
            </Link>

            {basketItems <= 0 ? (
                <div className="text-center my-5 text-3xl">Корзина пуста</div>
            ) : (
                <>
                    <div className="mb-10">
                        <div className="mb-4">
                            {basketItems.map((item) => (
                                <BasketCart key={item.title} product={item} />
                            ))}
                            <span
                                onClick={handleClearBasket}
                                className=" cursor-pointer block w-fit p-2 border-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-white duration-300 rounded-lg my-4"
                            >
                                Очистить корзину
                            </span>
                        </div>
                        <p className="mb-4 p-5 bg-green-500 rounded-md text-white text-center">
                            {" "}
                            Общая сумма (
                            {basketItems.reduce(
                                (a, c) => a + c.quantity,
                                0
                            )}{" "}
                            товара) : {totalSum} рублей
                        </p>
                    </div>

                    <div className="sm:grid grid-cols-2 gap-5">
                        <div className=" mb-6">
                            <h2 className="text-2xl mb-3">Доставка и оплата</h2>
                            <div className="bg-yellow-300 p-5 rounded-lg">
                                <p className="mb-3">
                                    Цена за доставку уточняется по телефону
                                </p>
                                <p>
                                    Способ оплаты наличными или переводом на
                                    карту водителя
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl mb-3">Форма заказа</h2>
                            <form
                                className="p-5 border-2 rounded-lg "
                                onSubmit={handleSubmit}
                            >
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="p-2 border-2 w-full mb-3 rounded-lg"
                                    type="text"
                                    placeholder="Иванов Иван Иванович"
                                    required
                                />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-2 border-2 w-full mb-3 rounded-lg"
                                    type="text"
                                    placeholder="email"
                                    required
                                />
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="p-2 border-2 w-full mb-3 rounded-lg"
                                    type="text"
                                    placeholder="+ 7 999 999 99 99"
                                    required
                                />
                                <input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="p-2 border-2 w-full mb-3 rounded-lg"
                                    type="text"
                                    placeholder="Укажите адрес куда доставить"
                                    required
                                />
                                <input
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="p-2 border-2 w-full mb-3 rounded-lg"
                                    type="text"
                                    placeholder="Доп комментарии"
                                />
                                <button
                                    className=" bg-yellow-300 w-full p-3 text-xl duration-500 hover:bg-yellow-500 rounded-lg"
                                    type="submit"
                                >
                                    Оформить заказ
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}
            {showPopap && (
                <Popap
                    created={isCreatedOrder}
                    showPopap={showPopap}
                    setShowPopap={setShowPopap}
                />
            )}
        </div>
    );
};

export default BasketPage;
