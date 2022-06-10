import React from "react";
import './NewProduct.css';
import '../App/App.css';

function NewProduct() {
    return (
        <section className="new">
            {/* <h2 className="new__title">Новинки</h2> */}
            <ul className="new__list list">
                <li className="new__item">
                    <p className="new__item-head">New</p>
                    <div className="new__item-container">
                        <h3 className="new__item-title">Камераблабла</h3>
                        <p className="new__item-subtitle">О kамереблабла</p>
                    </div>
                </li>
                <li className="new__item">
                    <p className="new__item-head">New</p>
                    <div className="new__item-container">
                        <h3 className="new__item-title">Камераблабла</h3>
                        <p className="new__item-subtitle">О kамереблабла</p>
                    </div>
                </li>
                <li className="new__item">
                    <p className="new__item-head">New</p>
                    <div className="new__item-container">
                        <h3 className="new__item-title">Камераблабла</h3>
                        <p className="new__item-subtitle">О kамереблабла</p>
                    </div>
                </li>
                <li className="new__item">
                    <p className="new__item-head">New</p>
                    <div className="new__item-container">
                        <h3 className="new__item-title">Камераблабла</h3>
                        <p className="new__item-subtitle">О kамереблабла</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default NewProduct