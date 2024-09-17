import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Login from './pages/Login';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import User from './pages/User'; // Ensure User component exists
import ShareLayout from './components/ShareLayout';
import SingleProduct from './pages/SingleProduct';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      {/* <NavBar /> NavBar is included here */}
      <Routes>
        <Route path='/' element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='login' element={<Login setUser={setUser} />} />
        </Route>
        <Route path='dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }>
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
