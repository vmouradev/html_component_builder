import React from 'react';
import { useEditor, ButtonData } from '../../context/EditorContext';
import { Building, FileText, CircleDollarSign, Calculator, Receipt, Landmark, Users, GraduationCap, School, BookOpen, HardHat, Truck, Warehouse, FileSpreadsheet, FileCheck, Scale, FileSignature, ClipboardList, FileSearch, UserCog, Coins, FilePieChart as FileChart, FileBox, BadgeHelp, FileKey, ScrollText, LibraryBig, Construction, Bus, Apple, Ruler, FileBarChart, FileStack, UserSquare2, Gavel, FileArchive, FileOutput, FileWarning, FileClock, FileQuestion } from 'lucide-react';

interface ButtonEditorProps {
  id: string;
  content: ButtonData;
}

const ButtonEditor: React.FC<ButtonEditorProps> = ({ id, content }) => {
  const { updateComponent, getComponentIcon } = useEditor();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateComponent(id, { ...content, [name]: value });
  };

  const icons = [
    // Administração Geral
    { name: 'Building', label: 'Prefeitura', component: <Building /> },
    { name: 'FileText', label: 'Documentos', component: <FileText /> },
    { name: 'ClipboardList', label: 'Protocolos', component: <ClipboardList /> },
    { name: 'FileSearch', label: 'Consultas', component: <FileSearch /> },
    { name: 'BadgeHelp', label: 'Ouvidoria', component: <BadgeHelp /> },
    { name: 'FileKey', label: 'Controle Interno', component: <FileKey /> },
    { name: 'ScrollText', label: 'Legislação', component: <ScrollText /> },
    { name: 'Gavel', label: 'Leis', component: <Gavel /> },
    
    // Finanças e Contabilidade
    { name: 'CircleDollarSign', label: 'Finanças', component: <CircleDollarSign /> },
    { name: 'Calculator', label: 'Contabilidade', component: <Calculator /> },
    { name: 'Receipt', label: 'Notas Fiscais', component: <Receipt /> },
    { name: 'Coins', label: 'Tesouraria', component: <Coins /> },
    { name: 'FileChart', label: 'Prestação de Contas', component: <FileChart /> },
    { name: 'FileBarChart', label: 'Orçamento', component: <FileBarChart /> },
    
    // Recursos Humanos
    { name: 'Users', label: 'Recursos Humanos', component: <Users /> },
    { name: 'UserCog', label: 'Gestão de Pessoas', component: <UserCog /> },
    { name: 'UserSquare2', label: 'Servidor Público', component: <UserSquare2 /> },
    { name: 'FileClock', label: 'Ponto Eletrônico', component: <FileClock /> },
    
    // Educação
    { name: 'GraduationCap', label: 'Educação', component: <GraduationCap /> },
    { name: 'School', label: 'Escola', component: <School /> },
    { name: 'BookOpen', label: 'Biblioteca', component: <BookOpen /> },
    { name: 'LibraryBig', label: 'Biblioteca Digital', component: <LibraryBig /> },
    { name: 'Bus', label: 'Transporte Escolar', component: <Bus /> },
    { name: 'Apple', label: 'Merenda Escolar', component: <Apple /> },
    
    // Obras e Infraestrutura
    { name: 'HardHat', label: 'Obras', component: <HardHat /> },
    { name: 'Construction', label: 'Infraestrutura', component: <Construction /> },
    { name: 'Truck', label: 'Transportes', component: <Truck /> },
    { name: 'Ruler', label: 'Planejamento', component: <Ruler /> },
    
    // Gestão Documental
    { name: 'FileSpreadsheet', label: 'Relatórios', component: <FileSpreadsheet /> },
    { name: 'FileCheck', label: 'Licitações', component: <FileCheck /> },
    { name: 'FileSignature', label: 'Contratos', component: <FileSignature /> },
    { name: 'FileBox', label: 'Arquivo', component: <FileBox /> },
    { name: 'FileStack', label: 'Processos', component: <FileStack /> },
    { name: 'FileArchive', label: 'Documentos Históricos', component: <FileArchive /> },
    { name: 'FileOutput', label: 'Publicações', component: <FileOutput /> },
    { name: 'FileWarning', label: 'Fiscalização', component: <FileWarning /> },
    { name: 'FileQuestion', label: 'FAQ/Ajuda', component: <FileQuestion /> },
    
    // Patrimônio e Almoxarifado
    { name: 'Landmark', label: 'Patrimônio', component: <Landmark /> },
    { name: 'Warehouse', label: 'Almoxarifado', component: <Warehouse /> },
    
    // Jurídico
    { name: 'Scale', label: 'Jurídico', component: <Scale /> },
  ];

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="button-text" className="block text-sm font-medium text-gray-700 mb-1">
          Texto do Botão
        </label>
        <input
          type="text"
          id="button-text"
          name="text"
          value={content.text}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="button-title" className="block text-sm font-medium text-gray-700 mb-1">
          Título do Botão (para tooltip)
        </label>
        <input
          type="text"
          id="button-title"
          name="title"
          value={content.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="button-url" className="block text-sm font-medium text-gray-700 mb-1">
          URL de Destino
        </label>
        <input
          type="url"
          id="button-url"
          name="url"
          value={content.url}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://exemplo.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ícone
        </label>
        <div className="grid grid-cols-4 gap-2 max-h-60 overflow-y-auto p-2 bg-gray-50 rounded-md">
          {icons.map((icon) => (
            <button
              key={icon.name}
              type="button"
              onClick={() => updateComponent(id, { ...content, icon: icon.name })}
              className={`flex flex-col items-center justify-center p-2 border rounded-md ${
                content.icon === icon.name
                  ? 'border-blue-500 bg-blue-50 text-blue-600'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
              title={icon.label}
            >
              <div className="mb-1">{icon.component}</div>
              <span className="text-xs text-center truncate w-full">{icon.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="button-color" className="block text-sm font-medium text-gray-700 mb-1">
          Cor de Fundo
        </label>
        <div className="flex items-center">
          <input
            type="color"
            id="button-color"
            name="backgroundColor"
            value={content.backgroundColor}
            onChange={handleChange}
            className="w-10 h-10 border-0 p-0 mr-2"
          />
          <input
            type="text"
            name="backgroundColor"
            value={content.backgroundColor}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Prévia:</h3>
        <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
          <a
            href="#"
            className="modern-btn flex items-center rounded-lg px-4 py-3"
            style={{ backgroundColor: content.backgroundColor }}
            title={content.title}
          >
            <span className="btn-icon mr-3 text-white">
              {getComponentIcon(content.icon)}
            </span>
            <span className="btn-text text-white">{content.text}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ButtonEditor;