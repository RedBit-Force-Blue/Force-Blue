import React from 'react';
import './App.css';
import Profile from './Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Perfil de Usuario</h1>
      </header>
      <main>
        <Profile />
      </main>
    </div>
  );
}

export default App;