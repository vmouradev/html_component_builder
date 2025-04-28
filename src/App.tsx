import React from 'react';
import { EditorProvider } from './context/EditorContext';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EditorProvider>
        <Dashboard />
      </EditorProvider>
    </div>
  );
}

export default App;