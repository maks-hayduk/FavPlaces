import * as React from 'react';
import { Formik, Field } from 'formik';

import { BurgerIcon, DoubleShewron, Modal, PlaceItem, SharePlaceItem, SelectField } from 'components';
import { 
  HandleDeletePlaceAction, 
  HandleUpdatePlaceAction, 
  IAllTagsSelect, 
  IPlaceModel, 
  SelectPlaceIdAction, 
  ToggleMenuStatus,
	HandleSharePlaceAction,
  HandleDeleteSharedPlaceAction,
  SearchPlaceAction,
  IFeature,
  HandleAddPlaceAction,
  SetFilteredTagsAction
} from 'store';
import { styled } from 'theme';
import { Coords } from 'types';

import { renderModalByType, SideBarModalConsts } from './Modals/Main';
import { FeatureInfo } from './FeatureInfo';
import { IPlaceInfo } from '../Map/Map';

const TabWrapper = styled.div<{ isActive: boolean }>`
	width: 72px;
	color: ${({ isActive, theme }) => isActive ? theme.color.primary : theme.color.black};
	padding-bottom: 3px;
	cursor: pointer;
	text-align: center;

	${({ isActive, theme }) => isActive && `
		border-bottom: 1px solid ${theme.color.primary};
	`}
`;

interface IWrapperProps {
  isMenuOpen: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  height: 100vh;
  width: 340px;
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 100;
  padding: 15px;

  ${({ isMenuOpen }) =>
    isMenuOpen
      ? `
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  `
      : `
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
  `}

  .close-side-bar-btn {
    cursor: pointer;
    padding-left: 15px;
	}
	
	.tabs {
		display: flex;
		justify-content: space-around;
    margin-top: 20px;
	}

  .place-block {
    overflow-y: auto;
    margin-top: 20px;
  }

  .align-filters {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .no-places-found {
    margin-top: 20px;
    text-align: center;
  }
`;

const TopMenuWrapper = styled.div`
  position: absolute;
  padding: 20px;
  z-index: 50;
  display: flex;
  flex-direction: column;

  .search-field {
    margin-left: 15px;
    width: 250px;
  }

  .menu-top-bar {
    display: flex;
    align-items: center;
  }

  .feature-info {
    height: 100%;
    margin-top: 20px;
  }
`;

export interface IFeatureInfo { 
  show: boolean;
  data: IFeature | null;
}

interface ISideBarProps {
  isMenuOpen: boolean;
  toggleMenuStatus: ToggleMenuStatus;
  places: any[];
  sharedPlaces: any[];
  allTags: IAllTagsSelect;

  selectedPlace: IPlaceModel | null;
  selectPlaceIdAction: SelectPlaceIdAction;

  handleDeletePlaceAction: HandleDeletePlaceAction;
  handleUpdatePlaceAction: HandleUpdatePlaceAction;
  
  handleSharePlaceAction: HandleSharePlaceAction;
  handleDeleteSharedPlaceAction: HandleDeleteSharedPlaceAction;
  
  searchPlaceAction: SearchPlaceAction;
  searchPlaces: any[];
  mapCenter: Coords;
  setMapCenter: (val: Coords) => void;
  handleAddPlaceAction: HandleAddPlaceAction;
  setPlaceInfo: (val: IPlaceInfo) => void;

  featureInfo: IFeatureInfo;
  setFeatureInfo: (val: IFeatureInfo) => void;
  setFilteredTagsAction: SetFilteredTagsAction;
  filteredTags: any[];
}

const SideBar: React.FC<ISideBarProps> = (props) => {
  const { 
    toggleMenuStatus, 
    isMenuOpen, 
    places, 
    selectPlaceIdAction, 
    sharedPlaces, 
    searchPlaceAction, 
    searchPlaces, 
    setMapCenter, 
    setPlaceInfo,
    featureInfo,
    setFeatureInfo,
    setFilteredTagsAction,
    filteredTags
  } = props;

  const [modalType, setModalType] = React.useState<SideBarModalConsts | null>(null);
  const [isFavorites, setIsFavorites] = React.useState<boolean>(true);

  const handleClick = async (id: number, type: SideBarModalConsts, setIsOpen: (val: boolean) => void) => {
    await selectPlaceIdAction(id);
    setIsOpen(true);
    setModalType(type);
  };

  return (
    <Modal
      renderModalContent={(_, setIsOpen) => renderModalByType(modalType, { ...props, setIsOpen })}
      renderComponentContent={(_, setIsOpen) => (
        <>
          {!isMenuOpen && (
            <TopMenuWrapper>
              <div className="menu-top-bar">
                <BurgerIcon onClick={() => toggleMenuStatus(true)} />
                <Formik
                  initialValues={{ search: '' }}
                  onSubmit={() => {}}
                >
                  {({ setFieldValue }) => (
                    <Field
                      className="search-field"
                      name="search"
                      component={SelectField}
                      placeholder="Search for place"
                      onInputChange={(value: string) => {
                        if (value?.length > 2) {
                          searchPlaceAction(value);
                        }
                        setFieldValue('search', value);
                      }}
                      onChange={(value: any) => {
                        setMapCenter(value.data.center);
                        setFeatureInfo({ show: true, data: value.data });
                      }}
                      options={searchPlaces}
                    />
                  )}
                </Formik>
              </div>
              {featureInfo.show && (
                <div className="feature-info">
                  <FeatureInfo 
                    tags={props.allTags}
                    feature={featureInfo.data}
                    setFeatureInfo={setFeatureInfo}
                    handleAddPlaceAction={props.handleAddPlaceAction}
                  />
                </div>
              )}
            </TopMenuWrapper>
          )}
          <Wrapper isMenuOpen={isMenuOpen}>
            <div className="align-filters">
              <div style={{ width: '100%' }}>
                <Formik
                  initialValues={{ tagFilter: filteredTags }}
                  onSubmit={() => {}}
                  enableReinitialize={true}
                >
                  <Field
                    name="tagFilter"
                    component={SelectField}
                    placeholder="Filter by tag"
                    isMulti={true}
                    isClearable={true}
                    closeMenuOnSelect={false}
                    options={props.allTags}
                    onChange={(options: any[]) => {
                      console.log(options)
                      setFilteredTagsAction(options);
                    }}
                  />
                </Formik>
              </div>
              <div className="close-side-bar-btn" onClick={() => toggleMenuStatus(false)}>
                <DoubleShewron />
              </div>
            </div>
            <div className="tabs">
              <TabWrapper isActive={isFavorites} onClick={() => setIsFavorites(true)}>
                Favorites
              </TabWrapper>
              <TabWrapper isActive={!isFavorites} onClick={() => setIsFavorites(false)}>
                Shared
              </TabWrapper>
            </div>
            {isFavorites ? (
              <div className="place-block">
                {places?.length > 0 ? places?.map(place => (
                  <PlaceItem 
                    key={String(place.id)}
                    place={place}
                    onDeleteClick={() => {
											handleClick(Number(place.id), SideBarModalConsts.DeletePlace, setIsOpen);
										}}
										onUpdateClick={() => {
											handleClick(Number(place.id), SideBarModalConsts.UpdatePlace, setIsOpen);
										}}
										onShareClick={() => {
											handleClick(Number(place.id), SideBarModalConsts.SharePlace, setIsOpen);
                    }}
                    onPlaceClick={() => {
                      setPlaceInfo({ show: true, data: place });
                      setMapCenter([place.latitude, place.longtitude]);
                      toggleMenuStatus(false)
                    }}
                  />
                )) : (
                  <p className="no-places-found">
                    No favorite places found
                  </p>
                )}
              </div>
            ) : (
              <div className="place-block">
                {sharedPlaces?.length ? sharedPlaces?.map(place => (
                  <SharePlaceItem 
                    key={String(place.id)}
                    place={place}
                    onDeleteClick={() => {
                      handleClick(Number(place.id), SideBarModalConsts.DeleteSharePlace, setIsOpen);
                    }}
                    onPlaceClick={async () => {
                      setPlaceInfo({ show: true, data: place });
                      setMapCenter([place.latitude, place.longtitude]);
                      toggleMenuStatus(false)
                    }}
                  />
                )) : (
                  <p className="no-places-found">
                    No Shared places found
                  </p>
                )}
              </div>
            )}
          </Wrapper>
        </>
      )}
    />
  );
};

export default SideBar;
