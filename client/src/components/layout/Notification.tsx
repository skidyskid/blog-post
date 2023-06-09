import { styled } from '../../stitches.config';
import React from 'react';

const NotificationContainer = styled('div', {
  position: 'relative',
  width: '100vw',
  padding: '1.25rem 2rem',
  color: 'White',
  backgroundColor: 'Black',
  fontSize: '$m-5',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@desktop': {
    fontSize: '$5',
  },
});

const CloseBtn = styled('button', {
  border: 'none',
  color: 'inherit',
  backgroundColor: 'transparent',
  fontSize: 'inherit',
});

interface Props {
  message: React.ReactNode;
  onClose: () => void;
}

const Notication = ({ message, onClose }: Props) => {
  return (
    <NotificationContainer>
      {message} <CloseBtn onClick={onClose}>&#10005;</CloseBtn>
    </NotificationContainer>
  );
};

export default Notication;
