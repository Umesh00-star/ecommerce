import React from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import AgeFilter from './components/AgeFilter';
import ComingSoonBanner from './components/ComingSoonBanner';
import NauriBot from './components/NauriBot';
import ComingSoonSection from './components/ComingSoonSection';
import Footer from './components/Footer';

import NavBar from './components/NavBar';


function App() {
  return (
    <div>
       <NavBar />
      <Hero />
      <Categories />
      <AgeFilter />
      <NauriBot />
      <ComingSoonSection  />
      <Footer />
    </div>
  );
}

export default App;
