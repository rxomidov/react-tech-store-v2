import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Products from "./pages/Products";

export default function App() {
    return <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
            <Route path="/checkout">
                <Checkout/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route exact path="/products">
                <Products/>
            </Route>
            <Route path="/products/:id"
                   children={<ProductDetails></ProductDetails>}>

            </Route>
            <Route path="*">
                <Error/>
            </Route>
        </Switch>
    </Router>;
}
