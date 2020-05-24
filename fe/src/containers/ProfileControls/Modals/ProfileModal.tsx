import * as React from 'react';
import { Formik, Form, Field } from 'formik';

import { H3, Button, TextButton, InputField } from 'components';
import { styled } from 'theme';
import { IUserDataSelect, HandleUpdateUserAction } from 'store';
import { validationUtil } from 'utils';

const Wrapper = styled.div`
  width: 500px;
  padding: 20px;

  .profile-title {
    text-align: center;
    margin-bottom: 20px;
  }

  .form-field {
    margin-bottom: 20px;
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
`;

interface IFormikValues {
  name: string;
  surname: string;
  email: string;
  oldPassword: string;
  newPassword: string;
}

interface IProfileModalProps {
  userData: IUserDataSelect;
  setIsOpen: (val: boolean) => void;
  handleUpdateUserAction: HandleUpdateUserAction;
}

export const ProfileModal: React.FC<IProfileModalProps> = ({ 
  userData, 
  setIsOpen,
  handleUpdateUserAction
}) => {
  return userData.id ? (
    <Wrapper>
      <H3 className="profile-title">Profile information</H3>
      <Formik<IFormikValues>
        initialValues={{
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
          oldPassword: '',
          newPassword: ''
        }}
        onSubmit={(values) => {
          handleUpdateUserAction(values as any);
          setIsOpen(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field
              component={InputField}
              label="Name"
              placeholder="Your name"
              name="name"
              validate={validationUtil.required}
            />
            <Field
              component={InputField}
              label="Surname"
              placeholder="Your surname"
              name="surname"
              validate={validationUtil.required}
            />
            <Field
              component={InputField}
              label="Email"
              placeholder="Your email"
              name="email"
              validate={validationUtil.compose(validationUtil.required, validationUtil.email)}
            />
            {/* <Field
              component={InputField}
              label="Old password"
              placeholder="Input your old password"
              name="oldPassword"
              type="password"
            />
            <Field
              component={InputField}
              label="New password"
              placeholder="Input your new password"
              name="newPassword"
              type="password"
            /> */}
            <div className="buttons">
              <Button type="submit" disabled={isSubmitting || !isValid}>Update</Button>
              <TextButton onClick={() => setIsOpen(false)}>Close</TextButton>
            </div>
          </Form>
        )}
      </Formik>
    </Wrapper>
  ) : null;
};
