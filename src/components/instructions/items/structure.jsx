import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import LazyLoad from 'react-lazy-load';
import ScrollbarTop from "../../header/scrollbar/scrollbarTop";
import Scrollspy from "react-scrollspy";
import ScrollToTop from "../scrollToTopBtn/scrollToTopBtn";

import styles from '../instructionsMainStyles.module.css';

import frontOff from '../../../media/Fab.jpeg';
import linkOfTimes from '../../../media/linkOfTimes.jpg';
import kombat from '../../../media/kombat.jpeg';
import cafe from '../../../media/cafe.jpeg';

import Gabsb from '../../../media/Gabsburg.jpeg';
import Munt from '../../../media/Munt.jpeg';
import Skurl from '../../../media/Scurlov.jpg';
import Shaff from '../../../media/Shaffer.jpg';
import McCart from '../../../media/McCartey.jpg';
import Solod from '../../../media/Solod.jpg';
import Ulla from '../../../media/Ulander.jpeg';


class Structure extends Component {
    constructor() {
        super();
        this.state = {
            isHide: false,
            topManagementDepartment: [
                {
                    id: 1,
                    img: frontOff,
                    name: 'Воронченко Владимир Сергеевич',
                    post: 'Председатель правления НО "Культурно-исторический Фонд "Связь времен". Директор музея Фаберже'
                }
            ],
            managementDepartment: [

                {
                    id: 1,
                    img: frontOff,
                    name: 'Шулекина Анна Викторовна',
                    post: 'Исполнительный директор НО "Культурно-исторический Фонд "Связь времен"'
                },
                {
                    id: 2,
                    img: frontOff,
                    name: 'Овчинников Михаил Владимирович',
                    post: 'Первый заместитель директора Музея Фаберже, директор филиала НО "Культурно-исторический Фонд "Связь времен" в г. Санкт-Петербург',
                },
                {
                    id: 3,
                    img: frontOff,
                    name: 'Умаров Ринат',
                    post: 'Заместитель председателя НО "Культурно-исторический Фонд "Связь времен"'
                },
                {
                    id: 4,
                    img: frontOff,
                    name: 'Такер Роман',
                    post: 'Заместитель председателя НО "Культурно-исторический Фонд "Связь времен"'
                },
            ],
            moscowOffice: [
                {
                    id: 1,
                    img: linkOfTimes,
                    name: 'Кононенко Татьяна Николаевна',
                    post: 'Главный бухгалтер Фонда'
                },
                {
                    id: 2,
                    img: linkOfTimes,
                    name: 'Гайдай Светлана Евгеньевна',
                    post: 'Бухгалтер Фонда'
                },
                {
                    id: 3,
                    img: linkOfTimes,
                    name: 'Епанчинцев Кирилл Сергеевич',
                    post: 'Юрист Фонда'
                },
                {
                    id: 4,
                    img: linkOfTimes,
                    name: 'Гладких Натлья Павловна',
                    post: 'Юрист Фонда'
                },
                {
                    id: 5,
                    img: linkOfTimes,
                    name: 'Морозова Ирина Алексеевна',
                    post: 'Финансовый менеджер'
                },
                {
                    id: 6,
                    img: linkOfTimes,
                    name: 'Бобрик Максим Витальевич',
                    post: 'Менеджер проектов'
                },
                {
                    id: 7,
                    img: linkOfTimes,
                    name: 'Дроздова Дарья Евгеньевна',
                    post: 'Помощник В.С. Воронченко'
                },
                {
                    id: 8,
                    img: linkOfTimes,
                    name: 'Жамальдинов Алексей Усманович',
                    post: 'Водитель Фонда'
                }
            ],
            headersOfDepartsments: [
                {
                    id: 1,
                    img: frontOff,
                    name: 'Кузьмичева Елена Юрьевна',
                    post: 'Заместитель директора филиала по эксплуатации здания'
                },
                {
                    id: 2,
                    img: frontOff,
                    name: 'Дмитрий Евгеньевич',
                    post: 'Заместитель директора филиала по безопасности'
                },
                {
                    id: 3,
                    img: frontOff,
                    name: 'Пучкова Екатерина',
                    post: 'Заместитель директора филиала по связям с общественностью'
                },
                {
                    id: 4,
                    img: frontOff,
                    name: 'Григорьева София Михайловна',
                    post: 'Заместитель директора по организационной работе и развитию',
                    func: 'Руководитель службы приема посетителей'
                },
                {
                    id: 5,
                    img: frontOff,
                    name: 'Савина Марина',
                    post: 'Главный бухгалтер филиала НО КИФ “Связь времен” в г. Санкт-Петербург'
                },{
                    id: 6,
                    img: frontOff,
                    name: 'Коган Ирина',
                    post: 'Хранитель. Научный отдел.'
                }
            ],
            frontOffice: [
                {
                    id: 1,
                    img: frontOff,
                    name: 'Грибкова Екатерина',
                    post: 'Менеджер по корпоративным клиентам',
                    func: 'Работа с турфирмами, с заявками на экскурсионное обслуживание, безналичными платежами'
                },
                {
                    id: 2,
                    img: frontOff,
                    name: 'Павлинова Екатерина',
                    post: 'Старший экскурсовод-администратор',
                    func: 'Аккредитованные гиды, экскурсоводы Фонда, составление расписания экскурсий, графика работы гидов'
                },
                {
                    id: 3,
                    img: frontOff,
                    name: 'Швецова Варвара',
                    post: 'Старший администратор',
                    func: 'График работы кассиров-администраторов, обучение сотрудников, контроль за качеством сервиса'
                },
                {
                    id: 4,
                    img: frontOff,
                    name: 'Бессонов Дмитрий',
                    post: 'Администратор',
                    func: 'Верстка, дизайн, полиграфия, фото и видео съемка, монтаж'
                },
                {
                    id: 5,
                    img: frontOff,
                    name: 'Старовойтова Екатерина',
                    post: 'Экскурсовод-администратор',
                    func: 'Координатор детских программ'
                },
                {
                    id: 6,
                    img: frontOff,
                    name: 'Гранкина Анастасия',
                    post: 'Экскурсовод-администратор',
                    func: 'Волонтерская программа'
                },
                {
                    id: 7,
                    img: frontOff,
                    name: 'Фронт-офис',
                    post: 'Экскурсоводы-администраторы и кассиры-администраторы'
                }
            ],
            maintenanceService: [
                {
                    id: 1,
                    img: frontOff,
                    name: 'Булин Евгений',
                    post: 'Инженер по пожарной безопасности и охране труда'
                },
                {
                    id: 2,
                    img: frontOff,
                    name: 'Алексеев Павел',
                    post: 'Электрик'
                },
                {
                    id: 3,
                    img: frontOff,
                    name: 'Васильев Евгений',
                    post: 'Электрик'
                },
                {
                    id: 4,
                    img: frontOff,
                    name: 'Чеснакова Татьяна Дмитриевна',
                    post: 'Заведующая хозяйственной частью',
                    func: 'Закупка расходных материалов, выдача бланков билетов'
                },
                {
                    id: 5,
                    img: frontOff,
                    name: 'Сотрудницы клининговой службы'
                },
            ],
            bookKeeping: [
                {
                    id: 1,
                    img: frontOff,
                    name: 'Абубова Жанна',
                    post: 'Бухгалтер'
                },
                {
                    id: 2,
                    img: frontOff,
                    name: 'Зарубина Ирина',
                    post: 'Бухгалтер',
                    func: 'Кадровое делопроизводство'
                },
            ],
            prDepartment: [
                {
                    id: 1,
                    img: frontOff,
                    name: 'Пшеничникова Анастасия',
                    post: 'СММ-специалист'
                }
            ],
            security: [
                {
                    id: 1,
                    img: kombat,
                    name: 'Старший смены охраны',
                    post: 'Cотрудник “Комбат”'
                },
                {
                    id: 2,
                    img: kombat,
                    name: 'Старший смены охраны',
                    post: 'Cотрудник “Комбат”'
                },
                {
                    id: 3,
                    img: kombat,
                    name: 'Старший смены охраны',
                    post: 'Cотрудник “Комбат”'
                }
            ],
            otherDepartment: [
                {
                    id: 1,
                    img: frontOff,
                    name: 'Агапова Татьяна',
                    post: 'Секретарь филиала НО "Культурно-исторический Фонд "Связь времен" в г. Санкт-Петербург'
                },
                {
                    id: 2,
                    img: frontOff,
                    name: 'Черных Ксения',
                    post: 'Менеджер по проектам'
                },
                {
                    id: 3,
                    img: frontOff,
                    name: 'Смирнов Илья',
                    post: 'Водитель филиала НО "Культурно-исторический Фонд "Связь времен" в г. Санкт-Петербург'
                }
            ],
            lendomManagementDepartment: [
                {
                    id: 1,
                    img: cafe,
                    name: 'Овчинникова Наталья Григорьевна',
                    post: 'Генеральный директор ООО “Лендом Плюс”'
                },
                {
                    id: 2,
                    img: cafe,
                    name: 'Федотов Антон Андреевич',
                    post: 'Заместитель генерального директора ООО “Лендом Плюс”'
                }
            ],
            cafeDepartment: [
                {
                    id: 1,
                    img: cafe,
                    name: 'Коновалов Александр',
                    post: 'Администратор'
                },
                {
                    id: 2,
                    img: cafe,
                    name: 'Гуль Елена',
                    post: 'Администратор'
                },
                {
                    id: 3,
                    img: cafe,
                    name: 'Бариста и официанты',
                },
            ],
            shopDepartment: [
                {
                    id: 1,
                    img: cafe,
                    name: 'Гусева Кристина',
                    post: 'Директор по закупкам'
                },
                {
                    id: 2,
                    img: cafe,
                    name: 'Зиновьева Дарья',
                    post: 'Администратор'
                },
                {
                    id: 3,
                    img: cafe,
                    name: 'Руденко Юлия',
                    post: 'Администратор'
                },
                {
                    id: 4,
                    img: cafe,
                    name: 'Продавцы-кассиры'
                },
            ],
            bookkeepingCafeDepartment: [
                {
                    id: 1,
                    img: cafe,
                    name: 'Филина Светлана Юрьевна',
                    post: 'Главный бухгалтер'
                },
                {
                    id: 2,
                    img: cafe,
                    name: 'Орлова Дарья',
                    post: 'Бухгалтер'
                },
                {
                    id: 3,
                    img: cafe,
                    name: 'Осипова Наталья',
                    post: 'Бухгалтер'
                },
            ],
            expertAdvice: [
                {
                    id: 1,
                    img: Gabsb,
                    name: 'Геза фон Габсбург',
                },
                {
                    id: 2,
                    img: Munt,
                    name: 'Татьяна Мунтян',
                },
                {
                    id: 3,
                    img: Skurl,
                    name: 'Валентин Скурлов',
                },
                {
                    id: 4,
                    img: Shaff,
                    name: 'Марк Шаффер',
                },
                {
                    id: 5,
                    img: McCart,
                    name: 'Кирен МакКарти',
                },
                {
                    id: 6,
                    img: Solod,
                    name: 'Александр фон Солодкофф',
                },
                {
                    id: 7,
                    img: Ulla,
                    name: 'Улла Тилландер-Гуденйелм',
                },
            ]
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {
            topManagementDepartment,
            managementDepartment,
            moscowOffice,
            headersOfDepartsments,
            frontOffice,
            maintenanceService,
            bookKeeping,
            prDepartment,
            security,
            otherDepartment,
            lendomManagementDepartment,
            cafeDepartment,
            shopDepartment,
            bookkeepingCafeDepartment,
            expertAdvice
        } = this.state;

        const ActiveMenu = () => {
            return (
                <React.Fragment>
                    <h1>Структура Музея Фаберже и руководство</h1>
                    <div className={styles.wrapper__asidePageNav_active}>
                        <AsideMenu/>
                    </div>

                    <p>Музей Фаберже является филиалом в г. Санкт-Петербург Некоммерческой организации
                        Культурно-исторический Фонд “Связь времен”. Головной офис Фонда находится в г. Москва.</p>
                </React.Fragment>
            )
        };

        const AsideMenu = () => {
            return (
                <div className={styles.wrapper__pageNav}>
                    <Scrollspy
                        items={
                            [
                                'managementScrollSection',
                                'structureScrollSection',
                                'expertsScrollSection',
                                'lendomScrollSection'
                            ]
                        }
                        currentClassName={styles.wrapper__pageNav_activeScroll}
                        offset={-150}
                    >
                        <li><Link to="#management" className={styles.wrapper__pageNav_activeLinks}>Фонд "Связь времен"</Link></li>
                        <li><Link to="#structure" className={styles.wrapper__pageNav_activeLinks}>Музей Фаберже в Санкт-Петербурге</Link></li>
                        <li><Link to="#experts" className={styles.wrapper__pageNav_activeLinks}>Экспертный совет</Link></li>
                        <li><Link to="#lendom" className={styles.wrapper__pageNav_activeLinks}>ООО “Лендом Плюс”</Link></li>
                    </Scrollspy>
                </div>
            )
        };

        const TopManagement = () => {
            const TopManagementDepartment = topManagementDepartment.map((item) => (
                <div key={item.id}
                     className={styles.main__structure__wrapper__namesSection__topManagementItem}>
                    <div className={styles.main__structure__wrapper__namesSection__museumTopManagementItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__topManagementImage}
                             src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                    </div>
                </div>
            ));

            const ManagementDepartment = managementDepartment.map((item) => (
                <div key={item.id}
                     className={styles.main__structure__wrapper__namesSection__managementItem}>
                    <div className={styles.main__structure__wrapper__namesSection__museumManagementItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__managementImage}
                             src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                    </div>
                </div>
            ));

            const MoscowOfficeCards = moscowOffice.map((item) => (
                <div key={item.id}
                     className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small}
                             src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                    </div>
                </div>
            ));

            return (
                <React.Fragment>
                    <div className="anchor">
                        <div id="management"/>
                        <h2>Головной офис Фонда (г. Москва)</h2>
                    </div>

                    <div id="managementScrollSection">
                        <div className={styles.main__structure__wrapper__namesSection_topManagement}>
                            {TopManagementDepartment}
                        </div>

                        <div className={styles.main__structure__wrapper__topNamesSection}>
                            {ManagementDepartment}
                        </div>

                        <div className={styles.main__structure__wrapper__namesSection}>
                            {MoscowOfficeCards}
                        </div>
                    </div>
                </React.Fragment>
            )
        };

        const Directorate = () => {
            return (
                <div className={styles.main__structure__wrapper__namesSection__managementItem}>
                    <LazyLoad className={styles.main__structure__wrapper__namesSection}>
                        <div className={styles.main__structure__wrapper__namesSection__museumManagementItems}>
                            <img
                                className={styles.main__structure__wrapper__namesSection__item__managementImage}
                                src={frontOff}
                                alt="Овчинников Михаил Владимирович"/>
                            <p className={styles.main__structure__wrapper__namesSection__item__name}><b>Овчинников
                                Михаил Владимирович</b></p>
                            <p className={styles.main__structure__wrapper__namesSection__item__position}>Первый заместитель директора Музея Фаберже, директор филиала НО "Культурно-исторический Фонд "Связь времен" в
                                г. Санкт-Петербург</p>
                        </div>
                    </LazyLoad>
                </div>
            )
        };

        const HeadersOfDepartsments = () => {
            const Headers = headersOfDepartsments.map((item) => (
                <LazyLoad key={item.id}
                          className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small}
                             src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                    </div>
                </LazyLoad>
            ));

            return (
                <React.Fragment>
                    <div className={styles.main__structure__wrapper__topNamesSection}>
                        {Headers}
                    </div>
                </React.Fragment>
            )
        };

        const Structure = () => {
            const OfficeCards = frontOffice.map((item) => (
                <LazyLoad key={item.id}
                          className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small}
                             src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                        <p>{item.func}</p>
                    </div>
                </LazyLoad>
            ));

            const MaintenanceServiceCards = maintenanceService.map((item) => (
                <LazyLoad key={item.id}
                          className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small} src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                        <p>{item.func}</p>
                    </div>
                </LazyLoad>
            ));

            const BookKeeping = bookKeeping.map((item) => (
                <LazyLoad key={item.id}
                          className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small} src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                        <p>{item.func}</p>
                    </div>
                </LazyLoad>
            ));

            const PrDepartment = prDepartment.map((item) => (
                <LazyLoad key={item.id}
                          className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small} src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                    </div>
                </LazyLoad>
            ));

            const OtherDepartment = otherDepartment.map((item) => (
                <div key={item.id}
                          className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small} src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                    </div>
                </div>
            ));

            const Security = security.map((item) => (
                <LazyLoad key={item.id}
                          className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small} src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                    </div>
                </LazyLoad>
            ));

            return (
                <React.Fragment>
                    <br/>
                    <br/>
                    <div className="anchor">
                        <div id="structure"/>
                        <h2>Музей Фаберже (филиал Фонда в г. Санкт-Петербург)</h2>
                    </div>

                    <div id="structureScrollSection">
                        <Directorate/>
                        <HeadersOfDepartsments/>

                        <h3 className={styles.main__museum__departmentTitle}>
                            <b>Служба эксплуатации</b></h3>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {MaintenanceServiceCards}
                        </div>

                        <h3 className={styles.main__museum__departmentTitle}>
                            <b>Служба безопасности</b></h3>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {Security}
                        </div>

                        <h3 className={styles.main__museum__departmentTitle}>
                            <b>PR-отдел</b></h3>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {PrDepartment}
                        </div>

                        <h3 className={styles.main__museum__departmentTitle}>
                            <b>Служба приема посетителей</b></h3>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {OfficeCards}
                        </div>

                        <h3 className={styles.main__museum__departmentTitle}>
                            <b>Бухгалтерия</b></h3>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {BookKeeping}
                        </div>

                        <hr/>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {OtherDepartment}
                        </div>
                    </div>
                </React.Fragment>
            )
        };

        const Lendom = () => {
            const lendomManagement = lendomManagementDepartment.map((item) => (
                <LazyLoad key={item.id}
                          className={styles.main__structure__wrapper__namesSection__managementItem}>
                    <div className={styles.main__structure__wrapper__namesSection__museumManagementItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__managementImage}
                             src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                    </div>
                </LazyLoad>
            ));

            const cafe = cafeDepartment.map((item) => (
                <LazyLoad key={item.id}
                          className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small} src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                        <p>{item.func}</p>
                    </div>
                </LazyLoad>
            ));

            const shop = shopDepartment.map((item) => (
                <LazyLoad key={item.id}
                          className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small} src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                        <p>{item.func}</p>
                    </div>
                </LazyLoad>
            ));

            const bookkeeping = bookkeepingCafeDepartment.map((item) => (
                <LazyLoad key={item.id}
                          className={styles.main__museum__wrapper_boxInfoNames}>
                    <div className={styles.main__structure__wrapper__namesSection__museumItems}>
                        <img className={styles.main__structure__wrapper__namesSection__item__image_small} src={item.img}
                             alt={item.name}/>
                        <p className={styles.main__structure__wrapper__namesSection__item__name}>
                            <b>{item.name}</b>
                        </p>
                        <p>{item.post}</p>
                        <p>{item.func}</p>
                    </div>
                </LazyLoad>
            ));

            return (
                <React.Fragment>
                    <br/>
                    <br/>
                    <div className="anchor">
                        <div id="lendom"/>
                        <h2>ООО “Лендом Плюс”</h2>
                    </div>

                    <div id="lendomScrollSection">
                        <p>Кафе и магазин Музея Фаберже относятся к организации “Лендом Плюс”, а не к Фонду.</p>

                        <h3 className={styles.main__museum__departmentTitle}>
                            <b>Руководство ООО “Лендом Плюс”</b>
                        </h3>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {lendomManagement}
                        </div>

                        <h3 className={styles.main__museum__departmentTitle}>
                            <b>Кафе</b>
                        </h3>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {cafe}
                        </div>

                        <h3 className={styles.main__museum__departmentTitle}>
                            <b>Сувенирный магазин</b>
                        </h3>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {shop}
                        </div>

                        <h3 className={styles.main__museum__departmentTitle}>
                            <b>Бухгалтерия ООО “Лендом Плюс”</b>
                        </h3>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {bookkeeping}
                        </div>
                    </div>
                </React.Fragment>
            )
        };

        const Experts = () => {
            const ExpertAdvice = expertAdvice.map((item) => (
                <div key={item.id}
                     className={styles.main__structure__wrapper__namesSection__managementItem}>
                    <div className={styles.main__structure__wrapper__namesSection}>
                        <div className={styles.main__structure__wrapper__namesSection__museumManagementItems}>
                            <img className={styles.main__structure__wrapper__namesSection__item__managementImage}
                                 src={item.img}
                                 alt={item.name}/>
                            <p className={styles.main__structure__wrapper__namesSection__item__name}>
                                <b>{item.name}</b>
                            </p>
                            <p>{item.post}</p>
                        </div>
                    </div>
                </div>
            ));

            return (
                <React.Fragment>
                    <br/>
                    <br/>
                    <div className="anchor">
                        <div id="experts"/>
                        <h2>Экспертный совет</h2>
                    </div>

                    <div id='expertsScrollSection'>
                        <div className={styles.main__structure__wrapper__namesSection}>
                            {ExpertAdvice}
                        </div>
                    </div>
                </React.Fragment>
            )
        };

        const StandardsSection = () => {
            return (
                <React.Fragment>
                    <ScrollbarTop show='show'/>
                    <div className={styles.wrapper__asidePageNav_hidden}>
                        <AsideMenu/>
                    </div>

                    <div className={styles.wrapper}>
                        <ActiveMenu/>

                        <TopManagement/>
                        <Structure/>
                        <Experts/>
                        <Lendom/>
                    </div>

                    <ScrollToTop/>
                </React.Fragment>
            )
        };

        return (
            <StandardsSection/>
        );
    }
}

export default Structure;