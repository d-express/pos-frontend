import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label
} from 'reactstrap';

const CategoryModal = ({ modalOpen, toggleModal, }) => {
  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName='modal-right'
      backdrop='static'
    >
      <ModalHeader toggle={toggleModal}>Categoría</ModalHeader>
      <ModalBody>
        <Label>Nombre</Label>
        <Input />
      </ModalBody>
      <ModalFooter>
        <Button color='secondary' outline onClick={toggleModal}>
          Cancelar
        </Button>
        <Button color='primary' onClick={toggleModal}>
          Guardar
        </Button>
        {' '}
      </ModalFooter>
    </Modal>
  );
};

export default CategoryModal;
