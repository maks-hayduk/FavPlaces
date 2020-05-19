import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  handleAddPlaceAction,
  getPlacesAction,
  selectAllTags,
  getTagsAction,
  getSharedPlacesAction,
  selectAllPlaces
} from 'store';

import MapContainer from './Map';

const mapStateToProps = (state: IStoreState) => ({
  allTags: selectAllTags(state),
  allPlaces: selectAllPlaces(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      handleAddPlaceAction,
      getPlacesAction,
      getTagsAction,
      getSharedPlacesAction
    },
    dispatch
  );

export const ConnectedMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);

export default ConnectedMapContainer;
