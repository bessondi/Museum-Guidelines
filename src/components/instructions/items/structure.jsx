import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import LazyLoad from 'react-lazy-load';
import ScrollbarTop from "../../header/scrollbar/scrollbarTop";
import Scrollspy from "react-scrollspy";
import ScrollToTop from "../scrollToTopBtn/scrollToTopBtn";
import TextGradient from '../stickyTextGradient';
import BreadCrumbs from '../../main/breadCrumbs';
import ArticlesSlider from '../../main/articlesSliderBottom';

import styles from '../instructionsMainStyles.module.css';

import Vekselberg from '../../../media/linkOfTimes.jpg';
import Voronchenko from '../../../media/linkOfTimes.jpg';
import Shulekina from '../../../media/linkOfTimes.jpg';
import Umarov from '../../../media/linkOfTimes.jpg';
import Thaker from '../../../media/linkOfTimes.jpg';
import Ovchinnikov from '../../../media/linkOfTimes.jpg';
import Ovchinnikov1 from '../../../media/Fab.jpeg';
import Agap from '../../../media/Fab.jpeg';

import frontOff from '../../../media/Fab.jpeg';
import linkOfTimes from '../../../media/linkOfTimes.jpg';
import Grig from '../../../media/Fab.jpeg';
import Smirn from '../../../media/Fab.jpeg';
import Pavl from '../../../media/Fab.jpeg';
import Shvets from '../../../media/Fab.jpeg';
import Bess from '../../../media/Fab.jpeg';
import Star from '../../../media/Fab.jpeg';
import Grank from '../../../media/Fab.jpeg';
import Zbur from '../../../media/Fab.jpeg';
import Sherb from '../../../media/Fab.jpeg';

import Kuzm from '../../../media/Fab.jpeg';
import Ches from '../../../media/Fab.jpeg';
import Bulin from '../../../media/Fab.jpeg';
import Alexeev from '../../../media/Fab.jpeg';
import Vasilev from '../../../media/Fab.jpeg';
import cleaning from '../../../media/cleaning.jpg';

import Savina from '../../../media/Fab.jpeg';
import Abubova from '../../../media/Fab.jpeg';
import Zarubina from '../../../media/Fab.jpeg';

import Puchkova from '../../../media/Fab.jpeg';
import Pshen from '../../../media/Fab.jpeg';
import Kud from '../../../media/Fab.jpeg';

import kombat from '../../../media/kombat.jpeg';

import Chern from '../../../media/Fab.jpeg';
import Berez from '../../../media/Fab.jpeg';
import Smirnov from '../../../media/Fab.jpeg';
import Kogan from '../../../media/Fab.jpeg';

import Fedotov from '../../../media/cafe.jpeg';
import cafe from '../../../media/cafe.jpeg';
import Neimohov from '../../../media/cafe.jpeg';

import Guseva from '../../../media/cafe.jpeg';
import Zinov from '../../../media/cafe.jpeg';
import Rudenko from '../../../media/cafe.jpeg';

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
                    img: Vekselberg,
                    name: 'Вексельберг Виктор Феликсович',
                    post: 'Учредитель НО "Культурно-исторический Фонд "Связь времен"'
                },
                {
                    id: 2,
                    img: Voronchenko,
                    name: 'Воронченко Владимир Сергеевич',
                    post: 'Председатель правления НО "Культурно-исторический Фонд "Связь времен". Директор музея Фаберже'
                }
            ],
            managementDepartment: [
                {
                    id: 1,
                    img: Shulekina,
                    name: 'Шулекина Анна Викторовна',
                    post: 'Исполнительный директор НО "Культурно-исторический Фонд "Связь времен"'
                },
                {
                    id: 2,
                    img: Ovchinnikov,
                    name: 'Овчинников Михаил Владимирович',
                    post: 'Первый заместитель исполнительного директора Музея Фаберже, директор филиала НО "Культурно-исторический Фонд "Связь времен" в г. Санкт-Петербург',
                },
                {
                    id: 3,
                    img: Umarov,
                    name: 'Умаров Ринат',
                    post: 'Заместитель председателя НО "Культурно-исторический Фонд "Связь времен"'
                },
                {
                    id: 4,
                    img: Thaker,
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
                    img: Kuzm,
                    name: 'Кузьмичева Елена Юрьевна',
                    post: 'Заместитель директора филиала по эксплуатации здания'
                },
                {
                    id: 2,
                    img: Puchkova,
                    name: 'Пучкова Екатерина',
                    post: 'Заместитель директора филиала по связям с общественностью'
                },
                {
                    id: 3,
                    img: Grig,
                    name: 'Григорьева София Михайловна',
                    post: 'Заместитель директора по организационной работе и развитию',
                    func: 'Руководитель службы приема посетителей'
                },
                {
                    id: 4,
                    img: Savina,
                    name: 'Савина Марина',
                    post: 'Главный бухгалтер филиала НО КИФ “Связь времен” в г. Санкт-Петербург'
                },
                {
                    id: 5,
                    img: Kogan,
                    name: 'Коган Ирина',
                    post: 'Хранитель. Научный отдел.'
                }
            ],
            frontOffice: [
                {
                    id: 1,
                    img: Smirn,
                    name: 'Смирнова Ирина',
                    post: 'Менеджер по работе с корпоративными клиентами',
                    func: 'Работа с турфирмами, с заявками на экскурсионное обслуживание, безналичными платежами'
                },
                {
                    id: 2,
                    img: Pavl,
                    name: 'Павлинова Екатерина',
                    post: 'Старший экскурсовод-администратор',
                    func: 'Аккредитованные гиды, экскурсоводы Фонда, составление расписания экскурсий, графика работы гидов'
                },
                {
                    id: 3,
                    img: Star,
                    name: 'Старовойтова Екатерина',
                    post: 'Экскурсовод-администратор',
                    func: 'Координатор детских программ'
                },
                {
                    id: 4,
                    img: Shvets,
                    name: 'Швецова Варвара',
                    post: 'Старший администратор',
                    func: 'График работы кассиров-администраторов, обучение сотрудников, контроль за качеством сервиса'
                },
                {
                    id: 5,
                    img: Zbur,
                    name: 'Збуржинская Елизавета',
                    post: 'Старший кассир-администратор',
                    func: 'Обучение кассиров, контроль за соблюдением кассовой дисциплины, кассовой техникой и радиогидами'
                },
                {
                    id: 6,
                    img: Sherb,
                    name: 'Щербакова Кристина',
                    post: 'Старший кассир-администратор',
                    func: 'Заказ канцелярии, контроль за кассовой техникой и аудиогидами'
                },
                {
                    id: 7,
                    img: Grank,
                    name: 'Гранкина Анастасия',
                    post: 'Экскурсовод-администратор',
                    func: 'Волонтерская программа'
                },
                {
                    id: 8,
                    img: Bess,
                    name: 'Бессонов Дмитрий',
                    post: 'Администратор',
                    func: 'Верстка, дизайн, полиграфия, фото и видео съемка, монтаж'
                },
                {
                    id: 9,
                    img: frontOff,
                    name: 'Фронт-офис',
                    post: 'Экскурсоводы-администраторы и кассиры-администраторы'
                }
            ],
            maintenanceService: [
                {
                    id: 1,
                    img: Ches,
                    name: 'Чеснакова Татьяна Дмитриевна',
                    post: 'Заведующая хозяйственной частью',
                    func: 'Закупка расходных материалов, выдача бланков билетов'
                },
                {
                    id: 2,
                    img: Bulin,
                    name: 'Булин Евгений',
                    post: 'Инженер по пожарной безопасности и охране труда'
                },
                {
                    id: 3,
                    img: Alexeev,
                    name: 'Алексеев Павел',
                    post: 'Электрик'
                },
                {
                    id: 4,
                    img: Vasilev,
                    name: 'Васильев Евгений',
                    post: 'Электрик'
                },
                {
                    id: 5,
                    img: cleaning,
                    name: 'Сотрудницы клининговой службы'
                },
            ],
            bookKeeping: [
                {
                    id: 1,
                    img: Abubova,
                    name: 'Абубова Жанна',
                    post: 'Бухгалтер'
                },
                {
                    id: 2,
                    img: Zarubina,
                    name: 'Зарубина Ирина',
                    post: 'Бухгалтер',
                    func: 'Кадровое делопроизводство'
                },
            ],
            prDepartment: [
                {
                    id: 1,
                    img: Pshen,
                    name: 'Пшеничникова Анастасия',
                    post: 'PR-менеджер',
                    func: 'Создание контента для поддержки сайта и развития соц-сетей'
                },
                {
                    id: 2,
                    img: Kud,
                    name: 'Дарья Кудинова',
                    post: 'Интернет-маркетолог',
                    func: 'Продвижение Музея Фаберже через таргетированную и контекстную рекламу в сети'
                }
            ],
            security: [
                {
                    id: 1,
                    img: kombat,
                    post: 'Cотрудник “Комбат”, старший смены'
                },
                {
                    id: 2,
                    img: kombat,
                    post: 'Cотрудник “Комбат”, старший смены'
                },
                {
                    id: 3,
                    img: kombat,
                    post: 'Cотрудник “Комбат”, старший смены'
                }
            ],
            otherDepartment: [
                {
                    id: 1,
                    img: Agap,
                    name: 'Агапова Татьяна',
                    post: 'Секретарь филиала НО "Культурно-исторический Фонд "Связь времен" в г. Санкт-Петербург'
                },
                {
                    id: 2,
                    img: Smirnov,
                    name: 'Смирнов Илья',
                    post: 'Водитель филиала НО "Культурно-исторический Фонд "Связь времен" в г. Санкт-Петербург'
                },
                {
                    id: 3,
                    img: Chern,
                    name: 'Черных Ксения',
                    post: 'Менеджер по проектам'
                },
                {
                    id: 4,
                    img: Berez,
                    name: 'Березина Елена',
                    post: 'Менеджер по туризму'
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
                    img: Fedotov,
                    name: 'Федотов Антон Андреевич',
                    post: 'Заместитель генерального директора ООО “Лендом Плюс”'
                },
                {
                    id: 3,
                    img: Neimohov,
                    name: 'Неймохов Егор Егорович',
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
                    img: Guseva,
                    name: 'Гусева Кристина',
                    post: 'Директор по закупкам'
                },
                {
                    id: 2,
                    img: Zinov,
                    name: 'Зиновьева Дарья',
                    post: 'Администратор'
                },
                {
                    id: 3,
                    img: Rudenko,
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
                    // post: 'Независимый исследователь, искусствовед, куратор многочисленных выставок, посвященных Фаберже и его современникам, куратор Музея изящных искусств Вирджинии, консультант аукционного дома Sotheby’s'
                },
                {
                    id: 2,
                    img: Munt,
                    name: 'Татьяна Мунтян',
                    // post: 'Хранитель коллекции Фаберже в Оружейной Палате Московского Кремля, автор многочисленных книг и статей, посвященных Фаберже и его современникам, куратор выставок Фаберже во многих музеях мира'
                },
                {
                    id: 3,
                    img: Skurl,
                    name: 'Валентин Скурлов',
                    // post: 'Кандидат искусствоведения, специалист по архивным изысканиям, выявивший огромное количество документов по заказам Фаберже, в частности, все счета на пасхальные яйца; автор многочисленных книг по истории фирмы Карла Фаберже, в том числе и уникального исследования по системе клеймения; консультант аукционного дома Christie’s.'
                },
                {
                    id: 4,
                    img: Shaff,
                    name: 'Марк Шаффер',
                    // post: 'Управляющий нью-йоркской антикварной галереей A la Vieille Russie, основанной в 1851 году в Киеве, специализирующейся на произведениях ювелирного и изобразительного искусства дореволюционной России, изделиях Фаберже'
                },
                {
                    id: 5,
                    img: McCart,
                    name: 'Кирен МакКарти',
                    // post: 'Директор лондонской антиквартной компании Wartski, специализирующейся на изделиях Фаберже; искусствовед, обнаруживший в 2011 году утерянное, третье яйцо императорской серии'
                },
                {
                    id: 6,
                    img: Solod,
                    name: 'Александр фон Солодкофф',
                    // post: 'Известный специалист по русскому ювелирному искусству, автор книг по Фаберже, русскому золотому и серебряному делу'
                },
                {
                    id: 7,
                    img: Ulla,
                    name: 'Улла Тилландер-Гуденйелм',
                    // post: 'Независимый исследователь, искусствовед, специалист по финским мастерам фирмы Фаберже; куратор выставок и автор нескольких книг по ювелирному искусству России начала XX века; правнучка ювелира Александра Тилландера, сотрудничавшего с фирмой Фаберже'
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
                                src={Ovchinnikov1}
                                alt="Овчинников Михаил Владимирович"/>
                            <p className={styles.main__structure__wrapper__namesSection__item__name}><b>Овчинников
                                Михаил Владимирович</b></p>
                            <p className={styles.main__structure__wrapper__namesSection__item__position}>Первый заместитель исполнительного директора Музея Фаберже, директор филиала НО "Культурно-исторический Фонд "Связь времен" в г. Санкт-Петербург</p>
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
                        <p>{item.func}</p>
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

                    <BreadCrumbs
                        firstLevelLink='instructions' firstLevelDescription='Стандарты'
                        secondLevelDescription='Структура Музея и руководство'
                    />

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
                    <TextGradient/>
                    <ScrollToTop/>

                    <ArticlesSlider
                        prevArticle='standards' prevArticleDescription='Стандарты обслуживания'
                        nextArticle='situations' nextArticleDescription='Нестандартные ситуации'
                    />
                </React.Fragment>
            )
        };

        return (
            <StandardsSection/>
        );
    }
}

export default Structure;