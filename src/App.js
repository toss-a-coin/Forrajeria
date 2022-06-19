import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Produts from './components/Products';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/productos" element={<Products />} />
        </Routes>
      </Router>
  );
}

export default App;
