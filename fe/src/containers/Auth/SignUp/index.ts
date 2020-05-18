import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  signUpAction
} from 'store';

import SignUpContainer from './SignUp';

const mapStateToProps = (state: IStoreState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      signUpAction,
      pushUrl: push
    },
    dispatch
  );

export const ConnectedSignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);

export default ConnectedSignUpContainer;
