import React from 'react'
import './App.css';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Hire from './toHire/Hire';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Skills />
      <Projects />
      <Hire />
      <Contacts/>
      <Footer />
      </div>
    
  );
}

export default App;
