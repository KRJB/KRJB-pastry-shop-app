import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders'
import AdminRoute from './components/Admin/AdminRoute';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Orders" element={<AdminRoute>
      <Orders />
     </AdminRoute>} />
        
    </Routes>

    </div>
  );
}

export default App;
