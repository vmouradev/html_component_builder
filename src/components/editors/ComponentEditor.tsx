import React from 'react';
import { useEditor } from '../../context/EditorContext';
import TitleEditor from './TitleEditor';
import DescriptionEditor from './DescriptionEditor';
import ButtonEditor from './ButtonEditor';

const ComponentEditor: React.FC = () => {
  const { components, selectedComponent } = useEditor();

  if (!selectedComponent) {
    return null;
  }

  const component = components.find((c) => c.id === selectedComponent);

  if (!component) {
    return null;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Editor</h2>
      
      {component.type === 'title' && <TitleEditor id={component.id} content={component.content} />}
      {component.type === 'description' && <DescriptionEditor id={component.id} content={component.content} />}
      {component.type === 'button' && <ButtonEditor id={component.id} content={component.content} />}
    </div>
  );
};

export default ComponentEditor;