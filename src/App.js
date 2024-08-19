import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Signup from "./pages/Signup"
function App() {
  

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App
