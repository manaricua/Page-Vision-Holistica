import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home/';
import Information from '../pages/information/';
import Psicology from '../pages/psicology/';

const Routes = () => {
  
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/vision-holistica' exact component={Information}/>
                <Route path='/psicologia' exact component={Psicology}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;