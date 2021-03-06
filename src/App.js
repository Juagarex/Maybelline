import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/HomePage/Home'
import { Navbar} from  './components';
import {Footer} from './components/Footer/Footer'
import {GlobalStyle} from './globalStyles'
import {FooterData} from './pages/HomePage/Data'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer {...FooterData}/>
    </Router>
  );
}

export default App;
