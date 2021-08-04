import React from 'react'
import './App.css';
import Contacts from './06_contacts/Contacts';
import Footer from './07_footer/Footer';
import Header from './01_header/Header';
import Main from './03_main/Main';
import Projects from './05_projects/Projects';
import Skills from './04_skills/Skills';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
