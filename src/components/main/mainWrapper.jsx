import React from 'react';
import {Route, Switch} from 'react-router-dom';

import styles from './mainWrapper.module.css';

import HomePage from "../home/homePage";
import Greeting from "../greeting/greeting";
import Instructions from "../instructions/instructions";
import Reports from "../reports/reports";
import Page404 from '../404/page404';


import Museum from "../instructions/items/museum";
import WorkOrder from "../instructions/items/workOrder";
import Standards from "../instructions/items/standards";
import Structure from "../instructions/items/structure";
import Situations from "../instructions/items/situations";
import Volunteers from "../instructions/items/volunteers";


const MainWrapper = () => {
    return (
        <div className={styles.main__wrapper}>

            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/greeting' component={Greeting}/>
                <Route path='/instructions' component={Instructions}/>
                    <Route path='/museum' component={Museum}/>
                    <Route path='/work-order' component={WorkOrder}/>
                    <Route path='/standards' component={Standards}/>
                    <Route path='/structure' component={Structure}/>
                    <Route path='/situations' component={Situations}/>
                    <Route path='/volunteers' component={Volunteers}/>
                <Route path='/reports' component={Reports}/>
                <Route component={Page404}/>
            </Switch>

        </div>
    )
};

export default MainWrapper;