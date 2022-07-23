import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import store from './services/store/index';
import Feedback from './pages/feedbackForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Switch>
          <Route exact path="/" component={ Feedback } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
