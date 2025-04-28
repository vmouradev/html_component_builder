import React from 'react';
import { DescriptionData } from '../../context/EditorContext';

interface EditableDescriptionProps {
  content: DescriptionData;
}

const EditableDescription: React.FC<EditableDescriptionProps> = ({ content }) => {
  return (
    <div className="text-center mb-5">
      {content.lines.map((line, index) => (
        <p
          key={index}
          className="sub-description"
          style={{
            fontSize: content.fontSize,
            color: content.textColor,
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default EditableDescription;