import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import IndexHome from './components/IndexHome';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
    <IndexHome/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
