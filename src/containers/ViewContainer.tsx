import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MasterView from './MasterView'
import PrivacyView from './PrivacyView'

export default function ViewContainer() {
    return (
        <Switch>
            <Route exact path='/' component={MasterView} />
            <Route path='/privacy' component={PrivacyView} />
        </Switch>
    )
}