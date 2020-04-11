import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  IStoreState
} from 'store';

import SideBarContainer from './SideBar';

const mapStateToProps = (state: IStoreState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {},
    dispatch
  );

export const ConnectedSideBartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);

export default ConnectedSideBartContainer;
