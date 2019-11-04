import React from 'react';

import styles from './footerStyles.module.css';

import icon1 from "../../media/icons/instagram.svg";
import icon2 from "../../media/icons/vk-social-logotype.svg";
import icon3 from "../../media/icons/facebook-logo.svg";
import icon4 from "../../media/icons/soundcloud-logo.svg";
import icon5 from "../../media/icons/open-book.svg";


const links = [
    'https://www.instagram.com/faberge_museum',
    'https://www.vk.com/fabergemuseum',
    'https://www.facebook.com/fabergemuseum/',
    'https://www.soundcloud.com/fabergemuseum/sets',
    'http://fabergemuseum.ru/faberge_expo.pdf'
];

const icons = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5
];

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.footer__wrapper}>

                <div className={styles.footer__wrapper__social}>
                    <h4 className={styles.footer__wrapper_center}>
                        {/*© 2019 */}
                        Музей Фаберже
                    </h4>
                    <ul className={`${styles.footer__wrapper__social__icons} ${styles.footer__wrapper_center}`}>
                        {
                            icons.map((icoSrc, i) =>
                                <li key={i}>
                                    <a href={links[i]}>
                                        <img
                                            className={styles.footer__wrapper__social__icons_active}
                                            src={icoSrc} alt="social logo" width="30" height="30" />
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div className={`${styles.footer__wrapper__contacts} ${styles.footer__wrapper_center}`}>
                    <div className={styles.footer__wrapper__contacts__mail}>
                        <p>Служба приема посетителей
                            <br/>
                            <a href="mailto:3332655@fsv.ru">3332655@fsv.ru</a>
                        </p>
                    </div>
                    <div className={styles.footer__wrapper__contacts__mail}>
                        <p>Дизайн и верстка: Дмитрий Бессонов
                            <br/>
                            <a href="mailto:d.bessonov@fsv.ru">d.bessonov@fsv.ru</a>
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
};

export default Footer;