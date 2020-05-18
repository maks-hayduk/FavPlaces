import * as React from 'react';
import { Popup } from 'react-mapbox-gl';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';

import { IAllTagsSelect } from 'store';
import { DateFormatConst } from 'consts';
import { InputField, Button, CreatableSelectField } from 'components';
import { styled } from 'theme';
import { IOptionType } from 'types';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 250px;

  .add-place-btn {
    margin-top: 10px;
  }

  .add-place-tags {
    margin: 10px 0;
  }
`;

interface IFormikProps {
  title: string;
  tags: IOptionType[];
}

interface IAddPlacePopupProps {
  coordinates: [number, number];
  onClick: (val: { 
    title: string, 
    latitude: number, 
    longtitude: number, 
    datetime: string, 
    tags: IOptionType[]
  }) => void;
  allTags: IAllTagsSelect;
}

export const AddPlacePopup: React.FC<IAddPlacePopupProps> = ({ coordinates, onClick, allTags }) => {
  return (
    <Popup
      coordinates={coordinates}
    >
      <Formik<IFormikProps>
        initialValues={{
          title: '',
          tags: []
        }}
        onSubmit={(values) => {
          onClick({
            title: values.title,
            latitude: coordinates[0],
            longtitude: coordinates[1],
            datetime: moment().format(DateFormatConst.DefaultDateTime),
            tags: values.tags
          });
        }}
      >
        {({ isSubmitting, values, handleSubmit }) => (
          <StyledForm>
            <Field
              autoComplete="off"
              component={InputField}
              label="Title"
              placeholder="Input your place name"
              name="title"
            />
            <Field
              className="add-place-tags"
              component={CreatableSelectField}
              placeholder="Choose tags"
              name="tags"
              options={allTags}
            />
            <Button
              type="button"
              className="add-place-btn" 
              onClick={() => handleSubmit()}
              disabled={isSubmitting}
            >
              Add place
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Popup>
  );
};
