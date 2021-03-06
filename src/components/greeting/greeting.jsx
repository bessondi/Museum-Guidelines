import React, { Component } from 'react';

import styles from './greetingStyles.module.css';
import team from '../../media/Fab.jpeg';
import LazyLoad from 'react-lazy-load';
import TextGradient from '../instructions/stickyTextGradient';
import ScrollToTop from "../instructions/scrollToTopBtn/scrollToTopBtn";
import ScrollbarTop from "../header/scrollbar/scrollbarTop";


class Greeting extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className={styles.greeting__wrapper}>
                <ScrollbarTop show='show'/>

                <LazyLoad>
                    <img className={styles.greeting__wrapper__teamImg} src={team} alt="Faberge team" />
                </LazyLoad>

                <div>
                    <br />
                    <h1>Дорогие коллеги, друзья!</h1>

                    <p>Мы рады приветствовать вас в команде Музея Фаберже в Санкт-Петербурге!
                    <br /> Вы стали частью одного из самых ярких культурных проектов страны.</p>
                    <p>Мы гордимся тем, что Музей Фаберже, который был открыт 19 ноября 2013 года, за столь короткий срок
                        успел
                        войти в десятку самых посещаемых музеев России, а также стать вторым по популярности музеем
                    Санкт-Петербурга согласно независимым рейтингам международных туристических интернет-порталов.</p>
                    <p>Музей Фаберже – первый в России частный музей федерального масштаба, представляющий крупнейшее в мире
                        собрание изделий прославленного русского ювелира Карла Фаберже. Гордостью нашей коллекции являются
                        девять драгоценных пасхальных яиц, созданных мастерами фирмы Фаберже для двух последних русских
                        императоров – Александра Третьего и Николая Второго. Помимо этих шедевров, широко известных во всем
                        мире, Музей обладает разнообразными ювелирными изделиями Фаберже, а также других знаменитых русских
                    ювелиров XIX – начала XX веков.</p>
                    <p>Музей не только экспонирует свое собственное уникальное собрание, но и привозит в Россию коллекции
                        произведений ведущих художников XX века – Сальвадора Дали, Амедео Модильяни, Хаима Сутина, Фриды
                        Кало,
                        Диего Риверы и других. Наши выставки, которые посещают сотни тысяч россиян, пользуются особой
                        популярностью среди молодежи. Эти масштабные проекты, осуществляемые в партнерстве с зарубежными
                        музеями
                        и коллекционерами, вносят вклад и в развитие международного культурного сотрудничества, столь
                    актуального сегодня.</p>
                    <p>Наш музей находится в историческом центре города – на набережной Фонтанки, в великолепном дворце
                        Нарышкиных-Шуваловых, чьи исторические интерьеры были бережно отреставрированы нами и сегодня радуют
                    гостей со всего мира.</p>
                    <p>Мы хотим, чтобы Музей Фаберже всегда был местом притяжения как гостей, так и жителей города, всегда
                        открытым и ориентированным на современного зрителя. Наша задача – донести до каждого гостя Музея
                        понимание высокой ценности российского ювелирного и декоративно-прикладного наследия, воспитать
                        чувство
                    гордости за великий талант русских мастеров.</p>
                    <p>Мы убеждены, что Музей Фаберже обладает всем, чтобы стать лучшим музеем Санкт-Петербурга и России:
                        коллекция с мировым именем, красивое здание, интерес и внимание гостей, высококлассная команда
                    специалистов, смелость и большая любовь к общему делу.</p>
                    <p>Добро пожаловать в нашу команду!</p>

                    <TextGradient />
                </div>
                <ScrollToTop/>
            </div>
        );
    }
}

export default Greeting;