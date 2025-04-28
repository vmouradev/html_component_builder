import React from 'react';
import { useEditor, ButtonData } from '../../context/EditorContext';
import { FileText, Type, MousePointer, CircleDollarSign as FileInvoiceDollar, FileInput as FileInvoice, GraduationCap as UserGraduate, Users, Contact as FileContract, ClipboardList, Building, Book, Calendar, Camera, Car, Clock, Cloud, Code, Coffee, Cog, Database, Download, Edit, Eye, Film, Flag, Folder, Gift, Globe, Heart, Home, Image, Key, Laptop, Link, Mail, Map, Music, Phone, Printer, Search, Settings, Share, Shield, ShoppingBag as Shopping, Star, Sun, PenTool as Tool, Upload, User, Video, Wifi, Briefcase, Award, Box, Brush, BarChart as Chart, Compass, Crown, Diamond, Droplet, FileCheck, FileSearch, Fingerprint, Siren as Fire, Fish, FlaskConical as Flask, Flower, Gamepad, Glasses, Headphones, HelpCircle as Help, Lightbulb, Lock, Medal, MessageCircle as Message, Mic, Monitor, Moon, Mountain, Newspaper, Palette, Pencil, Plane as Plant, Puzzle, Rocket, Scissors, Smile, Sparkles, Target, Ticket, Trophy, Truck, Umbrella, Wallet, Wrench } from 'lucide-react';

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
    // Documentos e Dados
    { name: 'FileInvoiceDollar', label: 'Documento com Dinheiro', component: <FileInvoiceDollar /> },
    { name: 'FileInvoice', label: 'Documento', component: <FileInvoice /> },
    { name: 'FileText', label: 'Arquivo de Texto', component: <FileText /> },
    { name: 'FileCheck', label: 'Documento Verificado', component: <FileCheck /> },
    { name: 'FileSearch', label: 'Buscar Documento', component: <FileSearch /> },
    { name: 'ClipboardList', label: 'Lista', component: <ClipboardList /> },
    { name: 'Database', label: 'Banco de Dados', component: <Database /> },
    { name: 'Newspaper', label: 'Jornal', component: <Newspaper /> },

    // Pessoas e Usuários
    { name: 'UserGraduate', label: 'Estudante', component: <UserGraduate /> },
    { name: 'Users', label: 'Pessoas', component: <Users /> },
    { name: 'User', label: 'Usuário', component: <User /> },
    { name: 'Glasses', label: 'Óculos', component: <Glasses /> },
    { name: 'Fingerprint', label: 'Digital', component: <Fingerprint /> },

    // Negócios e Trabalho
    { name: 'Briefcase', label: 'Maleta', component: <Briefcase /> },
    { name: 'Building', label: 'Prédio', component: <Building /> },
    { name: 'Chart', label: 'Gráfico', component: <Chart /> },
    { name: 'Trophy', label: 'Troféu', component: <Trophy /> },
    { name: 'Target', label: 'Alvo', component: <Target /> },
    { name: 'Award', label: 'Prêmio', component: <Award /> },
    { name: 'Medal', label: 'Medalha', component: <Medal /> },

    // Comunicação e Mídia
    { name: 'Mail', label: 'Email', component: <Mail /> },
    { name: 'Message', label: 'Mensagem', component: <Message /> },
    { name: 'Phone', label: 'Telefone', component: <Phone /> },
    { name: 'Video', label: 'Vídeo', component: <Video /> },
    { name: 'Camera', label: 'Câmera', component: <Camera /> },
    { name: 'Mic', label: 'Microfone', component: <Mic /> },
    { name: 'Headphones', label: 'Fones', component: <Headphones /> },

    // Tecnologia
    { name: 'Laptop', label: 'Laptop', component: <Laptop /> },
    { name: 'Monitor', label: 'Monitor', component: <Monitor /> },
    { name: 'Code', label: 'Código', component: <Code /> },
    { name: 'Wifi', label: 'Wifi', component: <Wifi /> },
    { name: 'Cloud', label: 'Nuvem', component: <Cloud /> },
    { name: 'Lock', label: 'Cadeado', component: <Lock /> },
    { name: 'Shield', label: 'Escudo', component: <Shield /> },

    // Criativo e Design
    { name: 'Palette', label: 'Paleta', component: <Palette /> },
    { name: 'Brush', label: 'Pincel', component: <Brush /> },
    { name: 'Pencil', label: 'Lápis', component: <Pencil /> },
    { name: 'Image', label: 'Imagem', component: <Image /> },
    { name: 'Type', label: 'Texto', component: <Type /> },
    { name: 'Edit', label: 'Editar', component: <Edit /> },

    // Navegação e Localização
    { name: 'Map', label: 'Mapa', component: <Map /> },
    { name: 'Compass', label: 'Bússola', component: <Compass /> },
    { name: 'Globe', label: 'Globo', component: <Globe /> },
    { name: 'MousePointer', label: 'Mouse', component: <MousePointer /> },
    { name: 'Link', label: 'Link', component: <Link /> },
    { name: 'Search', label: 'Busca', component: <Search /> },

    // Tempo e Clima
    { name: 'Clock', label: 'Relógio', component: <Clock /> },
    { name: 'Calendar', label: 'Calendário', component: <Calendar /> },
    { name: 'Sun', label: 'Sol', component: <Sun /> },
    { name: 'Moon', label: 'Lua', component: <Moon /> },
    { name: 'Umbrella', label: 'Guarda-chuva', component: <Umbrella /> },

    // Objetos e Ferramentas
    { name: 'Tool', label: 'Ferramenta', component: <Tool /> },
    { name: 'Wrench', label: 'Chave', component: <Wrench /> },
    { name: 'Scissors', label: 'Tesoura', component: <Scissors /> },
    { name: 'Key', label: 'Chave', component: <Key /> },
    { name: 'Box', label: 'Caixa', component: <Box /> },
    { name: 'Folder', label: 'Pasta', component: <Folder /> },
    { name: 'Book', label: 'Livro', component: <Book /> },

    // Transporte
    { name: 'Car', label: 'Carro', component: <Car /> },
    { name: 'Truck', label: 'Caminhão', component: <Truck /> },
    { name: 'Rocket', label: 'Foguete', component: <Rocket /> },

    // Diversos
    { name: 'Crown', label: 'Coroa', component: <Crown /> },
    { name: 'Diamond', label: 'Diamante', component: <Diamond /> },
    { name: 'Gift', label: 'Presente', component: <Gift /> },
    { name: 'Heart', label: 'Coração', component: <Heart /> },
    { name: 'Star', label: 'Estrela', component: <Star /> },
    { name: 'Flag', label: 'Bandeira', component: <Flag /> },
    { name: 'Home', label: 'Casa', component: <Home /> },
    { name: 'Settings', label: 'Configurações', component: <Settings /> },
    { name: 'Help', label: 'Ajuda', component: <Help /> },
    { name: 'Lightbulb', label: 'Lâmpada', component: <Lightbulb /> },
    { name: 'Puzzle', label: 'Quebra-cabeça', component: <Puzzle /> },
    { name: 'Sparkles', label: 'Brilhos', component: <Sparkles /> },
    { name: 'Smile', label: 'Sorriso', component: <Smile /> },
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