import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  
} from "react-router-dom";
import Home from './component/Home'
import Add from './component/Add';
import Edit from './component/Edit';


function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Router>
        <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path= "/create" element={<Add/>}/>
        <Route path= "/edit" element={<Edit/>}/>
  
    </Routes>
    </Router>
    </div>
  );
}

export default App;


