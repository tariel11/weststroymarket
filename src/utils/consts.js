import suhie_smesi from "./../img/categories/suhie_smesi.jpeg";
import listovye_materialy from "./../img/categories/listovye_materialy.jpeg";
import stroitelnye_bloki from "./../img/categories/stroitelnye_bloki.jpeg";
import mayaki from "./../img/categories/mayaki.jpeg";
import setka from "./../img/categories/setka.jpeg";
import stekloholst from "./../img/categories/stekloholst.jpeg";
import lak from "./../img/categories/lak.jpeg";

import basketIcon from "./../img/icons/basket.svg";
import wishListIcon from "./../img/icons/wishList.svg";
import burgerIcon from "./../img/icons/burger.svg";

export const HOME_ROUTE = "/";
export const CATALOG_ROUTE = "/catalog";
export const CATEGORY_ROUTE = "/category";
export const CONTACTS_ROUTE = "/contacts";
export const BASKET_ROUTE = "/basket";
export const SEARCH_ROUTE = "/search";
export const DELIVERY_ROUTE = "/delivery";
export const WISHLIST_ROUTE = "/wishlist";
export const PRODUCT_ROUTE = "/product/";
export const PERSONAL_ROUTE = "/personal";
export const RETURN_ROUTE = "/return";
export const SALES_ROUTE = "/sales";

export const btnsList = [
    {
        title: "Каталог",
        to: CATALOG_ROUTE,
        img: burgerIcon,
        bg: "yellow-300"
    },
    {
        title: "Избранные",
        to: WISHLIST_ROUTE,
        img: wishListIcon,
        bg: ""
    },
    {
        title: "Корзина",
        to: BASKET_ROUTE,
        img: basketIcon,
        bg: ""
    },
];

export const navList = [
    {
        title: "Главная",
        to: HOME_ROUTE,
    },
    {
        title: "Акции",
        to: SALES_ROUTE,
    },
    {
        title: "Доставка",
        to: DELIVERY_ROUTE,
    },
    {
        title: "Контакты",
        to: CONTACTS_ROUTE,
    },
    {
        title: "Возврат",
        to: RETURN_ROUTE,
    },
    {
        title: "Личный кабинет",
        to: PERSONAL_ROUTE,
    },
];

export const slides = [
    {
        color: " bg-yellow-400",
        number: 1,
    },
    {
        color: "bg-green-400 ",
        number: 2,
    },
    {
        color: "bg-blue-400",
        number: 3,
    },
];

export const sorts = [
    {
        name: "Дешевле",
        value: "lowest",
    },
    {
        name: "Дороже",
        value: "highest",
    },
    {
        name: "По алфавиту",
        value: "alphabet",
    },
];

export const categories = [
    {
        title: "Сухие смеси",
        img: suhie_smesi,
        items: [
            {
                title: "Штукатурки",
                subItems: [
                    {
                        title: "Для машинного нанесения",
                    },
                    {
                        title: "Для потолков и стен",
                    },
                    {
                        title: "Фасадная штукатурка",
                    },
                    {
                        title: "Для внутренней отделки",
                    },
                    {
                        title: "Для отделки ванной комнаты",
                    },
                    {
                        title: "Для отделки коридора",
                    },
                    {
                        title: "Для отделки кухни",
                    },
                    {
                        title: "Нанесение эффект Шуба",
                    },
                    {
                        title: "Под бетон",
                    },
                    {
                        title: "Декоративная штукатурка Короед",
                    },
                ],
            },
            {
                title: "Шпаклёвки",
                subItems: [
                    {
                        title: "Готовые финишные шпаклевки",
                    },
                    {
                        title: "Шпаклевка финишная 20 кг",
                    },
                    {
                        title: "Сухая в мешках",
                    },
                ],
            },
            {
                title: "Плиточный клей",
                subItems: [
                    {
                        title: "Влагостойкий",
                    },
                    {
                        title: "Клей для плитки и камня",
                    },
                ],
            },
            {
                title: "Наливной пол",
            },
        ],
    },
    {
        title: "Листовые материалы",
        img: listovye_materialy,
        items: [
            {
                title: "Фанера",
                subItems: [
                    {
                        title: "Влагостойкая ФК",
                    },
                    {
                        title: "Ламинированная ФОФ",
                    },
                    {
                        title: "Шлифованная ФК",
                    },
                    {
                        title: "Водостойкая ФСФ",
                    },
                    {
                        title: "ДВП",
                    },
                ],
            },
            {
                title: "Гипсокартон",
            },
            {
                title: "Гипсоволокнистые влагостойкие листы (ГВЛ)",
            },
            {
                title: "Противопожарный огнестойкий гипсокартон",
            },
            {
                title: "Гипсокартон влагостойкий (ГКЛВ)",
            },
            {
                title: "Плиты ОСБ",
            },
        ],
    },
    {
        title: "Строительные блоки",
        img: stroitelnye_bloki,
        items: [
            {
                title: "Строительные блоки",
            },
            {
                title: "Кирпич Облицовочный",
            },
            {
                title: "Кирпич рабочий",
            },
        ],
    },
    {
        title: "Металлические профили и маяки",
        img: mayaki,
        items: [
            {
                title: "Профиль для гипсокартона",
            },
            {
                title: "Профиль для гипсокартона4",
            },
            {
                title: "Профиль маячковый",
            },
            {
                title: "Уголок металлический стальной",
            },
        ],
    },
    {
        title: "Металлические сетки",
        img: setka,
        items: [
            {
                title: "Оцинкованная для забора",
            },
            {
                title: "Оцинкованная рулонная",
            },
            {
                title: "Просечка ЦПВС сетка",
            },
            {
                title: "Сетка карта стальная",
            },
            {
                title: "Сетка тканная штукатурная",
            },
            {
                title: "Проволока",
            },
            {
                title: "Сетка сварная черная в рулонах",
            },
        ],
    },
    {
        title: "Сетка и Стеклохолст",
        img: stekloholst,
        items: [
            {
                title: "Сетка малярная & фасадная",
            },
            {
                title: "Стеклохолст & стеклообои",
            },
            {
                title: "Серпянка",
            },
        ],
    },
    {
        title: "Лакокрасочные материалы",
        img: lak,
        items: [
            {
                title: "Краски и эмали",
                subItems: [
                    {
                        title: "Tikkurila",
                    },
                    {
                        title: "Dulux",
                    },
                    {
                        title: "Аэрозольная краска TYTAN",
                    },
                    {
                        title: "Мастер-Класс",
                    },
                    {
                        title: "Моющаяся краска",
                    },
                    {
                        title: "Hammerite",
                    },
                    {
                        title: "Dali",
                    },
                    {
                        title: "Текс",
                    },
                    {
                        title: "Zlata",
                    },
                    {
                        title: "Farbox",
                    },
                    {
                        title: "Снежинка",
                    },
                    {
                        title: "Ареал+",
                    },
                    {
                        title: "Аэрозольная краска Empils",
                    },
                ],
            },
            {
                title: "Грунтовки и пропитки",
                subItems: [
                    {
                        title: "Грунтовка для штукатурки стен",
                    },
                    {
                        title: "Огнебиозащита",
                    },
                    {
                        title: "Бетон-контакт",
                    },
                    {
                        title: "Грунтовка по металлу",
                    },
                    {
                        title: "Пропитки",
                    },
                ],
            },
            {
                title: "Лак и растворитель",
                subItems: [
                    {
                        title: "Лаки",
                    },
                    {
                        title: "Растворители и очистители",
                    },
                ],
            },
            {
                title: "Клеи монтажные",
                subItems: [
                    {
                        title: "Жидкие гвозди",
                    },
                    {
                        title: "Клей ПВА",
                    },
                    {
                        title: "Клей для обоев",
                    },
                    {
                        title: "Клей для паркета и фанеры",
                    },
                ],
            },
            {
                title: "Пена монтажная",
            },
            {
                title: "Герметик",
            },
        ],
    },
];
