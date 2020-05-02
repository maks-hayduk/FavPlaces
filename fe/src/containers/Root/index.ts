import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  selectMenuStatus
} from 'store';

import RootContainer from './Root';

const mapStateToProps = (state: IStoreState) => ({
  isMenuOpen: selectMenuStatus(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {},
    dispatch
  );

export const ConnectedRootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);

export default ConnectedRootContainer;
