import * as React from 'react';
import { Popup } from 'react-mapbox-gl';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';

import { DateFormatConst } from 'consts';
import { InputField, Button } from 'components';
import { styled } from 'theme';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 250px;

  .add-place-btn {
    margin-top: 10px;
  }
`;

interface IFormikProps {
  title: string;
}

interface IAddPlacePopupProps {
  coordinates: [number, number];
  onClick: (val: { title: string, latitude: number, longtitude: number, datetime: string }) => void;
}

export const AddPlacePopup: React.FC<IAddPlacePopupProps> = ({ coordinates, onClick }) => {
  return (
    <Popup
      coordinates={coordinates}
    >
      <Formik<IFormikProps>
        initialValues={{
          title: ''
        }}
        onSubmit={(values) => {
          onClick({
            title: values.title,
            latitude: coordinates[0],
            longtitude: coordinates[1],
            datetime: moment().format(DateFormatConst.DefaultDateTime)
          });
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Field
              autoComplete="off"
              component={InputField}
              label="Title"
              placeholder="Input your place name"
              name="title"
            />
            <Button
              className="add-place-btn" 
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
