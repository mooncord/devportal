import { FC, PureComponent, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

function MyDialog() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Transition
      show={isOpen}
      enter='transition duration-100 ease-out'
      enterFrom='transform scale-95 opacity-0'
      enterTo='transform scale-100 opacity-100'
      leave='transition duration-75 ease-out'
      leaveFrom='transform scale-100 opacity-100'
      leaveTo='transform scale-95 opacity-0'
    >
      <Dialog onClose={() => setIsOpen(false)}>
        <Dialog.Overlay />
        <Dialog.Title>Deactivate account</Dialog.Title>
        {/* ... */}
      </Dialog>
    </Transition>
  );
}

const ModalHeader: FC = ({ children }) => {
  return (
    <div className='flex flex-col items-center p-4 my-4 text-2xl font-bold text-header-primary'>
      <Dialog.Title>{children}</Dialog.Title>
    </div>
  );
};

const ModalContent: FC = ({ children }) => {
  return <div className='px-4 max-h-[480px]'>{children}</div>;
};

const ModalFooter: FC = ({ children }) => {
  return <div className='flex justify-end p-4 rounded-b bg-secondary'>{children}</div>;
};

class Modal extends PureComponent {
  static Header = ModalHeader;
  static Content = ModalContent;
  static Footer = ModalFooter;

  render() {
    return (
      <Dialog
        open={true}
        onClose={() => {}}
        className='flex items-center justify-center fixed inset-0 overflow-y-auto'
      >
        <Dialog.Overlay className='bg-[#000] opacity-[85%] fixed inset-0' />
        <div className='rounded z-10 w-[440px] min-h-[200px] max-h-[720px] bg-primary'>
          {this.props.children}
        </div>
      </Dialog>
    );
  }
}

export default Modal;
