import React from 'react';
import { ButtonData } from '../../context/EditorContext';
import { useEditor } from '../../context/EditorContext';

interface EditableButtonProps {
  content: ButtonData;
}

const EditableButton: React.FC<EditableButtonProps> = ({ content }) => {
  const { getComponentIcon } = useEditor();

  return (
    <div className="accordion-item mt-2">
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="modern-btn flex items-center rounded-lg px-4 py-3"
        style={{
          background: `linear-gradient(135deg, ${content.backgroundColor}, ${adjustColor(content.backgroundColor, -20)})`,
        }}
        title={content.title}
      >
        <span className="btn-icon mr-3 text-white">
          {getComponentIcon(content.icon)}
        </span>
        <span className="btn-text text-white">{content.text}</span>
      </a>
    </div>
  );
};

// Helper function to darken or lighten a color
function adjustColor(color: string, amount: number): string {
  // Convert hex to RGB
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);

  // Adjust the color
  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export default EditableButton;