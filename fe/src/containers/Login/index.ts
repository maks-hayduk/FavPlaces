import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState
} from 'store';

import LoginContainer from './Login';

const mapStateToProps = (state: IStoreState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {},
    dispatch
  );

export const ConnectedLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

export default ConnectedLoginContainer;
