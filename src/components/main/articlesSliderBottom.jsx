import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';


const Slider = styled.ul`
    display: flex;
    position: sticky;
    justify-content: space-around;
    height: 50px;
    margin: -60px 0 0 0;
    padding: 0;
    
    /* @media (max-width: 600px) {  */
        border: 1px solid #3072C4;
        border-radius: 10px;
            & > a {
                width: 100%;
            }
            &:after {
                content: "";
                position: absolute;
                height: 30px;
                top: 20%;
                left: 50%;

        ${props => {
            if (props.noneSeparator) {
                return `
                    border: 0;
                `;
            } else {
                return `
                    border-right: 1px solid #3072C4;
                `;
            }
        }}
            }
    /* } */
`;

const Prev = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: #3072C4;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    text-align: center;
        &:before {
            content: "<";
            padding: 0 10px 0 0;
        }
        &:hover {
            text-decoration: none;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
        & > a {
            display: flex;
        }

        width: 100%;
        border: 0;
            &:hover {
                box-shadow: none;
                font-weight: bold;
            }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;
const Next = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: #3072C4;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    text-align: center;
        &:after {
            content: ">";
            padding: 0 0 0 10px;
        }
        &:hover {
            text-decoration: none;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
        width: 100%;
        border: 0;
            &:hover {
                box-shadow: none;
                font-weight: bold;
            }
    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;


const ArticlesSlider = (props) => {
    return (
        <Slider noneSeparator={props.noneSeparator}>
            {props.prevArticle ?
                <NavLink to={`/${props.prevArticle}`}><Prev> {props.prevArticleDescription} </Prev></NavLink>
                : null}

            {props.nextArticle ?
                <NavLink to={`/${props.nextArticle}`}><Next> {props.nextArticleDescription} </Next></NavLink>
                : null}
        </Slider>
    )
};

export default ArticlesSlider;