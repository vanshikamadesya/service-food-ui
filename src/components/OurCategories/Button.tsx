import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'font-semibold md:rounded-xl rounded-[6px]  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-[#86704D] hover:bg-[#6D5A3E] text-white focus:ring-[#86704D]',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-300',
    outline: 'bg-transparent border border-[#86704D] text-[#86704D] hover:bg-[#86704D] hover:text-white focus:ring-[#86704D]'
  };
  
  // Size styles
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-0 py-2 text-base',
    large: 'px-8 py-3 text-lg'
  };
  
  // Combine all styles
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`.trim();
  
  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
