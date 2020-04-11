import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState
} from 'store';

import AuthContainer from './Auth';

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
)(AuthContainer);

export default ConnectedLoginContainer;
