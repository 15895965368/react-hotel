import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import Main from './page/front/main'
import NoFound from './component/noFound'
import Login from './page/back/login'
import './util/http'
import 'antd/dist/antd.css';
import './assets/css/animate.css'
import './assets/css/index.css'


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/back/index"></Redirect>}></Route>
                <Route path="/front" component={Main}></Route>
                <Route path="/back" component={App}></Route>
                <Route path="/login" component={Login}/>
                <Route path="/404" component={NoFound}/>
                <Route component={NoFound}/>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
