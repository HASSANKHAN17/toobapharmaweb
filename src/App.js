import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import Overview from './components/AboutUs/Overview';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/overview" component={Overview} />
    </Switch>
  );
}

export default App;
