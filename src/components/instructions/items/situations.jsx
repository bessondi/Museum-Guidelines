import React, {Component} from 'react';

import styles from '../instructionsMainStyles.module.css';
import ScrollbarTop from "../../header/scrollbar/scrollbarTop";
import Scrollspy from "react-scrollspy";
import {HashLink as Link} from "react-router-hash-link";
import ScrollToTop from "../scrollToTopBtn/scrollToTopBtn";
import TextGradient from '../stickyTextGradient';


class Situations extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const ActiveMenu = () => {
            return (
                <React.Fragment>
                    <h1>Нестандартные ситуации</h1>
                    <div className={styles.wrapper__asidePageNav_active}>
                        <AsideMenu/>
                    </div>
                </React.Fragment>
            )
        };

        const AsideMenu = () => {
            return (
                <div className={styles.wrapper__pageNav}>
                    <Scrollspy
                        items={
                            [
                                'cloakRoomScrollSection',
                                'equipmentScrollSection',
                                'lostThingsScrollSection',
                                'emergenciesScrollSection',
                                'fireAlarmScrollSection',
                                'drunkenVisitorsScrollSection',
                                'unattendedScrollSection',
                                'powerOutageScrollSection',
                                'signalingScrollSection'
                            ]
                        }
                        currentClassName={styles.wrapper__pageNav_activeScroll}
                        offset={-150}
                    >
                        <li><Link to="#cloakRoom" className={styles.wrapper__pageNav_activeLinks}>Гардероб</Link></li>
                        <li><Link to="#equipment" className={styles.wrapper__pageNav_activeLinks}>Оборудование</Link></li>
                        <li><Link to="#lostThings" className={styles.wrapper__pageNav_activeLinks}>Утерянные вещи</Link></li>
                        <li><Link to="#emergencies" className={styles.wrapper__pageNav_activeLinks}>Чрезвычайные ситуации</Link></li>
                        <li><Link to="#fireAlarm" className={styles.wrapper__pageNav_activeLinks}>Пожарная тревога</Link></li>
                        <li><Link to="#drunkenVisitors" className={styles.wrapper__pageNav_activeLinks}>Нетрезвые посетители</Link></li>
                        <li><Link to="#unattended" className={styles.wrapper__pageNav_activeLinks}>Оставленные вещи</Link></li>
                        <li><Link to="#powerOutage" className={styles.wrapper__pageNav_activeLinks}>Сбой электричества</Link></li>
                        <li><Link to="#signaling" className={styles.wrapper__pageNav_activeLinks}>Срабатывание сигнализации</Link></li>
                    </Scrollspy>
                </div>
            )
        };

        const CloakRoom = () => {
            return(
                <React.Fragment>
                    <div className="anchor">
                        <div id="cloakRoom"/>
                        <h2>Гардероб</h2>
                    </div>

                    <div id="cloakRoomScrollSection">
                        <ul>
                            <li>Посетитель потерял номерок из гардероба.</li>
                            <p>Необходимо вызвать старшего смены службы безопасности, в его присутствии помочь
                                гардеробщице
                                составить служебную записку (в печатном виде лежит на стойке администратора в кассе,
                                также
                                есть на гугл-диске: папка “Администраторы”, документ <a
                                    href="https://drive.google.com/">“Служебная записка
                                    об утерянном номерке”</a>),
                                провести посетителя в гардероб, найти его одежду и выдать.</p>

                            <li>Посетитель не забрал вещи из гардероба по завершении работы Музея.</li>
                            <p>В присутствии старшего смены службы безопасности помочь гардеробщице составить
                                служебную
                                записку (в печатном виде лежит на стойке администратора в кассе, также есть на
                                гугл-диске:
                                папка “Администраторы”, документ <a
                                    href="https://drive.google.com/">“Служебная записка
                                    об оставленной одежде”</a> ).
                                Передать вещи, оставленные посетителем, службе безопасности.</p>
                        </ul>
                    </div>
                </React.Fragment>
                )
        };

        const Equipment = () => {
            return(
                <React.Fragment>
                    <div className="anchor">
                        <div id="equipment"/>
                        <h2>Оборудование</h2>
                    </div>

                    <div id="equipmentScrollSection">
                        <ul>
                            <li>Посетители унесли аудиогид (радиогид)</li>
                            <p>Закрывающий смену аудиогидов сотрудник (ст. смены экскурсовод) пишет служебную
                                записку на имя руководителя с описанием произошедшего (образец служебной записки
                                есть на гугл-диске: папка “Администраторы”, подпапка “Служебные записки”,
                                документ <a
                                    href="https://drive.google.com/">“Служебная
                                    записка в случае отсутствия аудиогида”</a>). Залог за аудиогид передается службе
                                безопасности.</p>

                            <li>Посетители сломали аудиогид (радиогид)</li>
                            <p>Никакого возмещения ущерба не предусмотрено (залог за аудиогид обязательно отдается).
                                Следует попросить посетителя на листе А4 в свободной форме описать произошедшее.
                                Помимо объяснительной от посетителя закрывающим смену аудиогидов сотрудником (ст.
                                смены экскурсоводом) составляется служебная записка от на имя руководителя.</p>
                        </ul>
                    </div>
                </React.Fragment>
                )
        };

        const LostThings = () => {
            return(
                <React.Fragment>
                    <div className="anchor">
                        <div id="lostThings"/>
                        <h2>Утерянные вещи</h2>
                    </div>

                    <div id="lostThingsScrollSection">
                        <p>Оставленные посетителями вещи передаются на дежурный пост сотрудникам службы
                            безопасности. В случае, если посетитель обращается за оставленной ранее вещью,
                            администратор сопровождает его на дежурный пост, где посетитель получает вещи, проверяет
                            все ли на месте и составляет записку в свободной форме. В записке фиксируются ФИО и
                            контактные данные посетителя и указывается, что вещи получены в полном объеме, а
                            претензий к сотрудникам музея и сотрудникам службы безопасности у гостя нет. В случае,
                            если посетитель является иностранным гражданином, то записка составляется на английском
                            языке с переводом и подписью администратора, осуществившего его.</p>
                    </div>
                </React.Fragment>
                )
        };

        const Emergencies = () => {
            return(
                <React.Fragment>
                    <div className="anchor">
                        <div id="emergencies"/>
                        <h2>Чрезвычайные ситуации, требующие оказания медицинской помощи</h2>
                    </div>

                    <div id="emergenciesScrollSection">
                        <p>Сотрудники музея не оказывают первую медицинскую помощь! В случае если человеку стало
                            плохо, можно принести стакан воды, сахар (только по запросу самого пострадавшего),
                            салфетки (в случае кровотечения); стул. Никакие лекарства или иные препараты (в т.ч.
                            нашатырный спирт (?)) не выдаются.</p>
                        <p>По возможности пострадавшему следует помочь перейти в более спокойное место (в т.ч. в
                            служебные помещения). В служебных помещениях с пострадавшим обязательно должен
                            находиться один из сотрудников музея.
                            В случае если гость не может принять вертикальное положение, место его нахождения по
                            возможности следует оградить от остальных посетителей.</p>

                        <p>Вызов скорой помощи</p>
                        <ul>
                            <li> осуществляется сотрудниками службы безопасности;
                            </li>
                            <li> осуществляется только с согласия пострадавшего! В противном случае квалифицируется
                                как ложный вызов и влечет административные меры наказания;
                            </li>
                            <li> вызов без согласия пострадавшего возможен только когда он находится без сознания
                                или выказывает признаки неадекватного поведения;
                            </li>
                            <li> до и во время приезда бригады один из сотрудников музея обязательно находятся рядом
                                с гостем, передает информацию о вызове скорой и состоянии пострадавшего руководству.
                                По возможности пытается предупредить возможные претензии к музею со стороны
                                пострадавшего.
                            </li>
                        </ul>
                    </div>
                </React.Fragment>
                )
        };

        const FireAlarm = () => {
            return(
                <React.Fragment>
                    <div className="anchor">
                        <div id="fireAlarm"/>
                        <h2>Пожарная тревога</h2>
                    </div>

                    <div id="fireAlarmScrollSection">
                        <p>При срабатывании оповещения о пожарной тревоге:</p>
                        <ol>
                            <li>Все двери (кроме реставраторской и фондохранилища) с СКУД автоматически
                                разблокируются.
                            </li>

                            <li>Лифт автоматически спускается вниз, открывает двери и блокируется.</li>

                            <li>Самостоятельно никакие действия по тушению не предпринимаются!</li>

                            <li>
                                <p>Сотрудники, находящиеся в экспозиционных залах, спускают посетителей по одному из
                                    указанных службой безопасности эвакуационных выходов:</p>
                                <ul>
                                    <li>по Парадной лестнице в большой двор или на наб. Фонтанки;</li>
                                    <li>по 6 лестнице (через Терракотовую гостиную) в большой двор;</li>
                                    <li>по 5 лестнице (через Верхнюю Буфетную) в малый двор (не под Подвесной
                                        галереей в связи с деревянными перекрытиями);
                                    </li>
                                    <li>по 7 лестнице (через Готический зал) в малый двор (не под Подвесной галереей
                                        в связи с деревянными перекрытиями);
                                    </li>
                                    <li>по 8 наружной лестнице (через Голубую гостиную) в большой двор.</li>
                                </ul>
                            </li>

                            <li>
                                <p>Маломобильные посетители переводятся в одну из 2-х зон безопасности:</p>
                                <ul>
                                    <li>в Бежевой гостиной</li>
                                    <li>в помещении между Готическим и Белоколонным залами</li>
                                </ul>
                                <p>В зоны безопасности переводятся только сами маломобильные посетители (без
                                    сопровождающих, гидов или переводчиков)! Сотрудник закрывает двери снаружи,
                                    после чего они блокируются, а дальнейшая эвакуация Пожарной охраной
                                    осуществляется только через оконные проемы.</p>
                            </li>

                            <li>Сотрудники, находящиеся внизу, в залы для организации эвакуации не поднимаются, а
                                помогают координировать движение посетителей и предотвращают панику на 1-м этаже.
                            </li>

                            <li>Кассиры блокируют доступ к наличности в кассовых ящиках (забирают ключи) и покидают
                                кассовую зону, двигаясь к ближайшему эвакуационному выходу.
                            </li>
                        </ol>

                        <p>После снятия пожарной тревоги и возобновления работы музея:</p>
                        <ol>
                            <li>Сотрудники возвращаются на свои рабочие места и координируют посетителей и
                                экскурсионные группы, проходящих в экспозиционные залы и кассовую зону.
                            </li>
                            <li>Принимают от сотрудников службы безопасности информацию по восстановлению
                                функционирования лифта.
                            </li>
                        </ol>
                    </div>
                </React.Fragment>
            )
        };

        const DrunkenVisitors = () => {
            return(
                <React.Fragment>
                    <div className="anchor">
                        <div id="drunkenVisitors"/>
                        <h2>Нетрезвые посетители</h2>
                    </div>

                    <div id="drunkenVisitorsScrollSection">
                        <p>С связи с продажей алкоголя в кафе Музея, нетрезвые посетители могут быть допущены на
                            территорию Музея и в экспозиционные залы.
                            Однако на любом этапе (до приобретения билетов, во время и после) посещения Музея
                            сотрудники вправе вызвать старшего смены службы безопасности, если посетитель начал
                            вести себя неадекватно.</p>
                    </div>
                </React.Fragment>
            )
        };

        const Unattended = () => {
            return(
                <React.Fragment>
                    <div className="anchor">
                        <div id="unattended"/>
                        <h2>Оставленные без присмотра вещи</h2>
                    </div>

                    <div id="unattendedScrollSection">
                        <p>В случае обнаружения вещей, оставленных без присмотра, следует вызвать старшего смены
                            службы безопасности. До его прихода не трогать, не подходить, не передвигать
                            обнаруженный предмет! Дальнейшие решения в отношении обнаруженных вещей принимаются
                            службой безопасности.</p>
                    </div>
                </React.Fragment>
            )
        };

        const PowerOutage = () => {
            return(
                <React.Fragment>
                    <div className="anchor">
                        <div id="powerOutage"/>
                        <h2>Сбой электричества</h2>
                    </div>

                    <div id="powerOutageScrollSection">
                        <p>Кассирам следует:</p>
                        <ul>
                            <li> проверить функционирование всех касс;</li>
                            <li> убедиться, что проводимые в этот момент операции завершены успешно;</li>
                            <li> при необходимости обратиться в обслуживающие организации;</li>
                            <li> включить все экраны и табло кассовой зоны.</li>
                        </ul>
                        <p>Администраторы поднимаются в залы и проверяют подсветку витрин и функционирование
                            сенсорного дисплея в Красной гостиной.</p>
                    </div>
                </React.Fragment>
            )
        };

        const Signaling = () => {
            return(
                <React.Fragment>
                    <div className="anchor">
                        <div id="signaling"/>
                        <h2>Срабатывание сигнализации в витринах</h2>
                    </div>

                    <div id="signalingScrollSection">
                        <p>При срабатывании сигнализации в витрине зал перекрывается до прибытия ст. смены службы
                            безопасности и хранителя.</p>
                    </div>
                </React.Fragment>
            )
        };

        const SituationsSection = () => {
            return (
                <React.Fragment>
                    <ScrollbarTop show='show'/>

                    <div className={`${styles.wrapper__asidePageNav_hidden}`}>
                        <AsideMenu/>
                    </div>

                    <div className={styles.wrapper}>
                        <ActiveMenu/>

                        <CloakRoom/>
                        <Equipment/>
                        <LostThings/>
                        <Emergencies/>
                        <FireAlarm/>
                        <DrunkenVisitors/>
                        <Unattended/>
                        <PowerOutage/>
                        <Signaling/>
                    </div>
                    <TextGradient/>
                    <ScrollToTop/>
                </React.Fragment>
            )
        };

        return (
            <SituationsSection/>
        );
    }
}

export default Situations;