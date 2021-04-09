import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import Slide from './components/slides/Slide'
import MainPages from './components/mainpages/Pages'
import Search from './components/searchs/Search'


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Slide />
          <Search />
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
