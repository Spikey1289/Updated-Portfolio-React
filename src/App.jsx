// import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Outlet} from 'react-router-dom';
import NavHeader from './components/navHeader';
import FooterLinks from './components/pageFooter';

library.add(faS, faGithub, faEnvelope, faLinkedin);

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
