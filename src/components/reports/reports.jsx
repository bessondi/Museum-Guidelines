import React, {Component} from 'react';
import styled from 'styled-components';

import styles from './reportsStyles.module.css';

// import arrow from '../../media/icons/arrow-down.svg';
import plusIcon from '../../media/icons/plusIcon.svg';


class Reports extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            reportItems: [
                {
                    id: 1,
                    name: 'Отчет по продажам в кассе',
                    link: 'https://docs.google.com'
                },
                {
                    id: 2,
                    name: 'Бланки Navision',
                    link: 'https://docs.google.com'
                },
                {
                    id: 3,
                    name: 'Ошибки Booking',
                    link: 'https://docs.google.com'
                },
                {
                    id: 4,
                    name: 'Оптовое приобретение входных билетов',
                    link: 'https://docs.google.com'
                },
                {
                    id: 5,
                    name: 'Билеты viator/get your guide',
                    link: 'https://docs.google.com'
                },
                {
                    id: 6,
                    name: 'Гостевые билеты',
                    link: 'https://docs.google.com'
                }
            ]
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentDidUpdate() {
        let currentState = this.state.active;
        if(currentState) {
            window.scrollTo(0, 450)
        } else {
            window.scrollTo(0, 0)
        }
    }

    toggleClass = () => {
        let currentState = this.state.active;
        this.setState({active: !currentState});
    };


    render() {
        // const Arrow = styled.div`
        //     background: url(${arrow});
        //     width: 20px;
        //     height: 20px;
        //     margin: 8px 0 0 10px;
        // `;

        const PlusIcon = styled.div`
            background: url(${plusIcon});
            width: 18px;
            height: 18px;
            margin: 8px 0 0 10px;
        `;

        let reportItems = this.state.reportItems.map((item) => (
            <li key={item.id} >
                <h3>
                    <a href={item.link}
                       className={styles.wrapper__seniorWorkerReports__list_links}>
                        {item.name}
                    </a>
                </h3>
            </li>
        ));

        return (
            <div className={styles.wrapper__seniorWorkerReports}>

                <h1>Отчеты</h1>

                <div>
                    <ul className={styles.wrapper__seniorWorkerReports__list}>

                        <li>
                            <h3>
                                <a href="https://docs.google.com"
                                   className={styles.wrapper__seniorWorkerReports__list_links}>
                                    Контрольно-обходной лист
                                </a>
                            </h3>
                        </li>

                        <li>
                            <h3>
                                <a href="https://forms.gle/"
                                   className={styles.wrapper__seniorWorkerReports__list_links}>
                                    Отчет по аудиогидам
                                </a>
                            </h3>
                        </li>

                        <li>
                            <h3>
                                <a href="https://forms.gle/"
                                   className={styles.wrapper__seniorWorkerReports__list_links}>
                                    Отчет по радиогидам
                                </a>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <a href="https://docs.google.com/"
                                   className={styles.wrapper__seniorWorkerReports__list_links}>
                                    Опрос иностранцев
                                </a>
                            </h3>
                        </li>


                        <li onClick={this.toggleClass}
                            className={styles.wrapper__seniorWorkerReports__list_toggle}>
                            <h3
                                className={this.state.active
                                    ? `${styles.wrapper__seniorWorkerReports__listTicketsItems_inactive}`
                                    : `${styles.wrapper__seniorWorkerReports__listTicketsItems_active}`}
                            >
                                Кассовые отчеты
                            </h3>
                            <PlusIcon className={this.state.active
                                ? `${styles.wrapper__seniorWorkerReports__list_arrowUp}`
                                : `${styles.wrapper__seniorWorkerReports__list_arrowDown}`}/>
                        </li>


                        <ul className={this.state.active
                            ? `${styles.wrapper__seniorWorkerReports__list}`
                            : `${styles.wrapper__seniorWorkerReports__list_hidden}`}>

                            {reportItems}

                        </ul>


                    </ul>
                </div>

            </div>
        )
    }

}


export default Reports;