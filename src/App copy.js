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
        <div className="mt-4">
          <button 
            className={`px-4 py-2 mr-2 rounded ${activeTab === 'dashboard' ? 'bg-white text-blue-600' : 'bg-blue-500'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'simulador' ? 'bg-white text-blue-600' : 'bg-blue-500'}`}
            onClick={() => setActiveTab('simulador')}
          >
            Simulador de Cenários
          </button>
        </div>
      </header>
      
      <main className="p-4">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'simulador' && <SimuladorCenarios />}
      </main>
      
      <footer className="bg-gray-100 p-4 text-center text-gray-600 text-sm">
        Estudo de Metas de Captação - Estácio 25.2
      </footer>
    </div>
  );
}

export default App;