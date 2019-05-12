import React from 'react';
import { Route } from 'react-router-dom'
import SignIn from './components/SignIn/SignInContainer'
import Boards from './components/Boards/BoardsContainer'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/boards" component={Boards}/>
    </main>
  </div>
);

export default App
