import {BrowserRouter , Route, Switch} from "react-router-dom"
import './App.css';
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/api" component={Navbar} />
        
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
