import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  toggleMenuStatus,
  selectMenuStatus,
  selectAllPlaces
} from 'store';

import SideBarContainer from './SideBar';

const mapStateToProps = (state: IStoreState) => ({
  isMenuOpen: selectMenuStatus(state),
  places: selectAllPlaces(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      toggleMenuStatus
    },
    dispatch
  );

export const ConnectedSideBartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);

export default ConnectedSideBartContainer;
