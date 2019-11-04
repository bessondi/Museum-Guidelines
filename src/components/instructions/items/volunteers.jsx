import React, {Component} from 'react';
import ScrollToTop from "../scrollToTopBtn/scrollToTopBtn";
// import ScrollbarTop from "../../header/scrollbar/scrollbarTop";
// import TextGradient from '../stickyTextGradient';

// import styles from '../instructionsMainStyles.module.css';


class Volunteers extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const VolunteersSection = () => {
            return (
                <React.Fragment>
                    <div className="anchor">
                        <div id="volunteers"/>
                        <h2>Волонтерская служба</h2>
                    </div>

                    <div id="volunteersScrollSection">
                        <p> Ответственные по работе с волонтерами: менеджер проектов Ксения Черных и
                            экскурсовод-администратор Анастасия Гранкина.</p>
                        <p> Волонтерская комната находится за красной шторой в кафе (вип-зал).
                            <br/> Там находятся еда и вода для волонтеров, коробка с бейджами, документы для волонтеров
                            и
                            расписание на день.</p>
                        <p>На выставках волонтеры работают в 3 смены.</p>
                        <p> Волонтеры всегда расписываются по приходу и по уходу. Берут и сдают бейдж. Отмечают время
                            своего
                            обеда, чтобы все не ушли на него одновременно. Инструкция по работе с волонтерами имеется на
                            столе в волонтерской комнате. Все необходимые бланки и бейджи тоже.</p>
                        <p>Волонтеры проводят опрос посетителей с помощью планшета, который хранится и заряжается в
                            кассовой зоне. Выдача планшета для работы осуществляется под роспись на специальном бланке
                            (документ <a
                                href="https://docs.google.com/">Учет
                                выдачи планшета волонтерам</a> на гугл-диске в папке “Касса”, подпапка “На печать”).</p>
                    </div>
                </React.Fragment>
            )
        };

        return (
            <React.Fragment>
                {/* <ScrollbarTop show='show'/> */}
                <VolunteersSection/>
                <ScrollToTop/>
                {/* <TextGradient/> */}
            </React.Fragment>
        );
    }
}

export default Volunteers;
