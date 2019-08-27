import React from 'react';

import Header from "./components/header/header";
import MainWrapper from "./components/main/mainWrapper";
import Footer from "./components/footer/footer";

import './App.css';


function App() {
    return (
        <div className="app">
            <Header/>
            <MainWrapper/>
            <Footer/>
        </div>
    );
}

export default App;