import React from 'react';
import styles from './Header.module.scss'
function Header (props){
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt=""/>
                <div>
                    <h3 className="text-uppercase">Rect Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кросовок</p>
                </div>
            </div>

            <ul className="d-flex">
                <li onClick={props.onClickCart}className="mr-30">
                    <img className="cu-p" width={18} height={18} src="/img/cart.svg" alt=""/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img className="cu-p" width={18} height={18} src="/img/user.svg" alt=""/>
                </li>
            </ul>
        </header>
    );
};

export default Header;