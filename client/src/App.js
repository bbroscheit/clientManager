import {BrowserRouter , Route, Switch} from "react-router-dom"
import './App.css';
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route exact path="/" component={LandingPage} />
        
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
