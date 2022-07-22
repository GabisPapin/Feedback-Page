import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feedback from './pages/feedbackForm';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/feedback" component={ Feedback } />
      </Switch>
    </div>
  );
}

export default App;
