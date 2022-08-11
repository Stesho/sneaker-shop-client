import React from 'react';
import HomePage from './pages/home/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Collection from './pages/collection/Collection';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage/> */}
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
