import React from 'react'

import Home from './Home';
import Contact from './Contact';
import Posts from './Posts';
import {
    Switch,
    Route,
} from "react-router-dom";


export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/post/:id">
                    <Posts />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}
