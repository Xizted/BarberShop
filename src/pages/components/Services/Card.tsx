import React from 'react';
import ModalService from './ModalService';

interface CardProps {
  title: string;
  image: string;
  children: React.ReactNode;
}

const Card = ({ children, image, title }: CardProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className='bg-background rounded-lg overflow-hidden shadow-lg hover:cursor-pointer'
      onClick={handleOpenChange}
    >
      {children}

      <ModalService
        image={image}
        title={title}
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
      />
    </div>
  );
};

export default Card;
