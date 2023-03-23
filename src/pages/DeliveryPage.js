import React from "react";

const DeliveryPage = () => {
    return (
        <div className="w-5/6 mx-auto pb-10">
            <h1 className="text-3xl mb-5 sm:text-4xl md:text-5xl font-semibold">
                Доставка
            </h1>
            <div className="p-5 sm:p-10 rounded-lg bg-slate-300">
                <div className="flex flex-col gap-5">
                    <ul className=" list-decimal pl-5">
                        <li>
                            Внимание, минимальная сумма заказа составляет 5 000
                            рублей;
                        </li>
                        <li>
                            Доставка до подъезда в пределах МКАД без разгрузки
                            (масса до 1,5 тонн.) – 1800 рублей;
                        </li>
                        <li>Стоимость 1 км. за МКАД – от 30 руб/км;</li>
                        <li>
                            Доставка осуществляется до подъезда покупателя. В
                            стоимость доставки не входит разгрузка и подъем на
                            этаж. Водитель машину не разгружает, стоимость
                            выездных грузчиков уточняйте у наших менеджеров.
                        </li>
                        <li>
                            Возможность разгрузки машины гидробортом 10 тонн и 5
                            тонн бесплатно;
                        </li>
                    </ul>

                    <p>
                        Доставка товаров осуществляется ежедневно без выходных,
                        с понедельника по воскресенье в интервале с 8:00 до
                        22:00 часов. Оплата производится при получении товара в
                        рублях или с помощью перевода через приложение банка.
                    </p>

                    <p>
                        Заказчик должен дополнительно оплатить платный въезд
                        нашей машины на территорию места назначения, если
                        таковой имеется.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPage;
