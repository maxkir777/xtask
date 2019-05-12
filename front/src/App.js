import React from 'react';
import { Route } from 'react-router-dom'

import SignIn from './components/SignIn/SignInContainer'
import SignUp from './components/SighUp/SighUpContainer'
import Boards from './components/Boards/BoardsContainer'
import DetailBoard from './components/DetailBoard/DetailBoardContainer';
import LogOut from './components/LogOut/LogOut';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/registration" component={SignUp}/>
      <Route exact path = "/logout" component = {LogOut}/>
      <Route exact path="/boards" component={Boards}/>
      <Route path="/boards/:id" component={DetailBoard}/>
    </main>
  </div>
);

export default App


//Todo add cart into board rout boards - button create new board
//
