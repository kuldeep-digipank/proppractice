import logo from './logo.svg';
import './App.css';
import TrendingDestination from './Component/TrendingDestination/TrendingDestination';
import HolidayDestination from './Component/HolidayDestination/HolidayDestination';
import SpecialHolidayDestination from './Component/SpecialHolidayDestination/SpecialHolidayDestination';
import Adventure from './Component/Adventure/Adventure';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Testimonial from './Component/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <TrendingDestination></TrendingDestination>
        <HolidayDestination />
        <SpecialHolidayDestination />
        <Adventure />
        <Blog></Blog>
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;
