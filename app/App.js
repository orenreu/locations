import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router'
import routes from './config/routes'
import './styles/main.scss'

//Material UI Deps
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from './config/theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//Import React Router Deps
import {Provider} from 'react-redux'
import store, {history} from './store/configureStore'

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
            <Provider store={store}>
                <Router history={history}>{routes}</Router>
            </Provider>
        </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
