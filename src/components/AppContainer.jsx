import React from 'react';

import Header from "./header/header";
import MainWrapper from "./main/mainWrapper";
import Footer from "./footer/footer";

import '../App.css';


function AppContainer() {
    return (
        <div className="app">
            <Header/>
            <MainWrapper/>
            <Footer/>
        </div>
    );
}

export default AppContainer;