import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  handleLoginAction
} from 'store';

import LoginContainer from './Login';

const mapStateToProps = (state: IStoreState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      handleLoginAction
    },
    dispatch
  );

export const ConnectedLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

export default ConnectedLoginContainer;
