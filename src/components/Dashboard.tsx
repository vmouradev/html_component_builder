import React, { useState } from 'react';
import ComponentsList from './ComponentsList';
import PreviewArea from './PreviewArea';
import CodeView from './CodeView';
import { Layout, Code, Eye } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<'preview' | 'code'>('preview');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <Layout className="text-blue-600" size={24} />
          <h1 className="text-xl font-semibold text-gray-800">HTML Builder Dashboard</h1>
        </div>
        <div className="flex items-center bg-gray-100 rounded-md">
          <button
            className={`px-4 py-2 flex items-center gap-2 rounded-md ${
              activeView === 'preview' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveView('preview')}
          >
            <Eye size={18} />
            <span className="hidden sm:inline">Preview</span>
          </button>
          <button
            className={`px-4 py-2 flex items-center gap-2 rounded-md ${
              activeView === 'code' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveView('code')}
          >
            <Code size={18} />
            <span className="hidden sm:inline">Code</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Components Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
          <ComponentsList />
        </aside>

        {/* Main Area */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          {activeView === 'preview' ? <PreviewArea /> : <CodeView />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;