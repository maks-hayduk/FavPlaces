import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  handleLogoutAction,
  selectUserData,
  handleUpdateUserAction
} from 'store';

import ProfileControlsContainer from './ProfileControls';

const mapStateToProps = (state: IStoreState) => ({
  userData: selectUserData(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      handleLogoutAction,
      handleUpdateUserAction
    },
    dispatch
  );

export const ConnectedProfileControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileControlsContainer);

export default ConnectedProfileControlsContainer;
