import React from "react";
import AboutUs from "../components/AboutUs";
import MyMap from "../components/MyMap";

const ContactsPage = () => {
    return (
        <div className="w-5/6 mx-auto pb-10">
            <h1 className="text-3xl mb-5 sm:text-4xl md:text-5xl font-semibold">
                Контакты
            </h1>

            <div className="flex flex-col gap-5">
                <div>
                    <p>Адрес Офиса и Склада:Осташковское шоссе, вл1Бс30</p>
                    <p>Телефон: +7 495 018-03-30</p>
                    <p>Эл.почта: info@getstroymarket.ru</p>
                    <p>Режим работы: пн-сб. 8:00 - 20:00 вс. 9:00 - 18:00</p>
                </div>

                <MyMap />

                <AboutUs />
            </div>
        </div>
    );
};

export default ContactsPage;
