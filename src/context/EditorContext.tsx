import React, { createContext, useContext, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { 
  FileText, Type, MousePointer, CircleDollarSign as FileInvoiceDollar, 
  FileInput as FileInvoice, GraduationCap as UserGraduate, Users, 
  Contact as FileContract, ClipboardList, Building, Book, Calendar, 
  Camera, Car, Clock, Cloud, Code, Coffee, Cog, Database, Download, 
  Edit, Eye, Film, Flag, Folder, Gift, Globe, Heart, Home, Image, 
  Key, Laptop, Link, Mail, Map, Music, Phone, Printer, Search, 
  Settings, Share, Shield, ShoppingBag as Shopping, Star, Sun, 
  PenTool as Tool, Upload, User, Video, Wifi, Briefcase, Award, 
  Box, Brush, BarChart as Chart, Compass, Crown, Diamond, Droplet, 
  FileCheck, FileSearch, Fingerprint, Siren as Fire, Fish, 
  FlaskConical as Flask, Flower, Gamepad, Glasses, Headphones, 
  HelpCircle as Help, Lightbulb, Lock, Medal, MessageCircle as Message, 
  Mic, Monitor, Moon, Mountain, Newspaper, Palette, Pencil, 
  Plane as Plant, Puzzle, Rocket, Scissors, Smile, Sparkles, 
  Target, Ticket, Trophy, Truck, Umbrella, Wallet, Wrench,
  FilePieChart as FileChart, FileBarChart, UserSquare2, FileClock, 
  LibraryBig, Construction, Bus, Apple, Ruler, FileStack, Gavel, 
  FileArchive, FileOutput, FileWarning, FileQuestion, School, 
  BookOpen, HardHat, Warehouse, FileSpreadsheet, Scale, FileSignature, 
  UserCog, Coins, FileBox, BadgeHelp, FileKey, ScrollText, 
  Calculator, Receipt, Landmark
} from 'lucide-react';

export type ComponentType = 'title' | 'description' | 'button';

export interface ComponentData {
  id: string;
  type: ComponentType;
  content: any;
}

export interface TitleData {
  text: string;
  fontSize: string;
  textColor: string;
}

export interface DescriptionData {
  lines: string[];
  fontSize: string;
  textColor: string;
}

export interface ButtonData {
  text: string;
  icon: string;
  url: string;
  title: string;
  backgroundColor: string;
}

interface EditorContextType {
  components: ComponentData[];
  selectedComponent: string | null;
  addComponent: (type: ComponentType) => void;
  updateComponent: (id: string, content: any) => void;
  removeComponent: (id: string) => void;
  selectComponent: (id: string | null) => void;
  moveComponent: (id: string, direction: 'up' | 'down') => void;
  getComponentIcon: (iconName: string) => React.ReactNode;
  importCode: (code: string) => void;
}

const defaultComponents: ComponentData[] = [
  {
    id: uuidv4(),
    type: 'title',
    content: {
      text: 'Recursos Humanos',
      fontSize: '1.5rem',
      textColor: '#555',
    },
  },
  {
    id: uuidv4(),
    type: 'description',
    content: {
      lines: [
        'Aqui os cidadãos podem consultar os recursos humanos (Folha de Pagamento) do município.',
        'Clique abaixo para selecionar o período desejado e acessar os dados atualizados e de anos anteriores.',
        'Selecione um campo para mais detalhes',
      ],
      fontSize: '1rem',
      textColor: '#777',
    },
  },
  {
    id: uuidv4(),
    type: 'button',
    content: {
      text: 'Folha a partir de 2025',
      icon: 'FileInvoiceDollar',
      url: '/folha-2025',
      title: 'FOLHA DE PAGAMENTO A PARTIR DE 2025',
      backgroundColor: '#0d6efd',
    },
  },
  {
    id: uuidv4(),
    type: 'button',
    content: {
      text: 'Folha anteriores a 2025',
      icon: 'FileInvoice',
      url: '/folha-anteriores',
      title: 'FOLHA ANTERIORES A 2025',
      backgroundColor: '#0d6efd',
    },
  },
];

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [components, setComponents] = useState<ComponentData[]>(defaultComponents);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const addComponent = (type: ComponentType) => {
    let newComponent: ComponentData;

    switch (type) {
      case 'title':
        newComponent = {
          id: uuidv4(),
          type,
          content: {
            text: 'Novo Título',
            fontSize: '1.5rem',
            textColor: '#555',
          },
        };
        break;
      case 'description':
        newComponent = {
          id: uuidv4(),
          type,
          content: {
            lines: ['Nova descrição'],
            fontSize: '1rem',
            textColor: '#777',
          },
        };
        break;
      case 'button':
        newComponent = {
          id: uuidv4(),
          type,
          content: {
            text: 'Novo Botão',
            icon: 'MousePointer',
            url: 'https://exemplo.com',
            title: 'NOVO BOTÃO',
            backgroundColor: '#0d6efd',
          },
        };
        break;
      default:
        return;
    }

    setComponents([...components, newComponent]);
    setSelectedComponent(newComponent.id);
  };

  const updateComponent = (id: string, content: any) => {
    setComponents(
      components.map((component) =>
        component.id === id ? { ...component, content } : component
      )
    );
  };

  const removeComponent = (id: string) => {
    setComponents(components.filter((component) => component.id !== id));
    if (selectedComponent === id) {
      setSelectedComponent(null);
    }
  };

  const selectComponent = (id: string | null) => {
    setSelectedComponent(id);
  };

  const moveComponent = (id: string, direction: 'up' | 'down') => {
    const index = components.findIndex((component) => component.id === id);
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === components.length - 1)
    ) {
      return;
    }

    const newComponents = [...components];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    [newComponents[index], newComponents[swapIndex]] = [
      newComponents[swapIndex],
      newComponents[index],
    ];

    setComponents(newComponents);
  };

  const getComponentIcon = (iconName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    // Ícones existentes
    FileText: <FileText />,
    Type: <Type />,
    MousePointer: <MousePointer />,
    FileInvoiceDollar: <FileInvoiceDollar />,
    FileInvoice: <FileInvoice />,
    UserGraduate: <UserGraduate />,
    Users: <Users />,
    FileContract: <FileContract />,
    ClipboardList: <ClipboardList />,
    Building: <Building />,
    Book: <Book />,
    Calendar: <Calendar />,
    Camera: <Camera />,
    Car: <Car />,
    Clock: <Clock />,
    Cloud: <Cloud />,
    Code: <Code />,
    Coffee: <Coffee />,
    Cog: <Cog />,
    Database: <Database />,
    Download: <Download />,
    Edit: <Edit />,
    Eye: <Eye />,
    Film: <Film />,
    Flag: <Flag />,
    Folder: <Folder />,
    Gift: <Gift />,
    Globe: <Globe />,
    Heart: <Heart />,
    Home: <Home />,
    Image: <Image />,
    Key: <Key />,
    Laptop: <Laptop />,
    Link: <Link />,
    Mail: <Mail />,
    Map: <Map />,
    Music: <Music />,
    Phone: <Phone />,
    Printer: <Printer />,
    Search: <Search />,
    Settings: <Settings />,
    Share: <Share />,
    Shield: <Shield />,
    Shopping: <Shopping />,
    Star: <Star />,
    Sun: <Sun />,
    Tool: <Tool />,
    Upload: <Upload />,
    User: <User />,
    Video: <Video />,
    Wifi: <Wifi />,
    Briefcase: <Briefcase />,
    Award: <Award />,
    Box: <Box />,
    Brush: <Brush />,
    Chart: <Chart />,
    Compass: <Compass />,
    Crown: <Crown />,
    Diamond: <Diamond />,
    Droplet: <Droplet />,
    FileCheck: <FileCheck />,
    FileSearch: <FileSearch />,
    Fingerprint: <Fingerprint />, 
    CircleDollarSign: <FileInvoiceDollar />,
    GraduationCap: <UserGraduate />,  
    Fire: <Fire />,
    Fish: <Fish />,
    Flask: <Flask />,
    Flower: <Flower />,
    Gamepad: <Gamepad />,
    Glasses: <Glasses />,
    Headphones: <Headphones />,
    Help: <Help />,
    Lightbulb: <Lightbulb />,
    Lock: <Lock />,
    Medal: <Medal />,
    Message: <Message />,
    Mic: <Mic />,
    Monitor: <Monitor />,
    Moon: <Moon />,
    Mountain: <Mountain />,
    Newspaper: <Newspaper />,
    Palette: <Palette />,
    Pencil: <Pencil />,
    Plant: <Plant />,
    Puzzle: <Puzzle />,
    Rocket: <Rocket />,
    Scissors: <Scissors />,
    Smile: <Smile />,
    Sparkles: <Sparkles />,
    Target: <Target />,
    Ticket: <Ticket />,
    Trophy: <Trophy />,
    Truck: <Truck />,
    Umbrella: <Umbrella />,
    Wallet: <Wallet />,
    Wrench: <Wrench />,
    
    // Ícones adicionais
    FileChart: <FileChart />,
    FileBarChart: <FileBarChart />,
    UserSquare2: <UserSquare2 />,
    FileClock: <FileClock />,
    LibraryBig: <LibraryBig />,
    Construction: <Construction />,
    Bus: <Bus />,
    Apple: <Apple />,
    Ruler: <Ruler />,
    FileStack: <FileStack />,
    Gavel: <Gavel />,
    FileArchive: <FileArchive />,
    FileOutput: <FileOutput />,
    FileWarning: <FileWarning />,
    FileQuestion: <FileQuestion />,
    School: <School />,
    BookOpen: <BookOpen />,
    HardHat: <HardHat />,
    Warehouse: <Warehouse />,
    FileSpreadsheet: <FileSpreadsheet />,
    Scale: <Scale />,
    FileSignature: <FileSignature />,
    UserCog: <UserCog />,
    Coins: <Coins />,
    FileBox: <FileBox />,
    BadgeHelp: <BadgeHelp />,
    FileKey: <FileKey />,
    ScrollText: <ScrollText />,
    Calculator: <Calculator />,
    Receipt: <Receipt />,
    Landmark: <Landmark />
  };
  return icons[iconName] || <MousePointer />;
};

  const importCode = (code: string) => {
    try {
      // Parse the HTML string
      const parser = new DOMParser();
      const doc = parser.parseFromString(code, 'text/html');

      const newComponents: ComponentData[] = [];

      // Extract title
      const titleElement = doc.querySelector('.section-subtitle');
      if (titleElement) {
        newComponents.push({
          id: uuidv4(),
          type: 'title',
          content: {
            text: titleElement.textContent || 'Novo Título',
            fontSize: '1.5rem',
            textColor: '#555',
          },
        });
      }

      // Extract description
      const descriptionElements = doc.querySelectorAll('.sub-description');
      if (descriptionElements.length > 0) {
        const lines = Array.from(descriptionElements).map(el => el.textContent || '');
        newComponents.push({
          id: uuidv4(),
          type: 'description',
          content: {
            lines,
            fontSize: '1rem',
            textColor: '#777',
          },
        });
      }

      // Extract buttons
      const buttonElements = doc.querySelectorAll('.modern-btn');
      buttonElements.forEach(buttonEl => {
        const buttonElement = buttonEl as HTMLElement;
        const iconElement = buttonElement.querySelector('.btn-icon i');
        const textElement = buttonElement.querySelector('.btn-text');
        
        if (buttonElement && textElement) {
          const iconClass = iconElement?.className || '';
          // Extrair o nome do ícone removendo 'fas fa-' e mapeando para o formato correto
          let iconName = '';
          
          // Mapeamento de nomes específicos que precisam de tratamento especial
          const iconMappings: {[key: string]: string} = {
            'graduation-cap': 'GraduationCap',
            'circle-dollar-sign': 'CircleDollarSign',
            'file-invoice-dollar': 'FileInvoiceDollar',
            'file-invoice': 'FileInvoice',
            'user-graduate': 'UserGraduate',
            'clipboard-list': 'ClipboardList',
            'pen-tool': 'Tool',
            'shopping-bag': 'Shopping',
            'bar-chart': 'Chart',
            'flask-conical': 'Flask',
            'help-circle': 'Help',
            'message-circle': 'Message',
            'lightbulb': 'Lightbulb',
            'file-pie-chart': 'FileChart',
            'file-bar-chart': 'FileBarChart',
            'user-square-2': 'UserSquare2',
            'file-clock': 'FileClock',
            'library-big': 'LibraryBig',
            'file-stack': 'FileStack',
            'file-archive': 'FileArchive',
            'file-output': 'FileOutput',
            'file-warning': 'FileWarning',
            'file-question': 'FileQuestion',
            'book-open': 'BookOpen',
            'hard-hat': 'HardHat',
            'file-spreadsheet': 'FileSpreadsheet',
            'file-signature': 'FileSignature',
            'user-cog': 'UserCog',
            'file-box': 'FileBox',
            'badge-help': 'BadgeHelp',
            'file-key': 'FileKey',
            'scroll-text': 'ScrollText'
          };
          
          // Extrair o nome do ícone sem o prefixo 'fas fa-'
          const rawIconName = iconClass.replace('fas fa-', '');
          
          // Verificar se o ícone está no mapeamento especial
          if (iconMappings[rawIconName]) {
            iconName = iconMappings[rawIconName];
          } else {
            // Caso contrário, converter usando o método padrão
            iconName = rawIconName.split('-').map(
              word => word.charAt(0).toUpperCase() + word.slice(1)
            ).join('');
          }

          newComponents.push({
            id: uuidv4(),
            type: 'button',
            content: {
              text: textElement.textContent || 'Novo Botão',
              icon: iconName || 'MousePointer',
              url: buttonElement.getAttribute('href') || '#',
              title: buttonElement.getAttribute('title') || '',
              backgroundColor: '#0d6efd',
            },
          });
        }
      });

      setComponents(newComponents);
    } catch (error) {
      console.error('Error importing code:', error);
    }
  };

  return (
    <EditorContext.Provider
      value={{
        components,
        selectedComponent,
        addComponent,
        updateComponent,
        removeComponent,
        selectComponent,
        moveComponent,
        getComponentIcon,
        importCode,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditor must be used within a EditorProvider');
  }
  return context;
};