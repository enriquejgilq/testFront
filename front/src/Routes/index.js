import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom"
import Home from './Home/index';
import DetailProducts from './DetailProducts';
import CartPage from './CartPage';
 
export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/details/:id" >
                <DetailProducts />
            </Route>
            <Route exact path="/cart-page">
                <CartPage />
            </Route>
        </Switch>
    )
}