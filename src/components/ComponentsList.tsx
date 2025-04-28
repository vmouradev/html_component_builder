import React from 'react';
import { useEditor } from '../context/EditorContext';
import { Type, AlignLeft, MousePointer, FileText, Users, Building, Mail, Laptop, Palette, Map, Clock, PenTool as Tool, Car, Crown } from 'lucide-react';

const ComponentsList: React.FC = () => {
  const { addComponent } = useEditor();

  const components = [
    {
      type: 'title' as const,
      name: 'Título',
      icon: <Type size={18} />,
      description: 'Adicione um título à sua página',
    },
    {
      type: 'description' as const,
      name: 'Descrição',
      icon: <AlignLeft size={18} />,
      description: 'Adicione texto descritivo à sua página',
    },
    {
      type: 'button' as const,
      name: 'Botão',
      icon: <MousePointer size={18} />,
      description: 'Adicione um botão de ação à sua página',
    },
  ];

  const iconCategories = [
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Componentes</h2>
      <div className="space-y-3">
        {components.map((component) => (
          <div
            key={component.type}
            onClick={() => addComponent(component.type)}
            className="components-list-item bg-white border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-blue-400 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                {component.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{component.name}</h3>
                <p className="text-xs text-gray-500">{component.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Instruções:</h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Clique em um componente para adicioná-lo</li>
          <li>• Clique em um componente na prévia para editá-lo</li>
          <li>• Arraste para reordenar os componentes</li>
          <li>• Visualize o código HTML gerado na aba Código</li>
          <li>• Escolha entre mais de 80 ícones organizados por categoria</li>
        </ul>
      </div>
    </div>
  );
};

export default ComponentsList;