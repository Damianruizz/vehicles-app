import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DashboardContainer } from './components/DashboardContainer/DashboardContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
