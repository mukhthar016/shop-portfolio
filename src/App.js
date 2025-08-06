import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ProductList />
      <About />
      <Contact />
    </div>
  );
}

export default App;
