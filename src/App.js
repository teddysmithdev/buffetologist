import React from 'react';
import Layout from './components/Layout'
import Provider from './Provider'


function App() {
  return (
    <div>
    <Provider>
    <Layout />
    </Provider>
    </div>
  );
}

export default App;
