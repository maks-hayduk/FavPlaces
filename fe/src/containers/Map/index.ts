import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState,
  getFeatureDataAction,
  selectCurrentFeature
} from 'store';

import MapContainer from './Map';

const mapStateToProps = (state: IStoreState) => ({
  currentFeature: selectCurrentFeature(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getFeatureDataAction
    },
    dispatch
  );

export const ConnectedMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);

export default ConnectedMapContainer;
