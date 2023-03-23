import React from "react";

const Popap = ({ created, setShowPopap }) => {
    return (
        <div
            className="absolute top-0 left-0 z-50 w-full h-full  bg-[rgba(0,0,25,0.5)]  flex items-center justify-center "
            onClick={() => setShowPopap(false)}
        >
            <div
                className=" p-10 flex flex-col items-center justify-center bg-white rounded-lg gap-5"
                onClick={(e) => e.stopPropagation()}
            >
                <h4
                    className={
                        "font-medium text-xl " +
                        (created ? "text-green-500" : " text-red-500")
                    }
                >
                    {" "}
                    {created
                        ? "Ваш заказ оформлен!"
                        : "Что то пошло не так!"}{" "}
                </h4>
                <p>
                    {" "}
                    {created
                        ? "Наш менеджер свяжется с вами в ближайшее время"
                        : "Повторите попытку попозже"}{" "}
                </p>

                <p className=" text-slate-400">
                    Нажмите на темное место чтобы закрыть
                </p>
            </div>
        </div>
    );
};

export default Popap;
