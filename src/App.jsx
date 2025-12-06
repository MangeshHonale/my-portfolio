import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TabSet from "./components/TabSet/TabSet";
import ContactMe from "./components/ContactMe/ContactMe";
import './App.css';

function App() {

  return (
    <div className="app">
      <Header />
      <Hero />
      <TabSet />
      <ContactMe id="contact"/>
    </div>
    
  );
}

export default App
