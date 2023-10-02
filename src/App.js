import Home from "./pages/Home.jsx";
import Products from "./pages/AllProductspg.jsx"
import Group from "./pages/Group.jsx";
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import SignUp from "./pages/SignUp.jsx";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    //install router
   //https://stackabuse.com/redirects-in-react-router/
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/group' element={<Group/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
 
    </div>
    
    
  );
}

export default App;
