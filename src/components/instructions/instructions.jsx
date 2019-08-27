import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import styles from "./instructionsStyles.module.css";


class Instructions extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className={styles.main__instructions__wrapper}>

                <h1>Инструкции</h1>
                <div className={styles.main__instructions__wrapper__section}>
                    <ul className={styles.main__instructions__wrapper__section__links}>
                        <li>
                            <h3><NavLink to='/museum'>Знакомство с музеем</NavLink></h3>
                        </li>
                        <li>
                            <h3><NavLink to='/work-order'>Рабочий распорядок</NavLink></h3>
                        </li>
                        <li>
                            <h3><NavLink to='/standards'>Стандарты обслуживания</NavLink></h3>
                        </li>
                        <li>
                            <h3><NavLink to='/structure'>Структура музея и руководство</NavLink></h3>
                        </li>
                        <li>
                            <h3><NavLink to='/situations'>Нестандартные ситуации</NavLink></h3>
                        </li>
                        <li>
                            <h3><NavLink to='/volunteers'>Волонтерская служба</NavLink></h3>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Instructions;

