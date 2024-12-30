import './App.css';
import Footer from './Components/Footer/Footer'
import Categories from './Components/Categories/Categories'
import Testimonial from './Components/Testimonial/Testimonial';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Home from './Components/Home';
import Fruits from './Components/Fruits/Fruits';
import Meat from './Components/Meat/Meat';
import Legumes from './Components/Legumes/Legumes';



import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element ={<Home />} ></Route>
        <Route path='Home' element ={<Home />} ></Route>
        <Route path='About' element ={<About/>} ></Route>
        <Route path='Testimonial' element ={<Testimonial />} ></Route>
        <Route path='Categories' element ={<Categories />} ></Route>
        <Route path='Fruits' element ={<Fruits />} ></Route>
        <Route path='Meat' element ={<Meat />} ></Route>
        <Route path='Legumes' element ={<Legumes />} ></Route> 
      </Routes>
      <Footer />
      
      
    </div>
    </Router>
  );
}

export default App;
