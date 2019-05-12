import React from 'react';
import { Route } from 'react-router-dom'

import SignIn from './components/SignIn/SignInContainer'
import SignUp from './components/SighUp/SighUpContainer'
import Boards from './components/Boards/BoardsContainer'
import DetailBoard from './components/DetailBoard/DetailBoardContainer';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/registration" component={SignUp}/>
      <Route exact path="/boards" component={Boards}/>
      <Route path="/boards/:id" component={DetailBoard}/>
    </main>
  </div>
);

export default App
