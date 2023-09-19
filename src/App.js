import Home from "./pages/Home.jsx";
import Products from "./pages/AllProductspg.jsx"
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    //install router
   //https://stackabuse.com/redirects-in-react-router/
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
 
    </div>
    
    
  );
}

export default App;
