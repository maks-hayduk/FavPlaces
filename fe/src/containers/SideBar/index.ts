import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  toggleMenuStatus,
  selectMenuStatus,
  selectFavoritePlaces,
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
  handleAddPlaceAction,
  setFilteredTagsAction,
  selectFilteredTags
} from 'store';

import SideBarContainer from './SideBar';

const mapStateToProps = (state: IStoreState) => ({
  isMenuOpen: selectMenuStatus(state),
  places: selectFavoritePlaces(state),
  selectedPlace: selectCurrentPlace(state),
  allTags: selectAllTags(state),
  sharedPlaces: selectSharedPlaces(state),
  searchPlaces: selectSearchPlaces(state),
  filteredTags: selectFilteredTags(state)
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
      handleAddPlaceAction,
      setFilteredTagsAction
    },
    dispatch
  );

export const ConnectedSideBartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);

export default ConnectedSideBartContainer;
