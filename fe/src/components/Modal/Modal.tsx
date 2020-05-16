import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import { CrossIcon } from 'components';
import { styled } from 'theme';

import { customStyles } from './modalCustomStyles';

const Wrapper = styled.div`
  .cross-button {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
`;
 
ReactModal.setAppElement('#root');
(ReactModal.defaultStyles.overlay as React.CSSProperties).zIndex = 1000;

type RenderContentFunction = (isOpen: boolean, setIsOpen: (isOpen: boolean) => void) => React.ReactFragment;

interface IModal {
  renderComponentContent: RenderContentFunction;
  renderModalContent: RenderContentFunction;
}

export const Modal: React.FC<IModal> = ({ renderComponentContent, renderModalContent }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      {renderComponentContent(isOpen, setIsOpen)}
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={() => setIsOpen(false)}
      >
        <Wrapper>
          <CrossIcon className="cross-button" onClick={() => setIsOpen(false)}/>
        </Wrapper>
        {renderModalContent(isOpen, setIsOpen)}
      </ReactModal>
    </>
  );
};
