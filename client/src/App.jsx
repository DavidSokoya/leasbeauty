import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';


//Create a global header for all pages on the site, and render the target of the clicked route as the body of the page.

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
