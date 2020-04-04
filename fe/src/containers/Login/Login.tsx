import * as React from 'react';
import { Form, Field, Formik } from 'formik';

import { InputField, Button, H3 } from 'components';
import { styled } from 'theme';

const LoginWrapper = styled.div`
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    & > * {
      margin-bottom: 15px;
    }
  }
`;

interface IFormikValues {
  email: string;
  password: string;
}

interface ILoginContainer {}

const LoginContainer: React.FC<ILoginContainer> = () => {
  return (
    <LoginWrapper>
      <Formik<IFormikValues>
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={() => null}
      >
        {({ isSubmitting }) => (
          <Form>
            <H3>Login</H3>
            <Field
              component={InputField}
              label="Email"
              placeholder="Input your email"
              name="email"
            />
            <Field
              component={InputField}
              label="Password"
              placeholder="Input your password"
              name="password"
              type="password"
            />
            <Button type="submit" disabled={isSubmitting}>
              Proceed
            </Button>
          </Form>
        )}
      </Formik>
    </LoginWrapper>
  );
};

export default LoginContainer;
