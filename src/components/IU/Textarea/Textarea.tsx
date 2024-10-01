import React from "react";
import styled from "styled-components";

export interface ITextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // Cambié a HTMLTextAreaElement
  className?: string;
  name?: string;
  required?: boolean; 
}

const StyledTextarea = styled.textarea`
  width: 95%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
  font-family: "Prompt", sans-serif;
  resize: vertical; 
`;

const Textarea: React.FC<ITextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  name,
  required,
}) => {
  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <StyledTextarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        required={required} 
      />
    </div>
  );
};

export default Textarea;
