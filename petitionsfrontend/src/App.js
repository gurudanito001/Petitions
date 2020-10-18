import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import NewPetition from './components/NewPetition/newPetition';



function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/new-petition" component={NewPetition} exact />
      </Switch>
      
    </div>
  );
}

export default App;
