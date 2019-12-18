import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import PartiesComponent from './PartiesComponent';
import PartyComponent from './PartyComponent';
import PartyParticipantsComponent from './PartyParticipantsComponent';


(function initialize() {
    var routers =
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={PartiesComponent} />
                <Route exact path='/parties' component={PartiesComponent} />
                <Route path='/parties/:id/participants' component={PartyParticipantsComponent} />
                <Route path='/parties/:id' component={PartyComponent} />
            </Switch>
        </BrowserRouter>;
    ReactDOM.render(
        routers,
        document.getElementById('container')
    );
})();


