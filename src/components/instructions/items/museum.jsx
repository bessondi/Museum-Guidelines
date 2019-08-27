import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import LazyLoad from 'react-lazy-load';
import Scrollspy from 'react-scrollspy';

import route1 from '../../../media/1.png';
import route2 from '../../../media/2.png';
import route3 from '../../../media/3.png';
import route4 from '../../../media/4.png';

import styles from '../instructionsMainStyles.module.css';
import ScrollbarTop from "../../header/scrollbar/scrollbarTop";
import ScrollToTop from "../scrollToTopBtn/scrollToTopBtn";


class Museum extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const Intro = () => {
            return (
                <React.Fragment>
                    <p>Деятельность музея регламентируется несколькими основными приказами, расположенными в уголке
                        потребителя
                        в кассовой зоне Музея Фаберже (по адресу: набережная реки Фонтанки, 21):
                    </p>
                    <ul>
                        <li>Правилами посещения выставок и мероприятий</li>
                        <li>Правилами продажи билетов</li>
                        <li> Правилами участия в детских программах</li>
                        <li> Приказами о расценках</li>
                    </ul>
                    <p>Адрес: набережная реки Фонтанки, 21 (Шуваловский дворец)</p>
                    <p>Официальный сайт: <a href="http://www.fabergemuseum.ru">www.fabergemuseum.ru</a></p>
                    <p>Тел.: 8 (812) 333-26-55</p>
                    <p>Эл. почта: <a href="mailto:3332655@fsv.ru">3332655@fsv.ru</a></p>
                </React.Fragment>
            )
        };

        const Schedule = () => {
            return (
                <React.Fragment>
                    <div className="anchor">
                        <div id="schedule"/>
                        <h2>Режим работы</h2>
                    </div>

                    <div id="scheduleScrollSection">
                        <p>Ежедневно.</p>
                        <p>Касса работает с 9:30 до 20:15.</p>
                        <p>Экспозиция открывается и закрывается на 30 минут позже: 10:00 - 20:45.</p>
                        <p>Входные двери открыты до 21:00, чтобы дать возможность гостям сдать аудиогид, посетить
                            магазин,
                            гардероб
                            и уборные.</p>
                    </div>
                </React.Fragment>
            )
        };

        const Prices = () => {
            return (
                <React.Fragment>
                    <div className="anchor">
                        <div id="prices"/>
                        <h2>Расценки</h2>
                    </div>

                    <div id="pricesScrollSection">
                        <p>Цены на посещение мероприятий устанавливаются приказами “О расценках”. Ознакомиться с ценами
                            для
                            индивидуальных посетителей можно на официальном сайте fabergemuseum.ru и на информационных
                            стеллах
                            во
                            входной и кассовой зонах Музея Фаберже. Для индивидуальных посетителей существуют 3 градации
                            входных
                            билетов по стоимости: <b>полный, льготный и бесплатный</b>.
                        </p>
                    </div>
                </React.Fragment>
            )
        };

        const Privileges = () => {
            return (
                <React.Fragment>
                    <div className="anchor">
                        <div id="privileges"/>
                        <h2>Льготы</h2>
                    </div>

                    <div id="privilegesScrollSection">
                        <p>Полный перечень льгот утвержден Правилами продажи билетов. Льготный билет можно приобрести
                            (получить,
                            если речь о бесплатном билете) только в кассе Музея при предъявлении документа,
                            подтверждающего
                            право на
                            льготу, лично или в присутствии лица, претендующего на получение льготы. </p>
                    </div>
                </React.Fragment>
            )
        };

        const Services = () => {
            return (
                <React.Fragment>
                    <div className="anchor">
                        <div id="services"/>
                        <h2>Услуги</h2>
                    </div>

                    <div id="servicesScrollSection">
                        <div className={styles.tableWrapper}>
                            <table className={`${styles.table} ${styles.largeTable}`}>

                                <thead>
                                <tr>
                                    <th/>
                                    <th>Цена</th>
                                    <th>Условия получения</th>
                                    <th>Язык</th>
                                    <th>Характеристика</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Указатель по экспозиции*</td>
                                    <td>Бесплатно</td>
                                    <td>В свободном доступе в белых тумбах в экспозиционных залах</td>
                                    <td>Русский
                                        Английский
                                    </td>
                                    <td>Карта экспозиции; краткое описание тематики залов; этикетаж по всем экспонатам
                                        (за искл.
                                        витрины с тульской сталью в Рыцарском зале)
                                    </td>
                                </tr>
                                <tr>
                                    <td>Аудиогид**</td>
                                    <td>Платно***</td>
                                    <td>Под залог (1000 руб. наличными / номерок из гардероба). В качестве искл. - ключ
                                        от
                                        камеры
                                        хранения.
                                    </td>
                                    <td>Русский
                                        Английский
                                        Французский
                                        Итальянский
                                        Немецкий
                                        Испанский
                                    </td>
                                    <td>Подробное описание истории Музея, дворца, залов, основных экспонатов. Общая
                                        продолжительность всех записей - около 2,5 часов.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Экскурсия</td>
                                    <td>Платно***</td>
                                    <td>По сеансам согласно расписанию на текущий день (в дневные часы с 10:00 до
                                        18:00). Кол-во
                                        чел. в группе - 15. Возможно увеличение группы до 18 чел. (3 доп. билета
                                        отображаются
                                        только
                                        для кассира на мониторе).
                                    </td>
                                    <td>Русский
                                        Английский (1 сеанс в день в высокий сезон)
                                    </td>
                                    <td>Продолжительность - 1 час. Экскурсия обзорная - знакомство с Музеем Фаберже,
                                        Шуваловским
                                        дворцом и основными предметами коллекции
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>* И указатель, и аудиогид на русском и английском языках размещены в электронном виде на
                            официальном
                            сайте (fabergemuseum.ru). Во входной зоне для перехода по соответствующим ссылкам размещены
                            QR-коды.</p>
                        <p>** Аудиогидом на русском языке также можно воспользоваться в приложении izi.TRAVEL на IOS и
                            Android.</p>
                        <p>*** Стоимость аудиогида и экскурсионного обслуживания эквивалентны, чтобы посетитель думал не
                            о том,
                            как
                            ему выгоднее посетить музей, а о том, как было бы приятнее это сделать.</p>
                        <br/>
                        <br/>
                        <p>QR-коды</p>
                        <p>Расположены на стенах по обеим сторонам Парадной лестницы.</p>

                        <div className={styles.tableWrapper}>
                            <table className={`${styles.table} ${styles.smallTable}`}>
                                <thead>
                                <tr>
                                    <th/>
                                    <th>Тип</th>
                                    <th>Язык</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Указатель по экспозиции*</td>
                                    <td>PDF-файл</td>
                                    <td>Русский, английский</td>
                                </tr>
                                <tr>
                                    <td>Аудиогид</td>
                                    <td>HTML-ссылка на soundcloud.com</td>
                                    <td>Русский, английский</td>
                                </tr>
                                <tr>
                                    <td>Видеоролик с демонстрацией пасхальных шедевров</td>
                                    <td>Видео на Youtube (7:25 минут)</td>
                                    <td>Без вербального сопровождения (наименования яиц написаны на русском)</td>
                                </tr>
                                <tr>
                                    <td>Путеводитель по Музею</td>
                                    <td>PDF-файл</td>
                                    <td>Китайский</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>Чтобы посетитель мог воспользоваться QR-кодом, у него должно быть считывающее такие коды
                            приложение и
                            доступ к интернету.</p>
                    </div>
                </React.Fragment>
            )
        };

        const Booking = () => {
            return (
                <React.Fragment>
                    <div className="anchor">
                        <div id="booking"/>
                        <h2>Заказные экскурсии</h2>
                    </div>

                    <div id="bookingScrollSection">
                        <p>Отражены в расписаниях на день.</p>
                        <p>Проводятся:</p>
                        <ul>
                            <li>гидами Фонда (штатными экскурсоводами Музея Фаберже);</li>
                            <li>аккредитованными гидами (см. п. … ).</li>
                        </ul>
                        <p>Заявки на групповое экскурсионное обслуживание:</p>
                        <ul>
                            <li>может направить как турфирма, там к любое частное лицо;</li>
                            <li>принимаются только по почте (3332655@fsv.ru).</li>
                        </ul>
                        <p>Вид оплаты:</p>
                        <ul>
                            <li>в случае с договорными клиентами (турфирмы) - безналичная;</li>
                            <li>для разовых клиентов предусмотрена возможность оплатить заказ наличными или банковской
                                картой в
                                кассе Музея.
                            </li>
                        </ul>
                        <p>Численность группы - до 15 человек. Возможно увеличение до 18 человек (дополнительная плата
                            за
                            каждого
                            следующего человека сверх 15).</p>
                    </div>
                </React.Fragment>
            )
        };

        const Additional = () => {
            return (
                <React.Fragment>
                    <div className="anchor">
                        <div id="additional"/>
                        <h2>Дополнительные музейные продукты</h2>
                    </div>

                    <div id="additionalScrollSection">
                        <h3>Тематические экскурсии</h3>
                        <p>На июнь 2019 года утверждено 4 детские экскурсии, 3 из которых реализуются в том числе в
                            формате
                            детских
                            программ (экскурсия + мастер-класс):</p>
                        <ul>
                            <li><b>Адаптированная детская обзорная экскурсия по залам постоянной экспозиции Музея
                                Фаберже (7-17
                                лет).</b></li>
                            <p>Продолжительность: 45 минут</p>
                            <li><b>История пасхального яйца (7-12 лет)</b></li>
                            <p>Описание:</p>
                            <p>Ребята услышат историю появления и значения главного пасхального подарка — яйца, а также
                                узнают о
                                традициях украшения драгоценных пасхальных яиц и техниках, которые использовали мастера
                                фирмы
                                Фаберже при изготовлении подарков для русских императриц.</p>
                            <p>Мастер-классы:</p>
                            <ul>
                                <li>кулинарный по росписи пряников</li>
                                <li>по росписи деревянного яйца</li>
                                <p>Продолжительность: 90 минут (45 минут экскурсия + 45 минут мастер-класс)</p>
                            </ul>
                            <li><b>Драгоценный зоопарк (5-10 лет)</b></li>
                            <p>Описание:</p>
                            <p>Самые маленькие посетители музея и их родители могут поучаствовать в настоящем
                                приключении —
                                отправиться на поиск сказочных зверей, спрятавшихся в предметах коллекции Музея Фаберже.
                                На пути
                                ребятам встретится множество чудес: бульдог окажется конфетницей, сова притворится
                                печатью, а
                                божья
                                коровка станет брошью.</p>
                            <p>Мастер-классы:</p>
                            <ul>
                                <li>кулинарный по росписи пряников</li>
                                <li>по созданию произведений из полимерной глины (чаще всего броши)</li>
                            </ul>
                            <p>Продолжительность: 90 минут (45 минут экскурсия + 45 минут мастер-класс)</p>
                            <li><b>Диковинные вещицы Фаберже (9-14 лет)</b></li>
                            <p>Описание:</p>
                            <p>На экскурсии юные посетители узнают, почему в повседневной жизни невозможно было обойтись
                                без
                                марочницы, несессера и бонбоньерки, какие правила существовали для украшений и деталей
                                одежды, а
                                также как изменилась роль этих маленьких вещиц в нашей жизни за последние 100 лет.</p>
                            <p>Мастер-класс:</p>
                            <ul>
                                <li>Создание бонбоньерки</li>
                                <li>Продолжительность: 90 минут (45 минут экскурсия + 45 минут мастер-класс)</li>
                            </ul>
                        </ul>


                        <h3>Доступная среда</h3>
                        <p>Для организованных групп посетителей с ограниченными возможностями здоровья мы предлагаем
                            экскурсионное обслуживание по 3 адаптированным программам:</p>
                        <ul>
                            <li>для посетителей с нарушениями зрения</li>
                            <li>нарушениями слуха</li>
                            <li>расстройствами аутистического спектра (РАС)</li>
                        </ul>
                        <p>Экскурсия представляет собой обзорный тур по основной экспозиции Музея с учетом особенностей
                            восприятия данной категорией посетителей. Продолжительность - 45 до 60 минут. Проводится
                            экскурсоводом Музея на русском языке (а также в тандеме с переводчиком группы) с
                            использованием
                            методических вспомогательных материалов.</p>
                        <p>Для сотрудников организуются тренинги по взаимодействию с 4 группами посетителей: с
                            нарушениями зрения, слуха, опорно-двигательного аппарата и РАС.</p>
                        <p>В музей допускаются собаки-поводыри в наморднике и на шлейке при наличии соответствующих
                            документов.</p>
                        <p>Музей оборудован лифтом, пандусами, кнопками вызова сотрудников, а также может предоставить в
                            пользование 1 кресло-коляску и 2 детские коляски. Самоуправляемые скутеры (даже если
                            соответствуют требованиям по весу и габаритам) не приветствуются. По возможности вместо
                            скутера
                            предоставляется кресло-коляска Музея. Сам скутер можно оставить в холле на центральном
                            входе.</p>
                        <p>В случае, если посетитель не может ни воспользоваться своим средством передвижения
                            (трехколесные
                            или скутеры с низкой подвеской, которые не могут преодолеть пандусы на входе; чрезвычайно
                            тяжелые скутеры или кресла-коляски), ни пересесть на кресло-коляску Музея, сотрудники
                            вынуждены
                            отказать такому гостю в посещении. В таком случае в качестве извинения ему предлагается
                            бесплатный каталог (каталоги на русском и английском языках находятся в кассе).</p>
                        <p>Сопровождающие посетителей, использующих кресло-коляску для передвижения, имеют право
                            бесплатного доступа на экспозицию (независимо от гражданства).</p>
                        <p>Туалеты, оборудованные для маломобильных групп посетителей, находятся на первом этаже (под
                            Парадной лестницей и в кафе).</p>


                        <h3>Причал</h3>
                        <p>Организация-партнер - Астра Марин.</p>
                        <p> Продажа билетов на водные экскурсии осуществляется как на самом причале, так и в кассе
                            Музея.
                            Стоимость
                            билета в кассе Музея ниже на 100 рублей. Также посетителям Музея выдаются флаеры,
                            позволяющие
                            приобрести
                            билеты на причале с аналогичной скидкой. Срок действия - весь навигационный сезон текущего
                            года.
                            Информация по конкретным ценам обновляется ежегодно с началом навигации.
                        </p>
                        <p>Навигационный сезон - ориентировочно с апреля по ноябрь (в зависимости от погодной обстановки
                            точные
                            даты
                            могут варьироваться).</p>
                        <p>От причала Музея стартует несколько водных экскурсий:</p>

                        <div className={styles.wrapper__routes}>
                            <ul>
                                <li><b>Светский Петербург эпохи Фаберже (Faberge Canal Cruise)</b></li>
                                <p>Продолжительность: 1:15 минут.</p>
                                <p>Маршрут:</p>
                                <p>Дворцы и особняки на р. Фонтанка и р. Мойка, Крюков канал и район Коломна, Никольский
                                    собор,
                                    Мариинский театр, Новая Голландия, Юсуповский дворец, 3 цветных моста (Зеленый,
                                    Синий и
                                    Красный), Зимняя канавка, Эрмитаж, Мраморный дворец, Петропавловская крепость,
                                    Стрелка
                                    Васильевского острова, Адмиралтейство.</p>
                                <p>Языки: Аудиоэкскурсия на русском и английском языках.</p>
                                <LazyLoad>
                                    <img className={styles.wrapper__routeImages} src={route1} alt="Маршрут-1"/>
                                </LazyLoad>
                                <li><b>City Sightseeng Neva</b></li>
                                <p>На маршруте действует система Hop-on Hop-off, дающая право приобрести билет на 1 день
                                    или на
                                    2
                                    часа с возможностью высадки и посадки на остановках маршрута.</p>
                                <p>Маршрут:</p>
                                <p>Дворцы и особняки на р. Фонтанка и р. Мойка, Крюков канал и район Коломна, Никольский
                                    собор,
                                    Мариинский театр, Новая Голландия, Юсуповский дворец, 3 цветных моста (Зеленый,
                                    Синий,
                                    Красный),
                                    Храм Спаса-на-Крови, Зимняя канавка, Эрмитаж, Адмиралтейство, Стрелка Васильевского
                                    острова,
                                    Мраморный дворец, Петропавловская крепость.</p>
                                <p>Языки: Аудиоэкскурсия на русском и английском языках.</p>
                                <LazyLoad>
                                    <img className={styles.wrapper__routeImages} src={route2} alt="Маршрут-2"/>
                                </LazyLoad>
                            </ul>

                            <p>Также в кассах Музея есть возможность продажи билетов на 2 вечерних музыкальных круиза, а
                                именно:</p>

                            <ul>
                                <li><b>Джаз по рекам и каналам</b></li>
                                <p>Продолжительность: 1:30 минут.</p>
                                <p>Маршрут:</p>
                                <p>Весь исторический центр Петербурга с воды: Исаакиевский собор, Казанский собор,
                                    Эрмитаж,
                                    Адмиралтейство, Петропавловская крепость, крейсер «Аврора», Свято-Троицкий
                                    Измайловский
                                    собор.</p>
                                <LazyLoad>
                                    <img className={styles.wrapper__routeImages} src={route3} alt="Маршрут-3"/>
                                </LazyLoad>

                                <li><b>Романтика разводных мостов</b></li>

                                <p>Продолжительность: 1:30 минут.</p>
                                <p>Маршрут:</p>
                                <p>Главные разводные мосты Большой Невы. Среди них - Дворцовый и Троицкий. Под
                                    сопровождение
                                    саксофона гости увидят Шереметевский дворец, Михайловский замок,
                                    Храм Спаса на Крови, Крейсер «Аврора», Петропавловскую крепость, Кунсткамеру,
                                    Ростральные
                                    колонны.</p>
                                <LazyLoad>
                                    <img className={styles.wrapper__routeImages} src={route4} alt="Маршрут-4"/>
                                </LazyLoad>
                            </ul>
                        </div>

                        <p>Петергоф экспресс</p>
                        <p> На причале продаются входные билеты в Музей (только входные, не экскурсии). Гости получают
                            ваучер, который необходимо обменять на билеты в кассе Музея. На таких билетах
                            значится конкретное время, но оно не определяет время посещения музея.</p>
                        <div className={styles.main__museum__wrapper_boxInfo}>
                            <p>Для кассиров:</p>
                            <p>Проданные на причале билеты фигурируют в расписании по личному кабинету под наименованием
                                “Петергоф
                                Экспресс”. На ваучере, с которым приходят гости, указан номер заказа, по которому и
                                ведется
                                печать
                                билетов. В конце дня все оставшиеся билеты (непришедших посетителей) из личного кабинета
                                печатаются!
                                Продажа билетов осуществляется в том числе день в день, поэтому расписание по ЛК
                                необходимо
                                проверять ежедневно перед закрытием кассовой смены.</p>
                        </div>
                    </div>
                </React.Fragment>
            )
        };

        const OnlineTickets = () => {
            return (
                <React.Fragment>
                    <div className="anchor">
                        <div id="onlineTickets"/>
                        <h2>Онлайн билеты</h2>
                    </div>

                    <div id="onlineTicketsScrollSection">
                        <p>Билеты в Музей можно приобрести заранее на официальном сайте fabergemuseum.ru</p>
                        <p>Онлайн-билеты:</p>
                        <ul>
                            <li>Онлайн-билеты:</li>
                            <li>Не продаются на текущий день (только заранее)</li>
                            <li>Входные билеты выложены в продажу на неделю вперед, экскурсионные - на 2-3 следующих
                                дня
                            </li>
                            <li>Предусматривают внеочередное обслуживание</li>
                        </ul>
                    </div>
                </React.Fragment>
            )
        };

        const AsideMenu = () => {
            return (
                <div className={styles.wrapper__pageNav}>
                    <Scrollspy
                        items={['scheduleScrollSection', 'pricesScrollSection', 'privilegesScrollSection', 'servicesScrollSection', 'bookingScrollSection', 'additionalScrollSection', 'onlineTicketsScrollSection']}
                        currentClassName={styles.wrapper__pageNav_activeScroll}
                        offset={-150}
                    >
                        <li><Link to="#schedule" className={styles.wrapper__pageNav_activeLinks}>Режим работы</Link>
                        </li>
                        <li><Link to="#prices" className={styles.wrapper__pageNav_activeLinks}>Расценки</Link></li>
                        <li><Link to="#privileges" className={styles.wrapper__pageNav_activeLinks}>Льготы</Link></li>
                        <li><Link to="#services" className={styles.wrapper__pageNav_activeLinks}>Услуги</Link></li>
                        <li><Link to="#booking" className={styles.wrapper__pageNav_activeLinks}>Заказные
                            экскурсии</Link></li>
                        <li><Link to="#additional" className={styles.wrapper__pageNav_activeLinks}>Дополнительные
                            музейные продукты</Link></li>
                        <li><Link to="#onlineTickets" className={styles.wrapper__pageNav_activeLinks}>Онлайн
                            билеты</Link></li>

                    </Scrollspy>
                </div>
            )
        };

        const ActiveMenu = () => {
            return (
                <React.Fragment>
                    <h1>Знакомство с Музеем</h1>

                    <div className={styles.wrapper__asidePageNav_active}>
                        <AsideMenu/>
                    </div>
                </React.Fragment>
            )
        };

        const MuseumSection = () => {
            return (
                <React.Fragment>
                    <ScrollbarTop show='show'/>

                    <div className={styles.wrapper__asidePageNav_hidden}>
                        <AsideMenu/>
                    </div>

                    <div className={styles.wrapper}>
                        <ActiveMenu/>

                        <Intro/>
                        <Schedule/>
                        <Prices/>
                        <Privileges/>
                        <Services/>
                        <Booking/>
                        <Additional/>
                        <OnlineTickets/>
                    </div>

                    <ScrollToTop/>
                </React.Fragment>
            )
        };

        return (
            <MuseumSection/>
        );
    }
}

export default Museum;