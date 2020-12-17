import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home'
import Auth from './components/auth'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';


function Router() {

  return (
    <React.StrictMode>
      <CookiesProvider>

        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/players" component={App} />
          <Route exact path="/login" component={Auth} />
        </BrowserRouter>

      </CookiesProvider>
    </React.StrictMode>

  )
}

ReactDOM.render(<Router />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
