import React from  'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}
