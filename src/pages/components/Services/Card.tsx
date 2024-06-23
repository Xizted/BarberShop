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
      className='bg-background rounded-lg overflow-hidden shadow-lg hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'
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
