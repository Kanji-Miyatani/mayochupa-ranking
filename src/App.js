import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Checkout from './Component/Checkout';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkOut" 
          element={
            <>
             <Header />
             <Checkout />
            </>
             } />
          <Route exact path="/" element={
             <>
              <Header />
              <Home />
            </>
          } />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

