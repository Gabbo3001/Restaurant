import React from 'react';
import './App.css';
import TwitterFollowCard from './TwitterFollowCard';

function App() {
  return (
    <div className='div-app'>
      <TwitterFollowCard userName="Gabbo" name="Gabriel" />
      <TwitterFollowCard userName="Marco" name="Marco" />
      <TwitterFollowCard userName="Panda" name="Pandx"/>
    </div>
    
  );
}

export default App;
