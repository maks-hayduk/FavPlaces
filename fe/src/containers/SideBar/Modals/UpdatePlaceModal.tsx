import * as React from 'react';
import { Formik, Form, Field } from 'formik';

import { H3, CancelButton, TextButton, InputField, TextAreaField, CreatableSelectField, Button } from 'components';
import { styled } from 'theme';
import { IPlaceModel, UpdatePlaceAction, IAllTagsSelect, HandleUpdatePlaceAction } from 'store';

const Wrapper = styled.div`
  width: 360px;
  padding: 20px;

  .update-place-title {
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
    margin-top: 15px;

    button {
      margin: 0 10px;
    }
  }

  .add-place-tags {
    margin: 10px 0;
  }
`;

interface IUpdatePlaceModal {
  selectedPlace: IPlaceModel;
  setIsOpen: (val: boolean) => void;
  handleUpdatePlaceAction: HandleUpdatePlaceAction;
  allTags: IAllTagsSelect;
}

export const UpdatePlaceModal: React.FC<IUpdatePlaceModal> = ({ 
  selectedPlace, 
  setIsOpen, 
  handleUpdatePlaceAction, 
  allTags 
}) => {
  return selectedPlace.id ? (
    <Wrapper>
      <H3 className="update-place-title">Updating place info</H3>
      <Formik
        initialValues={{
          title: selectedPlace.title,
          tags: selectedPlace.tags,
          description: selectedPlace.description
        }}
        enableReinitialize={true}
        onSubmit={(values) => {}}
      >
        {({ values }) => (
          <Form>
            <Field
              autoComplete="off"
              component={InputField}
              label="Title"
              placeholder="Place name"
              name="title"
            />
            <Field
              className="add-place-tags"
              component={CreatableSelectField}
              placeholder="Choose tags"
              name="tags"
              options={allTags}
            />
            <Field
              autoComplete="off"
              component={TextAreaField}
              label="Description"
              placeholder="Place description"
              name="description"
            />
            <div className="buttons">
              <Button   
                type="button"
                onClick={() => {
                  handleUpdatePlaceAction(Number(selectedPlace.id), { ...selectedPlace, ...values });
                  setIsOpen(false);
                }}
              >
                Update
              </Button>
              <TextButton onClick={() => setIsOpen(false)}>Cancel</TextButton>
            </div>
          </Form>
        )}
      </Formik>
    </Wrapper>
  ) : null;
};
