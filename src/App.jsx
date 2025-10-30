// App.jsx
import React from 'react';
import CountryInformation from './component/CountryInformation';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        🌍 Country Information Finder
      </h1>
      <CountryInformation />
    </div>
  );
}

export default App;
