import React from 'react';
import Weather from './components/Weather';
import News from './components/News';
import Shopping from './components/Shopping';

function App() {
  return (
 <div>
   <h1>Welcome to the Weather App</h1>
   <Weather />
   <News />
   <Shopping />
 </div>
  );
}

export default App;
