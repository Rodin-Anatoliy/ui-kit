import { Modal } from '../lib/components/Widgets/Modal';
import { Title } from '../lib/styles/shared.styles';
import React from 'react';

const ModalUIKit = () => (
  <>
    <Title>MODAL</Title>
    <Modal header="Modal Header" isClosable>
      <div>some texts</div>
    </Modal>
  </>
);

export { ModalUIKit };
