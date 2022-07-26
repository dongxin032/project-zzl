import React , { Component, Suspense, lazy } from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';
const Home = lazy(() => import('./views/Home'));
const Service = lazy(() => import('./views/Service'));
const Privacy = lazy(() => import('./views/Privacy'));
const About = lazy(() => import('./views/About'));

class App extends Component {
    render(){
        return(
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/service" component={Service} />
                    <Route exact path="/privacy" component={Privacy} />
                    <Route exact path="/about" component={About} />
                    <Redirect to="/"/>
                </Switch>
            </Suspense>
        )
    }
}
export default App;
