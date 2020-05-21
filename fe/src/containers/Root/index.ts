import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  selectMenuStatus,
  selectNotifications,
  handleTokenLoginAction,
  selectUserData,
  toggleMenuStatus,
  handleDeleteImageAction
} from 'store';

import RootContainer from './Root';

const mapStateToProps = (state: IStoreState) => ({
  isMenuOpen: selectMenuStatus(state),
  notifications: selectNotifications(state),
  userData: selectUserData(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      handleTokenLoginAction,
      toggleMenuStatus,
      handleDeleteImageAction
    },
    dispatch
  );

export const ConnectedRootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);

export default ConnectedRootContainer;
