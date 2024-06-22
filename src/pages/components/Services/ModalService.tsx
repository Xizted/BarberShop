interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  image: string;
}

import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';

const ModalService = ({ isOpen, onOpenChange, title, image }: Props) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
            <ModalBody>
              <Image src={image} alt={title} width={500} height={500} />
            </ModalBody>
            <ModalFooter>
              <Button color='danger' onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalService;
