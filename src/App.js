import React from 'react';
import { Route, Switch } from 'react-router-dom'

import GlobalStyle from '../src/styles/GlobalStyle';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <>
    <GlobalStyle />
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/result" component={ResultPage} />
    </Switch>
    </>
  );
}

export default App;
