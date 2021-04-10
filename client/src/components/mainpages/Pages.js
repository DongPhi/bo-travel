import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Product from './product/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import NoteFound from './utils/not_found/NotFound'
function Pages() {
    return (
        <Switch>
            <Route path="/" exact component={Product} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />

            <Route path="*" exact component={NoteFound} />
        </Switch>
    )
}


export default Pages

