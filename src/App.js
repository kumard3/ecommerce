import React from 'react';
import { Switch, Route } from 'react-router-dom';

// layouts
import MainLayout from './layouts/MainLayout';
// import HomepageLayout from './layouts/HomepageLayout';
import HomepageLayout  from './layouts/HomePageLayout'
// pages
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import './default.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout >
            <HomePage />
          </HomepageLayout>
        )} />
        <Route path="/registration" render={() => (
          <MainLayout >
            <Registration />
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;