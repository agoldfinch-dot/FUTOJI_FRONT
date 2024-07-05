import { useState } from "react";
import assets from "../assets";

export const Footer = () => {
  const [visibility, setVisibility] = useState({
    element1: false,
    element2: false,
  });

  const handleShowContent = (element) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [element]: !prevVisibility[element],
    }));
  };

  return (
    <footer>
      <div className="footer_container">
        <div className="footer_top">
          <div className="footer_logo_block">
            <a className="footer_logo" href="/">
              <img src={assets.footerLogoDesktop} loading="lazy" alt="Футоджи лакинск доставка еды" />
            </a>
            <div className="footer_about">
              <h6>О нас</h6>
              <p>
              Кафе "Футоджи" - вкусы со всего мира. 
              Японские роллы, суши, итальянская пицца, салаты и экзотические блюда. 
              Найдите своё любимое и отправьтесь в кулинарное путешествие с нами!
              </p>
            </div>
          </div>
          <ul className="footer_link">
            <li>
              <h6>Покупателям</h6>
            </li>
            <li>
              <a href="/products">Меню</a>
            </li>
            <li>
              <a href="https://vk.com/futoji33">Акции</a>
            </li>
            <li>
              <a href="https://vk.com/futoji33">Новости</a>
            </li>
          </ul>
          <div className="footer_block">
            <h6>Информация</h6>
            <span>Режим работы:</span>
            <h5>
              Пн - Вс: <br />с <span>10:00</span> до <span>22:00</span>
            </h5>
            <span>Адрес заведения:</span>
            <address>
              г. Лакинск, ул.
              <br /> Парижской Комунны,
              <br /> д. 24
            </address>
          </div>
          <div className="footer_block footer_block_end">
            <p>
              Доставка <span>во Владимирской области</span>
            </p>
            <a href="tel:+7(930)745-47-47">+7 (930) 745-47-47</a>
            <ul className="social_media">
              <li>
                <a href="https://yandex.ru/maps/org/futodzhi/108652319254/">
                  <img src={assets.mapIcon} loading="lazy" alt="карты яндекс футоджи лакинск" />
                </a>
              </li>
              <li>
                <a href="https://t.me/FutojiBot">
                  <img src={assets.telegramIcon} loading="lazy" alt="футоджи бот телеграмм" />
                </a>
              </li>
              <li>
                <a href="https://vk.com/futoji33">
                  <img src={assets.vkIcon} loading="lazy" alt="футоджи группа вк vk" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a className="policy_link" href="https://vk.com/@futoji33-uridicheskaya-informaciya">
          Юридическая информация
        </a>
        <div className="footer_media">
          <a className="footer_media_logo" href="/">
            <img src={assets.footerMediaLogo} alt="футоджи лакинск доставка еды" />
          </a>
          <div className="footer_media_block">
            <p>
              Доставка <span>во Владимирской области</span>
            </p>
            <a href="tel:+7(930)745-47-47">+7 (930) 745-47-47</a>
            <ul className="social_media">
              <li>
                <a href="https://yandex.ru/maps/org/futodzhi/108652319254/">
                  <img src={assets.mapIcon} loading="lazy" alt="футоджи яндекс карты" />
                </a>
              </li>
              <li>
                <a href="https://t.me/FutojiBot">
                  <img src={assets.telegramIcon} loading="lazy" alt="футоджи телеграмм" />
                </a>
              </li>
              <li>
                <a href="https://vk.com/futoji33">
                  <img src={assets.vkIcon} loading="lazy" alt="футоджи вк" />
                </a>
              </li>
            </ul>
          </div>
          <button
            className={`list_btn footer_link_btn_one`}
            onClick={() => handleShowContent("element1")}
          >
            <span>Информация</span>
            <img
              loading="lazy"
              className={`${visibility.element1 ? "active" : ""}`}
              src={assets.downIcon}
              alt="Информация о Футоджи лакинск доставка"
            />
          </button>
          <div
            className={`list_links list_links_one ${
              visibility.element1 ? "active" : ""
            }`}
          >
            <span>Режим работы:</span>
            <p>
              Пн - Вс:
              <br /> с <span>10:00</span> до <span>22:00</span>
            </p>
          </div>
          <button
            className="list_btn footer_link_btn_two"
            onClick={() => handleShowContent("element2")}
          >
            <span>Покупателям</span>
            <img
              className={`${visibility.element2 ? "active" : ""}`}
              src={assets.downIcon}
              loading="lazy"
              alt="Информация футоджи лакинск доставка"
            />
          </button>
          <ul
            className={`list_links list_links_two ${
              visibility.element2 ? "active" : ""
            }`}
          >
            <li className="one_link">
              <a href="/products">Меню</a>
            </li>
            <li>
              <a href="https://vk.com/futoji33">Акции</a>
            </li>
            <li>
              <a href="https://vk.com/futoji33">Новости</a>
            </li>
          </ul>
          <a className="footer_media_policy_link" href="https://vk.com/@futoji33-uridicheskaya-informaciya">
            Юридическая информация
          </a>
        </div>
      </div>
      <ul className="footer_bottom">
        <div className="footer_container">
          <li>
            <a>
              <img src={assets.footerLogo1} loading="lazy" alt="оплата картой" />
            </a>
          </li>
          <li>
            <a>
              <img src={assets.footerLogo2} loading="lazy" alt="оплата картой" />
            </a>
          </li>
          <li>
            <a>
              <img src={assets.footerLogo3} loading="lazy" alt="оплата картой" />
            </a>
          </li>
          <li>
            <a>
              <img src={assets.footerLogo4} loading="lazy" alt="оплата картой" />
            </a>
          </li>
        
        </div>
      </ul>
      <div id="authors">
        <h2 id="design">Дизайн - <a href="https://t.me/mil_popusk">Иван Комиссаров</a></h2>
        <h2 id="dev">Разработка - <a href="https://t.me/yuunaass">Антон Линков</a> & <a href="https://t.me/nyanvvv">agoldfinch</a></h2>
      </div>
    </footer>
  );
};
