import type { ButtonHTMLAttributes } from 'react';
import './button.css';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success';
  
export type ButtonSize = 's' | 'm' | 'l';

// Props — свойства экземпляра, как Type и Size в Figma.
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = 'primary', size = 'm', type = 'button',
  className = '', children, ...props
}: ButtonProps) {
  return (
    <button type={type} className={`button ${className}`} data-variant={variant} data-size={size} {...props}>
      {children}
    </button>
  );
}
