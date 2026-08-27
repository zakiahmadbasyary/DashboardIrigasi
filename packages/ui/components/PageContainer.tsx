import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'normal' | 'wide' | 'full';
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  maxWidth = 'normal',
}) => {
  const widthClasses = {
    normal: 'max-w-7xl',
    wide: 'max-w-7xl lg:max-w-[1400px]',
    full: 'max-w-none',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full ${widthClasses[maxWidth]} ${className}`}>
      {children}
    </div>
  );
};
