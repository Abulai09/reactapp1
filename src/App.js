import './App.scss';
import About from './Components/about/about';
import Banner from './Components/banner/banner';
import Card from './Components/card/card';
import Contact from './Components/Contact/contact';
import Footer from './Components/footer/footer';
import Header from './Components/Header/header';
import Peculiarity from './Components/peculiarity/pec';
import Sliderr from './Components/Slider/Slider';

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Peculiarity/>
      <Sliderr/>
      <Contact/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;