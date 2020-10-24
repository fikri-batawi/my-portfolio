import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { About, Homepage } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/about" component={About}/>
            </Switch>
        </Router>
    )
}

export default Routes
