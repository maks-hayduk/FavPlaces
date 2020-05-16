import * as React from 'react';

import { H3, CancelButton, TextButton } from 'components';
import { styled } from 'theme';
import { IPlaceModel, DeletePlaceAction, HandleDeletePlaceAction } from 'store';

const Wrapper = styled.div`
  width: 320px;
  padding: 20px;

  .delete-title {
    text-align: center;
    margin-bottom: 20px;
  }

  .place-title {
    text-align: center;
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin: 0 10px;
    }
  }

  .delete-button {
    color: ${({ theme }) => theme.color.red};
  }
`;

interface IDeletePlaceModal {
  selectedPlace: IPlaceModel;
  setIsOpen: (val: boolean) => void;
  handleDeletePlaceAction: HandleDeletePlaceAction;
}

export const DeletePlaceModal: React.FC<IDeletePlaceModal> = ({ selectedPlace, setIsOpen, handleDeletePlaceAction }) => {
  return selectedPlace.id ? (
    <Wrapper>
      <H3 className="delete-title">Are you sure to delete this place?</H3>
      <p className="place-title">{selectedPlace.title}</p>
      <div className="buttons">
        <CancelButton 
          className="delete-button"
          onClick={() => {
            setIsOpen(false);
            handleDeletePlaceAction(Number(selectedPlace.id));
          }}
        >
          Delete
        </CancelButton>
        <TextButton onClick={() => setIsOpen(false)}>Cancel</TextButton>
      </div>
    </Wrapper>
  ) : null;
};
