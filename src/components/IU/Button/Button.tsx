import React from "react";

export interface IButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ onClick, label, className, type, disabled }) => {
  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
