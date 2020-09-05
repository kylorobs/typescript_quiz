import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Quiz from './containers/Quiz';
import Home from './components/Home';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path='/begin' component={Quiz}></Route>
        {/* <Route path='/profile'></Route>
        <Route path='/topics'></Route> */}
        <Route exact path='/' component={Home}></Route>
        <Route render={()=> <h2>Oh no! You have hit the 404 page :(</h2>} ></Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
