import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TabSet from "./components/TabSet/TabSet";
import { useRef } from 'react';
import './App.css';

function App() {
  const hero = useRef();
  const tabSet = useRef();
  function handleNavigation(event){
    const sectionId = event.target.id;
    if(sectionId === "about-me"){
      hero.current.focus();
    }else{
      tabSet.current.selectTab(sectionId);
    }
  }
  return (
    <div className="app">
      <Header onNavigation={handleNavigation}/>
      <Hero ref={hero}/>
      <TabSet ref={tabSet}/>
    </div>
    
  );
}

export default App
