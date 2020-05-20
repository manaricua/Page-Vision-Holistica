import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home/';
import Information from '../pages/information/';
import Psicology from '../pages/psicology/';
import Acupuncture from '../pages/acupuncture/';
import MetSanHol from '../pages/metSanHol/';
import Massagge from '../pages/massagge/';
import Taichichuan from '../pages/taichichuan/';
import Chickung from '../pages/chickung/';
import Lecture from '../pages/lecture/';
import About from '../pages/about/';

const Routes = () => {
  
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/vision-holistica' exact component={Information}/>
                <Route path='/psicologia' exact component={Psicology}/>
                <Route path='/acupuntura' exact component={Acupuncture}/>
                <Route path='/metodo-sanacion-holistico' exact component={MetSanHol}/>
                <Route path='/masajes' exact component={Massagge}/>
                <Route path='/taichichuan' exact component={Taichichuan}/>
                <Route path='/chickung' exact component={Chickung}/>
                <Route path='/grupo-lectura' exact component={Lecture}/>
                <Route path='/nosotros' exact component={About}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;