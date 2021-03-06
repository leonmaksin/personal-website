import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
// import MainPage from './components/MainPage';
// import SomePage from './components/SomePage';
// import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    {/* <Route path="/" component={MainPage} /> */}
    {/* <Route path="/some/where" component={SomePage} />
    <Route path="/some/otherpage" component={SomeOtherPage} /> */}
  </Route>
);
