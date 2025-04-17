import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import SimuladorCenarios from './SimuladorCenarios';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Análise de Metas Estácio 25.2</h1>
      </header>
      
      <main className="p-4">
        <Dashboard />
      </main>
      
      <footer className="bg-gray-100 p-4 text-center text-gray-600 text-sm">
        Estudo de Metas de Captação - Acelera 25.2
      </footer>
    </div>
  );
}

export default App;