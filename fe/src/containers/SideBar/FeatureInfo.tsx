import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';

import { CrossIcon, Button, CreatableSelectField, TextAreaField } from 'components';
import { DateFormatConst } from 'consts';
import { styled } from 'theme';
import { IFeature, IAllTagsSelect, HandleAddPlaceAction } from 'store';
import { IOptionType } from 'types';

import { IFeatureInfo } from './SideBar';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .add-place-btn {
    margin-top: 10px;
  }

  .add-place-tags {
    margin: 10px 0;
  }
`;

const Wrapper = styled.div`
  width: 315px;
  padding: 25px;
  position: relative;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  background-color: white;

  .cross-button {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }

  .place-title {
    margin-bottom: 10px;
    text-align: center;
  }
`;

interface IFormikProps {
  title: string;
  tags: IOptionType[];
  description: string;
}

interface IFeatureInfoProps {
  feature: IFeature | null;
  setFeatureInfo: (val: IFeatureInfo) => void;
  tags: IAllTagsSelect;
  handleAddPlaceAction: HandleAddPlaceAction;
}

export const FeatureInfo: React.FC<IFeatureInfoProps> = ({ feature, setFeatureInfo, tags, handleAddPlaceAction }) => {
  const closeFeatureInfo = () => {
    setFeatureInfo({ show: false, data: null });
  }

  return feature ? (
    <Wrapper>
      <CrossIcon className="cross-button" onClick={closeFeatureInfo}/>
      <p className="place-title">{feature.text}</p>
      <Formik<IFormikProps>
        initialValues={{
          title: feature.text,
          description: '',
          tags: []
        }}
        enableReinitialize={true}
        onSubmit={async (values) => {
          await handleAddPlaceAction({
            title: values.title,
            latitude: feature.center[0],
            longtitude: feature.center[1],
            datetime: moment().format(DateFormatConst.DefaultDateTime),
            tags: values.tags,
            description: values.description
          });
          closeFeatureInfo();
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <StyledForm>
            <Field
              className="add-place-tags"
              component={CreatableSelectField}
              placeholder="Choose tags"
              name="tags"
              options={tags}
            />
            <Field
              autoComplete="off"
              component={TextAreaField}
              label="Description"
              placeholder="Place description"
              name="description"
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
    </Wrapper>
  ) : null;
};
