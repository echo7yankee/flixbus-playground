import React from 'react'

//React router dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import { Dashboard } from './Components/Layout/Dashboard/Dashboard';

export const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/" component={Dashboard} exact />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
