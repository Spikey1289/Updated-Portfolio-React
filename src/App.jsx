// import { useState } from 'react';
import {Outlet} from 'react-router-dom';
import NavTabs from './components/navHeader';

function App() {
  return (
    <div className='basePage'>
        <NavTabs />
        <Outlet />
    </div>
  );
}

export default App
