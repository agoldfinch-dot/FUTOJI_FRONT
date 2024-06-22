import React from 'react';
import './ButtonUp.scss'

export function ButtonUp() {
    let isHidden = "hidden";
	window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? isHidden= "visible": isHidden="hidden";
    });
	const handlerScrollUp = () => {
		window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
	}
	
	return (
		<div className={'ButtonUp'} style={{visibility: isHidden}} onClick={handlerScrollUp}>&#9650;</div>
	);
}
