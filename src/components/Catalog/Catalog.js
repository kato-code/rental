import React from "react";
import './Catalog.css';
import Cameras from '../Cameras/Cameras.js';
import Optics from '../Optics/Optics.js';
import Additionally from "../Additionally/Additionally";
import Monitors from "../Monitors/Monitors";

function Catalog() {
    return (
        <section className="catalog">
            <Cameras />
            <Optics />
            <Monitors />
            <Additionally />
        </section>
    )
}

export default Catalog