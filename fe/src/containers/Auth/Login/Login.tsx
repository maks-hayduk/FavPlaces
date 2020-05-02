import * as React from 'react';
import { Form, Field, Formik } from 'formik';
import { Link } from 'react-router-dom';

import { RouteConst } from 'consts';
import { InputField, Button, TextButton, H3 } from 'components';
import { styled } from 'theme';
import { SignInAction } from 'store';

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
    width: 40%;

    & > * {
      margin-bottom: 15px;
    }

    button {
      margin: 0 10px;
    }
  }
`;

interface IFormikValues {
  email: string;
  password: string;
}

interface ILoginContainer {
  signInAction: SignInAction;
}

const LoginContainer: React.FC<ILoginContainer> = ({ signInAction }) => {
  return (
    <LoginWrapper>
      <Formik<IFormikValues>
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values) => signInAction(values)}
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
            <div>
              <Button type="submit" disabled={isSubmitting}>
                Proceed
              </Button>
              <Link to={RouteConst.SignUp}>
                <TextButton>
                  Sign up
                </TextButton>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </LoginWrapper>
  );
};

export default LoginContainer;