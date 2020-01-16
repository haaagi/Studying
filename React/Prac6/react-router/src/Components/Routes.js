// Components/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./Header";
import Aladin from "../Screens/aladin";
import LionKing from "../Screens/LionKing";
import SpiderMan from "../Screens/SpiderMan";
// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (
  <Router>
    <Header />
    <Route path="/aladin" component={Aladin} />
    <Route path="/lionking" component={LionKing} />
    <Route path="/spiderman" component={SpiderMan} />
  </Router>
)