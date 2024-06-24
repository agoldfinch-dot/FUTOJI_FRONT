import React from 'react';
import './ButtonUp.scss'

export function ButtonUp(isHidden) {
	const handlerScrollUp = () => {
		window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
	}
	
	return (
		<div className={'ButtonUp'} style={{visibility: "hidden"}} onClick={handlerScrollUp}>&#9650;</div>
	);
}
