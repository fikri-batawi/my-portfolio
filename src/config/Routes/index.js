import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { About, Homepage } from '../../pages'
import { PantauCovid, Photos } from '../../pagesPortfolio'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/about" component={About}/>
                <Route path="/pantau-covid" component={PantauCovid}/>
                <Route path="/photos" component={Photos}/>
            </Switch>
        </Router>
    )
}

export default Routes
