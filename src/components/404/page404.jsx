import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';

import styles from './page404styles.module.css';
import travolta from '../../media/travolta.gif';
import image404 from '../../media/404.svg';


class Page404 extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const Wrapper = styled.div`
            padding-top: 50px;
        `;
        const LostPicture = styled.div`
            background: url(${image404}) no-repeat center;
            width: 600px;
            max-width: 100%;
            height: 300px;
            margin: -50px auto 0;
        `;
        const Text404 = styled.p`
            color: #3f3f41; 
            text-align: center;
            margin: -10px auto 50px;
            padding: 0 20px;
            max-width: 700px;
            text-decoration: none;
        `;
        const LostTravolta = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: -60px;
        `;

        return (
            <Wrapper>
                <LostPicture className={styles.image404}/>

                <Text404>
                    Кажется, этой страницы еще не существует :( <br/><br/>
                    Можете <Link to='/'><strong>вернуться на главную</strong></Link>,
                    полистать <Link to='/instructions'> <strong> инструкции</strong> </Link>
                    или заполнить еще <Link to='/reports'> <strong> пару отчетов</strong></Link>.
                </Text404>

                <LostTravolta className={styles.travolta}>
                    <img src={travolta} alt="Oops!" style={{height: 300}}/>
                </LostTravolta>
            </Wrapper>
        )
    }
}

export default Page404;