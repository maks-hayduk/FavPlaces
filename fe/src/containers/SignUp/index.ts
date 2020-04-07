import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState
} from 'store';

import SignUpContainer from './SignUp';

const mapStateToProps = (state: IStoreState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {},
    dispatch
  );

export const ConnectedSignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);

export default ConnectedSignUpContainer;
