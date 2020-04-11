import * as React from 'react';
import { Form, Field, Formik } from 'formik';
import { Link } from 'react-router-dom';

import { RouteConst } from 'consts';
import { InputField, Button, IconTextButton, H3, PrimaryLeftArrowIcon } from 'components';
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
    width: 40%;

    .back-btn {
      width: 100%;
      display: flex;
    }

    & > * {
      margin-bottom: 15px;
    }
  }
`;

interface IFormikValues {
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface ILoginContainer {}

const LoginContainer: React.FC<ILoginContainer> = () => {
  return (
    <LoginWrapper>
      <Formik<IFormikValues>
        initialValues={{
          name: '',
          surname: '',
          email: '',
          password: ''
        }}
        onSubmit={() => null}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="back-btn"> 
              <Link to={RouteConst.Login}>
                <IconTextButton
                  text="Back to login"
                  Icon={<PrimaryLeftArrowIcon />}
                  primary={false}
                />
              </Link>
            </div>
            <H3>Login</H3>
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
            <Field
              component={InputField}
              label="Password"
              placeholder="Input your password"
              name="password"
              type="password"
            />
            <Button type="submit" disabled={isSubmitting}>
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </LoginWrapper>
  );
};

export default LoginContainer;
