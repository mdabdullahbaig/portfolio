import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Interest from './components/Interest';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spinner from './components/commonComponents/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => { setSpinner(false) }, []);
  return (
      spinner ? <Spinner />: 
      <div>
        <NavBar />
            <Switch>
              <Route path="/about"  component={About} />
              <Route path="/education"  component={Education} />
              <Route path="/skill"  component={Skills} />
              <Route path="/project"  component={Project} />
              <Route path="/interest"  component={Interest} />
              <Route path="/contact"  component={Contact} />
              <Route path="/" exact  component={Home} />             
              <Redirect to="/" />
            </Switch>
        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
   )
  
}

export default App;
