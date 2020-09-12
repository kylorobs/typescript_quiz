import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Quiz from './containers/Quiz';
import Home from './components/Home';
import { theme } from './theme/theme';
import styled from 'styled-components';

const Layout = styled.div`
  background-color: ${theme.colors.grey};
  min-height: 100vh;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path='/quiz' component={Quiz}></Route>
          <Route exact path='/' component={Home}></Route>
          <Route render={()=> <h2>Oh no! You have hit the 404 page :(</h2>} ></Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
