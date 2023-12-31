'use client';

import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from './dialog';

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
}

const Modal = ({
  title,
  description,
  isOpen,
  children,
  onClose,
}: ModalProps) => {
  const onChange = (open: boolean) => {
    if (!open) onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
