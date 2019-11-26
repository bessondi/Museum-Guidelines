import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


const BreadCrumbsNest = styled.ul`
    display: flex;
    list-style: none;
    margin: 0 0 20px;
    padding: 0;
`;
const BreadCrumbsItems = styled.li`
    display: flex;
    color: #333;
    margin: 0;
    padding: 0;
    /* font-weight: bold; */
    font-size: 0.8rem;
        &:before {
            content: ">";
            padding: 0 10px;
            color: #909090;
        }
        &:first-child:before {
            content: "";
            padding: 0;
        }
        & > a {
            color: #909090;
        }
        & > a:hover {
            text-decoration: none;
            color: #3072C4;
        }
        & > span {
            color: #909090;
        }
`;

const BreadCrumbs = (props) => {
    return (
        <React.Fragment>
            <BreadCrumbsNest>
            
                <BreadCrumbsItems>
                    <NavLink to='/'>
                        { document.documentElement.scrollWidth > 600 ? 
                        'Главная' 
                        : '...' }
                    </NavLink>
                </BreadCrumbsItems>

                <BreadCrumbsItems>
                    <NavLink to={`/${props.firstLevelLink}`}>{props.firstLevelDescription}</NavLink>
                </BreadCrumbsItems>

                <BreadCrumbsItems>
                    <span>{props.secondLevelDescription}</span>
                </BreadCrumbsItems>

            </BreadCrumbsNest>
        </React.Fragment>
    )
};

export default BreadCrumbs;