import React from 'react';
import { TitleData } from '../../context/EditorContext';

interface EditableTitleProps {
  content: TitleData;
}

const EditableTitle: React.FC<EditableTitleProps> = ({ content }) => {
  return (
    <div className="text-center mb-4">
      <p
        className="section-subtitle"
        style={{
          fontSize: content.fontSize,
          color: content.textColor,
          position: 'relative',
          display: 'inline-block',
        }}
      >
        {content.text}
        <span
          style={{
            content: '""',
            position: 'absolute',
            width: '50%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #0d6efd, transparent)',
            bottom: '-8px',
            left: '25%',
          }}
        ></span>
      </p>
    </div>
  );
};

export default EditableTitle;