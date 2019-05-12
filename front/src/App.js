import React from 'react';
import { Route } from 'react-router-dom'
import SignIn from './components/SignIn/SignInContainer'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={SignIn} />
    </main>
  </div>
);

export default App
