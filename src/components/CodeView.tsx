import React, { useState, useEffect } from 'react';
import { useEditor, ComponentData, TitleData, DescriptionData, ButtonData } from '../context/EditorContext';
import { Copy, Check, Upload } from 'lucide-react';

const CodeView: React.FC = () => {
  const { components, getComponentIcon, importCode } = useEditor();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [importValue, setImportValue] = useState('');

  useEffect(() => {
    generateCode();
  }, [components]);

  const generateCode = () => {
    let html = '<div class="container my-5">\n';
    
    // Generate HTML code
    components.forEach((component) => {
      switch (component.type) {
        case 'title': {
          const titleData = component.content as TitleData;
          html += '  <!-- Título Modernizado -->\n';
          html += '  <div class="text-center mb-4">\n';
          html += `    <p class="section-subtitle">${titleData.text}</p>\n`;
          html += '  </div>\n\n';
          break;
        }
        case 'description': {
          const descData = component.content as DescriptionData;
          html += '  <!-- Descrição -->\n';
          html += '  <div class="text-center mb-5">\n';
          descData.lines.forEach(line => {
            html += `    <p class="sub-description">${line}</p>\n`;
          });
          html += '  </div>\n\n';
          break;
        }
        case 'button': {
          const buttonData = component.content as ButtonData;
          // If this is the first button in sequence, add the accordion wrapper
          if (!components[components.indexOf(component) - 1] || components[components.indexOf(component) - 1].type !== 'button') {
            html += '  <!-- Botões -->\n';
            html += '  <div class="accordion row justify-content-center">\n';
          }
          
          html += '    <!-- ' + buttonData.title + ' -->\n';
          html += '    <div class="accordion-item col-lg-4 mt-2">\n';
          html += `      <a href="${buttonData.url}" class="modern-btn" title="${buttonData.title}">\n`;
          // Converter o nome do ícone de camelCase para kebab-case
          const iconMappings: {[key: string]: string} = {
            'GraduationCap': 'graduation-cap',
            'CircleDollarSign': 'circle-dollar-sign',
            'FileInvoiceDollar': 'file-invoice-dollar',
            'FileInvoice': 'file-invoice',
            'UserGraduate': 'user-graduate',
            'ClipboardList': 'clipboard-list',
            'Tool': 'pen-tool',
            'Shopping': 'shopping-bag',
            'Chart': 'bar-chart',
            'Flask': 'flask-conical',
            'Help': 'help-circle',
            'Message': 'message-circle',
            'Lightbulb': 'lightbulb',
            'FileChart': 'file-pie-chart',
            'FileBarChart': 'file-bar-chart',
            'UserSquare2': 'user-square-2',
            'FileClock': 'file-clock',
            'LibraryBig': 'library-big',
            'FileStack': 'file-stack',
            'FileArchive': 'file-archive',
            'FileOutput': 'file-output',
            'FileWarning': 'file-warning',
            'FileQuestion': 'file-question',
            'BookOpen': 'book-open',
            'HardHat': 'hard-hat',
            'FileSpreadsheet': 'file-spreadsheet',
            'FileSignature': 'file-signature',
            'UserCog': 'user-cog',
            'FileBox': 'file-box',
            'BadgeHelp': 'badge-help',
            'FileKey': 'file-key',
            'ScrollText': 'scroll-text',
            'MousePointer': 'mouse-pointer'
          };
          
          // Verificar se o ícone está no mapeamento especial
          let iconName = '';
          if (iconMappings[buttonData.icon]) {
            iconName = iconMappings[buttonData.icon];
          } else {
            // Caso contrário, converter usando regex para transformar camelCase em kebab-case
            iconName = buttonData.icon.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
          }
          
          html += `        <span class="btn-icon"><i class="fas fa-${iconName}"></i></span>\n`;
          html += `        <span class="btn-text">${buttonData.text}</span>\n`;
          html += '      </a>\n';
          html += '    </div>\n\n';
          
          // If this is the last button in sequence, close the accordion wrapper
          if (!components[components.indexOf(component) + 1] || components[components.indexOf(component) + 1].type !== 'button') {
            html += '  </div>\n';
          }
          break;
        }
        default:
          break;
      }
    });
    
    html += '</div>\n\n';
    html += '<!-- Ícones Font Awesome -->\n';
    html += '<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">\n';
    
    // Add CSS
    const css = `/* Estilos Gerais */
.section-subtitle {
  color: #555;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
}

.section-subtitle::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0d6efd, transparent);
  bottom: -8px;
  left: 25%;
}

.sub-description {
  color: #777;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.accordion {
  display: flex;
  flex-wrap: wrap;
  font-family: "Poppins", sans-serif;
  justify-content: center;
}

.accordion-item {
  box-sizing: border-box;
  margin-bottom: 15px;
  padding: 0 10px;
  width: 100%;
  max-width: 400px;
}

.modern-btn {
  display: flex;
  align-items: center;
  width: 100%;
  background: linear-gradient(135deg, #0d6efd, #0b5ed7);
  color: white !important;
  border: none;
  text-align: left;
  border-radius: 8px;
  font-size: 0.95rem;
  text-decoration: none;
  padding: 14px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.btn-icon {
  font-size: 1.2rem;
  margin-right: 12px;
  color: white;
  flex-shrink: 0;
}

.btn-text {
  font-size: 0.95rem;
  color: white;
  line-height: 1.4;
}

.modern-btn:hover {
  background: linear-gradient(135deg, #0b5ed7, #084298);
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .accordion-item {
    padding: 0 5px;
  }
  .modern-btn {
    padding: 12px 10px;
  }
  .btn-text {
    font-size: 0.9rem;
  }
}`;
    
    // Add JavaScript
    const js = `// Efeitos de clique e hover modernos
document.querySelectorAll('.modern-btn').forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.style.transform = 'translateY(1px)';
    btn.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  });
  
  btn.addEventListener('mouseup', () => {
    btn.style.transform = 'translateY(-3px)';
    btn.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
  });
  
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
    btn.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});`;
    
    setHtmlCode(html);
    setCssCode(css);
    setJsCode(js);
  };

  const copyToClipboard = () => {
    let fullCode = '';
    
    // Add HTML
    fullCode += htmlCode + '\n\n';
    
    // Add CSS
    fullCode += '<!-- ESTILO COMPLETO -->\n';
    fullCode += '<style type="text/css">\n';
    fullCode += cssCode + '\n';
    fullCode += '</style>\n\n';
    
    // Add JavaScript
    fullCode += '<!-- Efeitos Interativos -->\n';
    fullCode += '<script>\n';
    fullCode += jsCode + '\n';
    fullCode += '</script>';
    
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImport = () => {
    if (importValue.trim()) {
      importCode(importValue);
      setImportValue('');
    }
  };

  const getActiveCode = () => {
    switch (activeTab) {
      case 'html':
        return htmlCode;
      case 'css':
        return cssCode;
      case 'js':
        return jsCode;
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Código HTML</h2>
        <div className="flex gap-2">
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md text-sm transition-colors"
          >
            {copied ? (
              <>
                <Check size={16} /> Copiado!
              </>
            ) : (
              <>
                <Copy size={16} /> Copiar Código Completo
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2">
          <textarea
            value={importValue}
            onChange={(e) => setImportValue(e.target.value)}
            placeholder="Cole aqui o código HTML para importar..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
          <button
            onClick={handleImport}
            className="flex items-center gap-1 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-md transition-colors"
          >
            <Upload size={16} />
            Importar
          </button>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex text-xs border-b border-gray-700">
          <button
            className={`px-4 py-2 ${
              activeTab === 'html'
                ? 'bg-gray-800 text-white font-medium border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'css'
                ? 'bg-gray-800 text-white font-medium border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('css')}
          >
            CSS
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'js'
                ? 'bg-gray-800 text-white font-medium border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('js')}
          >
            JavaScript
          </button>
        </div>
        <pre className="code-view p-4 text-white text-sm overflow-x-auto">
          <code>{getActiveCode()}</code>
        </pre>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Como usar o código:</h3>
        <ol className="text-sm text-gray-600 space-y-2 ml-5 list-decimal">
          <li>Copie o código HTML, CSS e JavaScript completo</li>
          <li>Cole dentro do arquivo HTML ou CMS da sua preferência</li>
          <li>Certifique-se de incluir o link para o Font Awesome</li>
          <li>Verifique se os links nos botões estão corretos</li>
        </ol>
      </div>
    </div>
  );
};

export default CodeView;