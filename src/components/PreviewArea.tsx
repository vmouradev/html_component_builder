import React from 'react';
import { useEditor, ComponentData } from '../context/EditorContext';
import ComponentEditor from './editors/ComponentEditor';
import EditableTitle from './preview/EditableTitle';
import EditableDescription from './preview/EditableDescription';
import EditableButton from './preview/EditableButton';
import { ChevronUp, ChevronDown, X } from 'lucide-react';

const PreviewArea: React.FC = () => {
  const { components, selectedComponent, selectComponent, removeComponent, moveComponent } = useEditor();

  const renderComponent = (component: ComponentData) => {
    const isSelected = selectedComponent === component.id;
    
    const componentActions = (
      <div className="component-actions absolute top-0 right-0 flex space-x-1 bg-white border border-gray-200 rounded-md shadow-sm p-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            moveComponent(component.id, 'up');
          }}
          className="p-1 text-gray-500 hover:text-blue-600 rounded-md hover:bg-blue-50"
          title="Mover para cima"
        >
          <ChevronUp size={16} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            moveComponent(component.id, 'down');
          }}
          className="p-1 text-gray-500 hover:text-blue-600 rounded-md hover:bg-blue-50"
          title="Mover para baixo"
        >
          <ChevronDown size={16} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeComponent(component.id);
          }}
          className="p-1 text-gray-500 hover:text-red-600 rounded-md hover:bg-red-50"
          title="Remover componente"
        >
          <X size={16} />
        </button>
      </div>
    );

    switch (component.type) {
      case 'title':
        return (
          <div
            key={component.id}
            className={`preview-component mb-4 p-2 ${isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}
            onClick={() => selectComponent(component.id)}
          >
            {componentActions}
            <EditableTitle content={component.content} />
          </div>
        );
      case 'description':
        return (
          <div
            key={component.id}
            className={`preview-component mb-4 p-2 ${isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}
            onClick={() => selectComponent(component.id)}
          >
            {componentActions}
            <EditableDescription content={component.content} />
          </div>
        );
      case 'button':
        return (
          <div
            key={component.id}
            className={`preview-component mb-4 p-2 ${isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}
            onClick={() => selectComponent(component.id)}
          >
            {componentActions}
            <EditableButton content={component.content} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col lg:flex-row">
      <div className="flex-1 overflow-y-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Prévia</h2>
          <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[400px]">
            <div className="container mx-auto">
              {components.map((component) => renderComponent(component))}
            </div>
          </div>
        </div>
      </div>

      {/* Editor Sidebar - only visible when a component is selected */}
      {selectedComponent && (
        <div className="w-full lg:w-80 bg-white p-4 border-t lg:border-l lg:border-t-0 border-gray-200 overflow-y-auto">
          <ComponentEditor />
        </div>
      )}
    </div>
  );
};

export default PreviewArea;