
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Home from './Home';
import Dashboard from "./Dashboard";
import SignIn from './Sign.js';
import ShowMovieDetails from './ShowMovieDetails.js';

function App() {
  
  return (
    <div>
     <Router>
     {/* <Navbar /> */} 

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path='/movie/:id'  element={<ShowMovieDetails />}></Route>

      </Routes>
     
     </Router>
     
    </div>
  );
}

export default App;
