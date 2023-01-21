import React from 'react';
import './App.css' ;

import {Blog , Footer , Header , Features , Possibility , WhatGPT3} from './containers' ;
import { Cta , Brand , Navbar , Feature } from './components' ; 


const App = () => {
    return (
        <div className='App'>
           <div className='gradient__bg'>
            <Navbar />
            <Header />
           </div>
           <Brand />
           <WhatGPT3 />
           <Feature />
           <Possibility />
           <Cta />
           <Blog />
           <Footer />
          
        </div>
    );
};

export default App;