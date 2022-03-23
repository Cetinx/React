import { useState } from 'react';
import './App.css';
import Coin from './components/Coin';
import Fetch from './components/Fetch';

function App() {



  return (
    <div className="App">
        <div className='header'>
        Header
        </div> 
        
        <br/> <br/> <br/>  <br/> <br/> <br/>

        <Fetch  />
        
      
     
        <br/> <br/> <br/>  <br/> <br/> <br/>

        <div className='footer'>
        Footer
        </div> 
        
 
  
    </div>
  );
}

export default App;
