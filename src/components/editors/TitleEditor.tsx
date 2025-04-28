import React from 'react';
import { useEditor, TitleData } from '../../context/EditorContext';

interface TitleEditorProps {
  id: string;
  content: TitleData;
}

const TitleEditor: React.FC<TitleEditorProps> = ({ id, content }) => {
  const { updateComponent } = useEditor();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateComponent(id, { ...content, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="title-text" className="block text-sm font-medium text-gray-700 mb-1">
          Texto do Título
        </label>
        <input
          type="text"
          id="title-text"
          name="text"
          value={content.text}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="title-font-size" className="block text-sm font-medium text-gray-700 mb-1">
          Tamanho da Fonte
        </label>
        <select
          id="title-font-size"
          name="fontSize"
          value={content.fontSize}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="1.2rem">Pequeno</option>
          <option value="1.5rem">Médio</option>
          <option value="2rem">Grande</option>
          <option value="2.5rem">Extra Grande</option>
        </select>
      </div>

      <div>
        <label htmlFor="title-color" className="block text-sm font-medium text-gray-700 mb-1">
          Cor do Texto
        </label>
        <div className="flex items-center">
          <input
            type="color"
            id="title-color"
            name="textColor"
            value={content.textColor}
            onChange={handleChange}
            className="w-10 h-10 border-0 p-0 mr-2"
          />
          <input
            type="text"
            name="textColor"
            value={content.textColor}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Prévia:</h3>
        <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
          <p 
            className="section-subtitle text-center" 
            style={{ 
              fontSize: content.fontSize, 
              color: content.textColor 
            }}
          >
            {content.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleEditor;