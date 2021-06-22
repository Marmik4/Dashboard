import './App.css';
import DashBoard from './components/Pages/DashBoard/DashBoard';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
        <Route path = "/login">
            <Login/>
          </Route>
          <Route path = "/register">
            <Register/>
          </Route>
          <Route path = "/dashboard">
            <DashBoard/>
          </Route>       
        </Switch>        
      </main>
    </BrowserRouter>
  );
}

export default App;
