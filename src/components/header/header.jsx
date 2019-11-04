import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import logoText from '../../media/fabergeLogo.svg';
import logo from '../../media/fabergeLogo2.svg';

import styles from './headerStyles.module.css';
import NavigationMenu from "./sideBar/sideBar";


const Header = () => {

    const LogoText = styled.div`
        background-image: url(${logoText});
        background-position: center;
        background-repeat: no-repeat;
        width: 125px;
        height: 100%;
    `;

    const Logo = styled.div`
        background-image: url(${logo});
        background-position: center;
        background-repeat: no-repeat;
        width: 125px;
        height: 100%;
    `;

    const Menu = () => {

        const MenuList = styled.ul`
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        `;
        const MenuItem = styled.li`
            padding: 18px 35px;
            margin: 0;
            color: #fff;
            text-transform: uppercase;
        `;
        const SubMenuList = styled.ul`
            position: absolute;
            top: 60px;                     
            max-width: 200px;
            display: flex;
            flex-flow: column;
            list-style: none;
            margin: 0;
            padding: 0;
            background: #4a4a4a;
            box-shadow: 20px 10px 30px rgba(0, 0, 0, .1);
        `;
        const SubItems = styled.li`
            position: relative;
            margin: 0;
            padding: 10px 20px;
            font-size: 0.8em;
            border-bottom: 1px solid #9a9a9a;
        `;

        let ShowMenu = () => {
            let menu = document.getElementById('hiddenMenu');
            menu.style.display = 'block';
        };

        let HideMenu = () => {
            let menu = document.getElementById('hiddenMenu');
            menu.style.display = 'none';
        };

        return (
            <MenuList>

                <MenuItem className={styles.header__wrapper__nav__linkBtn}> {/*li*/}
                    <NavLink to='/greeting'>Приветствие</NavLink>
                </MenuItem>

                <MenuItem className={styles.header__wrapper__nav__linkBtn} onMouseEnter={ShowMenu} onMouseLeave={HideMenu} > {/*li*/}
                    <NavLink to='/instructions'>СТАНДАРТЫ</NavLink>
                    <SubMenuList
                        id='hiddenMenu'
                        className={styles.header__wrapper__nav__linkBtn_hiddenMenuArrow}
                        onClick={HideMenu}>

                        <NavLink to='/museum'>
                            <SubItems> {/*li*/}
                                Знакомство с музеем
                            </SubItems>
                        </NavLink>
                        <NavLink to='/work-order'>
                            <SubItems>
                                Рабочий распорядок
                            </SubItems>
                        </NavLink>
                        <NavLink to='/standards'>
                            <SubItems>
                                Стандарты обслуживания
                            </SubItems>
                        </NavLink>
                        <NavLink to='/structure'>
                            <SubItems>
                                Структура музея и руководство
                            </SubItems>
                        </NavLink>
                        <NavLink to='/situations'>
                            <SubItems>
                                Нестандартные ситуации
                            </SubItems>
                        </NavLink>
                        <NavLink to='/volunteers'>
                            <SubItems>
                                Волонтерская служба
                            </SubItems>
                        </NavLink>
                    </SubMenuList>
                </MenuItem>

                <MenuItem className={styles.header__wrapper__nav__linkBtn}> {/*li*/}
                    <NavLink to='/reports'>Отчеты</NavLink>
                    <SubMenuList className={styles.header__wrapper__nav__linkBtn_hiddenMenuArrow}> {/*ul*/}
                        <a href="https://docs.google.com">
                            <SubItems>Контрольно-обходной лист</SubItems>
                        </a>

                        <a href="https://docs.google.com">
                            <SubItems>Опрос иностранцев</SubItems>
                        </a>

                        <a href="https://docs.google.com">
                            <SubItems>Отчет по продажам в кассе</SubItems>
                        </a>

                        <a href="https://docs.google.com">
                            <SubItems>Бланки Navision</SubItems>
                        </a>

                        <a href="https://docs.google.com">
                            <SubItems>Ошибки Booking</SubItems>
                        </a>

                        <a href="https://docs.google.com">
                            <SubItems>Оптовое приобретение входных билетов</SubItems>
                        </a>

                        <a href="https://docs.google.com">
                            <SubItems>Билеты viator/get your guide</SubItems>
                        </a>

                        <a href="https://docs.google.com">
                            <SubItems>Гостевые билеты</SubItems>
                        </a>

                    </SubMenuList>
                </MenuItem>

                <MenuItem className={styles.header__wrapper__nav__linkBtn}> {/*li*/}
                    <a href="https://docs.google.com">Сотрудники</a>
                </MenuItem>

            </MenuList>
        )
    };

    return (
        <header>
            <div className={styles.header__wrapper}>
                <NavigationMenu/>

                <Link to="/" className={styles.header__wrapper__logoText}>
                    <LogoText/>
                </Link>

                <Link to="/" className={styles.header__wrapper__logo}>
                    <Logo/>
                </Link>

                <div className={styles.header__wrapper__nav}>
                    <Menu/>
                </div>

                <div className={styles.header__wrapper__nav__fillBlock}/>
            </div>
        </header>
    )
};

export default Header;