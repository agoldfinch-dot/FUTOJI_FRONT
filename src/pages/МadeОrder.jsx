import { Link, useLocation } from "react-router-dom";
import assets from "../assets";
import { OrderList} from "../components";
import { useState, useContext } from "react";
import { BasketContext } from "../context/BasketContext";


export const МadeОrder = () => {
  const [showOrderList, setShowOrderList] = useState(true);
  const location = useLocation();
  const { basket, clearBasket } = useContext(BasketContext);

  if (basket.length > 0) 
  {
    localStorage.setItem("finalBasket", JSON.stringify(basket));
    clearBasket();
  }
  const finalBasket = JSON.parse(localStorage.getItem("finalBasket"));
  // const { deliveryAddress } = location.state;

  const storedResponseData = localStorage.getItem("orderData");
  const responseData = JSON.parse(storedResponseData);
  let deliveryAddress = location?.state?.deliveryAddress
  const handleShowOrderList = () => {
    setShowOrderList(!showOrderList);
  };
  if (deliveryAddress === undefined || deliveryAddress === "") deliveryAddress = "Самовывоз"
  return (
    <div className="madeorder_page information_page basket__page">
      <div className="parent_relative">
        <div className="top__box">
          <div className="title__box">
            <h1>ВАШ ЗАКАЗ ОФОРМЛЕН</h1>
          </div>
        </div>
        <img src={assets.topGradient} alt="" />
      </div>
      <div className="btns">
        <h3>ЗАКАЗЫ ОБРАБАТЫВАЮТСЯ АВТОМАТИЧЕСКИ!!!<br/>НЕ ОЖИДАЙТЕ ЗВОНКА ОПЕРАТОРА</h3>
        <a href="https://yandex.ru/maps/org/futodzhi/108652319254/">
        <img src="/slider/promo2.webp" alt="Лакинск Отзыв Подарок Розыгрыш" />
        </a>
        {/* <button className="blur__btn" onClick={handleShowOrderList}>
          Посмотреть заказ
        </button> */}
        {showOrderList && <OrderList deliveryAddress={deliveryAddress} endPrice={responseData?.totalPrice} basketItem={finalBasket} />}
        <Link className="add__cart-btn" to="/products/Пицца">
          Назад к меню
        </Link>
      </div>
      <div className={`bottom_gradient ${showOrderList ? "show" : "hide"}`}>
        <img src={assets.gradientBig} alt="" />
      </div>
    </div>
  );
};
