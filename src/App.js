import Home from "./components/Home";
import FullScreen from './components/FullScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
           <Home />
        </Route>
        <Route path="/fullscreen">
         <FullScreen />
        </Route>
      </Router>
    </div>
  );
}

export default App;
