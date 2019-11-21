import React from 'react';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

export default class ScrollToTop extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton style={{
                    width: 35, 
                    height: 35, 
                    fill: 'rgb(48, 114, 196)',
                    border: '2px solid rgb(48, 114, 196)',
                    bottom: 32,
                    right: 32,
                    outline: 'none',
                    backgroundColor: '#fff'
                    }}/>
            </div>
        );
    }
}