import React from 'react';
import { Route } from 'react-router-dom'
import SignIn from './components/SignIn/SignInContainer'
import SignUp from './components/SighUp/SighUpContainer'
const App = () => (
  <div>
    <main>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/registration" component={SignUp}/>
    </main>
  </div>
);

export default App
