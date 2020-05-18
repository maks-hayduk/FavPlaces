import * as React from 'react';
import { Formik, Form, Field } from 'formik';

import { H3, Button, TextButton, InputField } from 'components';
import { styled } from 'theme';
import { IPlaceModel, IUserDataSelect, HandleSharePlaceAction } from 'store';

const Wrapper = styled.div`
  width: 350px;
  padding: 20px;

  .share-title {
    text-align: center;
    margin-bottom: 20px;
  }

  .place-title {
    text-align: center;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    button {
      margin: 0 10px;
    }
  }

  .delete-button {
    color: ${({ theme }) => theme.color.red};
  }
`;

interface IFormikValues {
  email: string;
}

interface ISharePlaceModal {
  selectedPlace: IPlaceModel;
  userData: IUserDataSelect;
  setIsOpen: (val: boolean) => void;
  handleSharePlaceAction: HandleSharePlaceAction;
}

export const SharePlaceModal: React.FC<ISharePlaceModal> = ({ 
  selectedPlace, 
  userData, 
  setIsOpen,
  handleSharePlaceAction
}) => {
  return selectedPlace.id ? (
    <Wrapper>
      <H3 className="share-title">Sharing favorite place</H3>
      <p className="place-title">{selectedPlace.title}</p>
      <Formik<IFormikValues>
        initialValues={{
          email: ''
        }}
        onSubmit={(values) => {
          setIsOpen(false);
          handleSharePlaceAction(Number(selectedPlace.id), values.email);    
        }}
      >
        {() => (
          <Form>
            <Field
              component={InputField}
              label="Email"
              placeholder="Input email to share place"
              name="email"
            />
            <div className="buttons">
              <Button type="submit">Share</Button>
              <TextButton onClick={() => setIsOpen(false)}>Cancel</TextButton>
            </div>
          </Form>
        )}
      </Formik>
    </Wrapper>
  ) : null;
};
