import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';

import 'services';

import Root from './containers/Root';
import * as serviceWorker from './serviceWorker';
import store, { history } from './store';
import { GlobalStyle, theme, ThemeProvider } from './theme';

const PathRoot = () => (
  <Route path="/" component={Root}/>
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <PathRoot />
        </React.Fragment>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
