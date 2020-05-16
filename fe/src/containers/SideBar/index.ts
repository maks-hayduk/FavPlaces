import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  toggleMenuStatus,
  selectMenuStatus,
  selectAllPlaces,
  selectPlaceIdAction,
  selectCurrentPlace,
  handleDeletePlaceAction,
  selectAllTags,
  handleUpdatePlaceAction
} from 'store';

import SideBarContainer from './SideBar';

const mapStateToProps = (state: IStoreState) => ({
  isMenuOpen: selectMenuStatus(state),
  places: selectAllPlaces(state),
  selectedPlace: selectCurrentPlace(state),
  allTags: selectAllTags(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      toggleMenuStatus,
      selectPlaceIdAction,
      handleDeletePlaceAction,
      handleUpdatePlaceAction
    },
    dispatch
  );

export const ConnectedSideBartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);

export default ConnectedSideBartContainer;
