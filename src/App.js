import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Order from './Order';
import{BrowserRouter as Router,Route , Link , Switch} from 'react-router-dom';
import Ink from './components/Ink';
import Status from './components/Status';
import Callus from './components/Callus';
import Mailus from  './components/Mailus';
import Webdev from './components/Webdev';
import Printers from './components/Printers';


function App() {
  return (
    <div className="App">
                <Switch>
                <Router>
               <Header />
                
               <Route path="/ssprinters/ink" exact component={Ink} />
              <Route  path="/ssprinters/home" exact component={Home}/>
              <Route path="/ssprinters/webdev" exact component={Webdev} />
              <Route  path="/ssprinters/order" exact component={Order}/>
              <Route path="/ssprinters/status" exact component={Status}/>
              <Route path="/ssprinters/callus" exact component={Callus} />
              <Route path="/ssprinters/mailus" exact component={Mailus} />
              <Route path="/ssprinters/printers" exact component={Printers} />
              <Route path="/ssprinters/" exact component={Home}/>
              
                  </Router>
                  </Switch>
     
    </div>
  );
  }

export default App;
