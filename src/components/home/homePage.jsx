import React, {Component} from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

import styles from './homePageStyles.module.css';
import Eve from "../../media/Eva.jpg";
import stripes from "../../media/bg.svg";


class HomePage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const EveImg = styled.div`
            background-image: url(${Eve});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 380px;
            height: 380px;
            margin: 50px 0 80px;        
            clip-path: polygon(76% 0, 100% 73%, 75% 100%, 17% 92%, 0 57%, 15% 5%);
        `;

        const StripesImg = styled.div`
            background-image: url(${stripes});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: absolute;
            top: 70px;
            width: 510px;
            height: 510px;
            animation: 9s breath infinite;
        `;

        const Title = () => {
            return (
                <React.Fragment>
                        <StripesImg className={`${styles.main__homePage__wrapper__greetingImg} ${styles.main__homePage__wrapper__greetingImg_stripesAnim}`}/>
                        <EveImg className={`${styles.main__homePage__wrapper__greetingImg} ${styles.main__homePage__wrapper__greetingImg_eveAnim}`}/>
                    <h1>Гайдлайны Музея Фаберже</h1>
                </React.Fragment>
            )
        };

        const Greeting = () => {
            return (
                <NavLink to='/greeting'>
                    <button className={styles.main__homePage__wrapper__linkBtn}>
                        ПРИВЕТСТВИЕ
                    </button>
                </NavLink>
            )
        };

        const Instructions = () => {
            return (
                <NavLink to='/instructions'>
                    <button className={styles.main__homePage__wrapper__linkBtn}>
                        ИНСТРУКЦИИ
                    </button>
                </NavLink>
            )
        };

        const Reports = () => {
            return (
                <NavLink to='/reports'>
                    <button className={styles.main__homePage__wrapper__linkBtn}>
                        ОТЧЕТЫ
                    </button>
                </NavLink>
            )
        };

        return (
            <div className={styles.main__homePage__wrapper}>
                <Title/>
                <p>Здесь вы сможете найти ответы на самые часто задаваемые вопросы и заполнить отчеты.</p>
                <div className={styles.main__homePage__wrapper_columns}>
                    <Greeting/>
                    <Instructions/>
                    <Reports/>
                </div>
            </div>
        );
    }
}

export default HomePage;