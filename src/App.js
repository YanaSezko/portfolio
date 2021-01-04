import React from 'react'
import './App.css';
import Contacts from './contacts/Contacts';
import Header from './header/Header';
import Main from './main/Main';
import Projects from './projects/Projects';
import Skills from './skills/Skills';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Skills />
      <Projects />
      <Contacts/>
      </div>
    
  );
}

export default App;
