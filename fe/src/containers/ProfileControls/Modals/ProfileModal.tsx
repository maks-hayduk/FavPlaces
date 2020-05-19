import * as React from 'react';
import { Formik, Form, Field } from 'formik';

import { H3, Button, TextButton, InputField } from 'components';
import { styled } from 'theme';
import { IUserDataSelect } from 'store';

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
}

interface IProfileModalProps {
  userData: IUserDataSelect;
  setIsOpen: (val: boolean) => void;
}

export const ProfileModal: React.FC<IProfileModalProps> = ({ 
  userData, 
  setIsOpen,
}) => {
  return userData.id ? (
    <Wrapper>
      <H3 className="profile-title">Profile information</H3>
      <Formik<IFormikValues>
        initialValues={{
          name: userData.name,
          surname: userData.surname,
          email: userData.email
        }}
        onSubmit={(values) => {
          setIsOpen(false);
        }}
      >
        {() => (
          <Form>
            <Field
              component={InputField}
              label="Name"
              placeholder="Input your name"
              name="name"
            />
            <Field
              component={InputField}
              label="Surname"
              placeholder="Input your surname"
              name="surname"
            />
            <Field
              component={InputField}
              label="Email"
              placeholder="Input your email"
              name="email"
            />
            <div className="buttons">
              <Button type="submit">Update</Button>
              <TextButton onClick={() => setIsOpen(false)}>Close</TextButton>
            </div>
          </Form>
        )}
      </Formik>
    </Wrapper>
  ) : null;
};
