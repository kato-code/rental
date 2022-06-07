import React from "react";
import './NewProduct.css';
import '../App/App.css';

function NewProduct() {
    return (
        <section className="new">
            <h2 className="new__title">Наши новинки</h2>
            <ul className="new__list list">
                <li className="new__item">
                    <p className="new__item-head">New</p>
                    <h3 className="new__item-title">Камераблабла</h3>
                    <p className="new__item-subtitle">О Камереблабла</p>
                </li>
                <li className="new__item">
                    <p className="new__item-head">New</p>
                    <h3 className="new__item-title">Камераблабла</h3>
                    <p className="new__item-subtitle">О Камереблабла</p>
                </li>
                <li className="new__item">
                    <p className="new__item-head">New</p>
                    <h3 className="new__item-title">Камераблабла</h3>
                    <p className="new__item-subtitle">О Камереблабла</p>
                </li>
            </ul>
        </section>
    )
}

export default NewProduct