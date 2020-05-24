import * as React from 'react';
import { Form, Field, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Push } from 'connected-react-router';

import { RouteConst } from 'consts';
import { InputField, Button, IconTextButton, H3, PrimaryLeftArrowIcon } from 'components';
import { styled } from 'theme';
import { SignUpAction } from 'store';
import { validationUtil } from 'utils';

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

interface ILoginContainer {
  signUpAction: SignUpAction;
  pushUrl: Push;
}

const LoginContainer: React.FC<ILoginContainer> = ({ signUpAction, pushUrl }) => {
  return (
    <LoginWrapper>
      <Formik<IFormikValues>
        initialValues={{
          name: '',
          surname: '',
          email: '',
          password: ''
        }}
        onSubmit={async (values) => {
          await signUpAction(values);
          pushUrl(RouteConst.Login);
        }}
      >
        {({ isSubmitting, isValid }) => (
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
            <H3>Sign up</H3>
            <Field
              component={InputField}
              label="Name"
              placeholder="Input your name"
              name="name"
              validate={validationUtil.required}
            />
            <Field
              component={InputField}
              label="Surname"
              placeholder="Input your surname"
              name="surname"
              validate={validationUtil.required}
            />
            <Field
              component={InputField}
              label="Email"
              placeholder="Input your email"
              name="email"
              validate={validationUtil.compose(validationUtil.required, validationUtil.email)}
            />
            <Field
              component={InputField}
              label="Password"
              placeholder="Input your password"
              name="password"
              type="password"
              validate={validationUtil.required}
            />
            <Button type="submit" disabled={isSubmitting || !isValid}>
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </LoginWrapper>
  );
};

export default LoginContainer;
