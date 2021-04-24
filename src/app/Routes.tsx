import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SelectSide from './pages/SelectSide';
import Play from './pages/Play';

interface Props {

}

const Routes = (props: Props) => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={HomePage}
            />
            <Route
                exact
                path="/select"
                component={SelectSide}
            />
            <Route
                exact
                path="/play"
                component={Play}
            />
        </Switch>
    )
}

export default Routes;