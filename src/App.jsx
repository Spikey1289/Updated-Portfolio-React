// import { useState } from 'react';
import {Outlet} from 'react-router-dom';
import NavHeader from './components/navHeader';
import FooterLinks from './components/pageFooter';

function App() {
  return (
    <div className='basePage'>
        <NavHeader />
        <Outlet />
        <FooterLinks/>
    </div>
  );
}

export default App
