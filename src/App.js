import {Navbar} from './components/NavBar/navbar'
import { Intro } from "./components/NavBar/Intro/intro";
import { Contact } from './components/NavBar/Contact/contact';
import { Footer } from './components/Footer/footer';
import { Works } from './components/NavBar/Works/works';
import { Skill } from './components/NavBar/Skills/skill';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
      <wk/>
    </div>
  );
}

export default App;
