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
  handleUpdatePlaceAction,
  handleSharePlaceAction,
  selectSharedPlaces,
  handleDeleteSharedPlaceAction,
  searchPlaceAction,
  selectSearchPlaces,
  handleAddPlaceAction
} from 'store';

import SideBarContainer from './SideBar';

const mapStateToProps = (state: IStoreState) => ({
  isMenuOpen: selectMenuStatus(state),
  places: selectAllPlaces(state),
  selectedPlace: selectCurrentPlace(state),
  allTags: selectAllTags(state),
  sharedPlaces: selectSharedPlaces(state),
  searchPlaces: selectSearchPlaces(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      toggleMenuStatus,
      selectPlaceIdAction,
      handleDeletePlaceAction,
      handleUpdatePlaceAction,
      handleSharePlaceAction,
      handleDeleteSharedPlaceAction,
      searchPlaceAction,
      handleAddPlaceAction
    },
    dispatch
  );

export const ConnectedSideBartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);

export default ConnectedSideBartContainer;
