import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import sideBarStyles from './sideBar.module.css';
import styles from '../headerStyles.module.css';

import logo from '../../../media/fabergeLogo3.svg';
import plusIcon from '../../../media/icons/plusIconWhite.svg';
import styled from "styled-components";


class NavigationMenu extends Component {
    constructor() {
        super();
        this.state = {
            activeMenu: false,
            activeInstructions: false,
            activeReports: false
        };
    }

    toggleMenuClass = () => {
        let currentState = this.state.activeMenu;
        this.setState({ activeMenu: !currentState });

        this.setState({ activeInstructions: false });
        this.setState({ activeReports: false });
    };
    toggleInstructionsClass = () => {
        let currentState = this.state.activeInstructions;
        this.setState({ activeInstructions: !currentState });
    };
    toggleReportsClass = () => {
        let currentState = this.state.activeReports;
        this.setState({ activeReports: !currentState });
    };

    render() {

        const Logo = styled.div`
            background-image: url(${logo});
            background-position: center;
            background-repeat: no-repeat;
            width: 100px;
            height: 100px;
            margin: 25px auto 75px;
        `;

        const PlusIcon = styled.div`
            display: inline-block;
            background: url(${plusIcon});
            width: 18px;
            height: 18px;
            margin: 4px 0 0 15px;
        `;

        return (
            <React.Fragment>

                <button className={this.state.activeMenu
                    ? `${styles.closeEmptyFieldActive}`
                    : `${styles.closeEmptyField}`}
                    onClick={this.toggleMenuClass}
                >
                </button>

                <div className={styles.header__wrapper__navBtn}>
                    <button className={this.state.activeMenu
                        ? `${sideBarStyles.menuBtn} ${sideBarStyles.menuBtnActive}`
                        : `${sideBarStyles.menuBtn}`}
                        onClick={this.toggleMenuClass} >
                        <span />
                    </button>
                </div>


                <div
                    className={this.state.activeMenu
                        ? `${styles.wrapperActive} DarkMode`
                        : `${styles.wrapper}`}
                >
                    <ul className={this.state.activeMenu
                        ? `${styles.listItemsActive}`
                        : `${styles.listItems}`}
                    >
                        <li><NavLink to='/greeting' onClick={this.toggleMenuClass}>ПРИВЕТСТВИЕ</NavLink></li>

                        <li><a href="https://docs.google.com">СОТРУДНИКИ</a></li>

                        <li onClick={this.toggleInstructionsClass} >
                            СТАНДАРТЫ
                            <PlusIcon className={this.state.activeInstructions
                                ? `${styles.list_opened}`
                                : `${styles.list_closed}`}
                            />
                        </li>
                        <li
                            className={this.state.activeInstructions
                                ? `${styles.listItems_InstructionsSubListToggle_active}`
                                : `${styles.listItems_InstructionsSubListToggle}`}
                        >
                            <ul onClick={this.toggleReportsClass}
                                className={this.state.activeMenu
                                    ? `${styles.subListItemsActive}`
                                    : `${styles.listItems}`}
                            >
                                <li onClick={this.toggleInstructionsClass}>
                                    <NavLink to='/museum' onClick={this.toggleMenuClass}>Знакомство с Музеем</NavLink>
                                </li>
                                <li onClick={this.toggleInstructionsClass}>
                                    <NavLink to='/work-order' onClick={this.toggleMenuClass}>Рабочий распорядок</NavLink>
                                </li>
                                <li onClick={this.toggleInstructionsClass}>
                                    <NavLink to='/standards' onClick={this.toggleMenuClass}>Стандарты обслуживания</NavLink>
                                </li>
                                <li onClick={this.toggleInstructionsClass}>
                                    <NavLink to='/structure' onClick={this.toggleMenuClass}>Структура музея и руководство</NavLink>
                                </li>
                                <li onClick={this.toggleInstructionsClass}>
                                    <NavLink to='/situations' onClick={this.toggleMenuClass}>Нестандартные ситуации</NavLink>
                                </li>
                                <li onClick={this.toggleInstructionsClass}>
                                    <NavLink to='/volunteers' onClick={this.toggleMenuClass}>Волонтерская служба</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li onClick={this.toggleReportsClass} >
                            ОТЧЕТЫ
                            <PlusIcon className={this.state.activeReports
                                ? `${styles.list_opened}`
                                : `${styles.list_closed}`}
                            />
                        </li>
                        <li
                            className={this.state.activeReports
                                ? `${styles.listItems_ReportsSubListToggle_active}`
                                : `${styles.listItems_ReportsSubListToggle}`}
                        >
                            <ul onClick={this.toggleInstructionsClass}
                                className={this.state.activeMenu
                                    ? `${styles.subListItemsActive} ${styles.subListItemsActive_cashBox}`
                                    : `${styles.listItems}`}
                            >
                                <li onClick={this.toggleReportsClass}>
                                    <a href="https://docs.google.com">
                                        Контрольно-обходной лист
                                    </a>
                                </li>
                                <li onClick={this.toggleReportsClass}>
                                    <a href="https://forms.gle/">
                                        Отчет по аудиогидам
                                    </a>
                                </li>
                                <li onClick={this.toggleReportsClass}>
                                    <a href="https://forms.gle/">
                                        Отчет по радиогидам
                                    </a>
                                </li>
                                <li onClick={this.toggleReportsClass}>
                                    <a href="https://docs.google.com/">
                                        Опрос иностранцев
                                    </a>
                                </li>
                                <li onClick={this.toggleReportsClass}>
                                    <a href="https://docs.google.com/">
                                        Отчет по продажам в кассе
                                    </a>
                                </li>
                                <li onClick={this.toggleReportsClass}>
                                    <a href="https://docs.google.com/">
                                        Бланки Navision
                                    </a>
                                </li>
                                <li onClick={this.toggleReportsClass}>
                                    <a href="https://docs.google.com/">
                                        Ошибки Booking
                                    </a>
                                </li>
                                <li onClick={this.toggleReportsClass}>
                                    <a href="https://docs.google.com/">
                                        Оптовое приобретение входных билетов
                                    </a>
                                </li>
                                <li onClick={this.toggleReportsClass}>
                                    <a href="https://docs.google.com/">
                                        Билеты viator/get your guide
                                    </a>
                                </li>
                                <li onClick={this.toggleReportsClass}>
                                    <a href="https://docs.google.com/">
                                        Гостевые билеты
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li><Logo className={styles.sideBarLogo} /></li>
                    </ul>
                    <div />
                </div>
            </React.Fragment>
        )
    }
}

export default NavigationMenu;