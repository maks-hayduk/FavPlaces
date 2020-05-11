import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  handleAddPlaceAction,
  getPlacesAction
} from 'store';

import MapContainer from './Map';

const mapStateToProps = (state: IStoreState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      handleAddPlaceAction,
      getPlacesAction
    },
    dispatch
  );

export const ConnectedMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);

export default ConnectedMapContainer;
