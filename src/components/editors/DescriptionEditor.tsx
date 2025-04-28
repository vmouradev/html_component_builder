import React from 'react';
import { useEditor, DescriptionData } from '../../context/EditorContext';
import { Plus, Trash } from 'lucide-react';

interface DescriptionEditorProps {
  id: string;
  content: DescriptionData;
}

const DescriptionEditor: React.FC<DescriptionEditorProps> = ({ id, content }) => {
  const { updateComponent } = useEditor();

  const handleLineChange = (index: number, value: string) => {
    const newLines = [...content.lines];
    newLines[index] = value;
    updateComponent(id, { ...content, lines: newLines });
  };

  const addLine = () => {
    updateComponent(id, { ...content, lines: [...content.lines, ''] });
  };

  const removeLine = (index: number) => {
    if (content.lines.length > 1) {
      const newLines = content.lines.filter((_, i) => i !== index);
      updateComponent(id, { ...content, lines: newLines });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    updateComponent(id, { ...content, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium text-gray-700">
            Linhas da Descrição
          </label>
          <button
            type="button"
            onClick={addLine}
            className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus size={16} />
          </button>
        </div>
        
        {content.lines.map((line, index) => (
          <div key={index} className="flex mb-2">
            <input
              type="text"
              value={line}
              onChange={(e) => handleLineChange(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Linha ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeLine(index)}
              disabled={content.lines.length <= 1}
              className={`inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:text-red-500 ${
                content.lines.length <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-50'
              }`}
            >
              <Trash size={16} />
            </button>
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="description-font-size" className="block text-sm font-medium text-gray-700 mb-1">
          Tamanho da Fonte
        </label>
        <select
          id="description-font-size"
          name="fontSize"
          value={content.fontSize}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="0.875rem">Pequeno</option>
          <option value="1rem">Médio</option>
          <option value="1.125rem">Grande</option>
        </select>
      </div>

      <div>
        <label htmlFor="description-color" className="block text-sm font-medium text-gray-700 mb-1">
          Cor do Texto
        </label>
        <div className="flex items-center">
          <input
            type="color"
            id="description-color"
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
          {content.lines.map((line, index) => (
            <p 
              key={index} 
              className="sub-description text-center" 
              style={{ 
                fontSize: content.fontSize, 
                color: content.textColor 
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionEditor;