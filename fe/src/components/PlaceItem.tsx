import  * as React from 'react';

import { styled } from 'theme';
import { IPlaceModel } from 'store';
import { H3, TextButton, EditIcon, ShareIcon, TagWrapper } from 'components';

interface IWrapperProps {
  enableToggleDescription: boolean;
  isExpanded: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${({ theme }) => theme.color.iron};
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .align-header {
    display: flex;
    justify-content: space-between;

    .action-icons {
      display: flex;
    }
  }

  .place-info-block {
    display: flex;
    flex-direction: column;

    .tags {
      display: flex;
      margin: 5px 0;
    }
  }

  .bottom-buttons-block {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    padding-bottom: 10px;

    .place-delete-btn {
      color: ${({ theme }) => theme.color.red};
    }
  }

  .place-description {
    font-size: 15px;
    margin: 5px 0;
    ${({ enableToggleDescription }) => enableToggleDescription && `
      cursor: pointer;
    `}
  }
`;

const MAX_DESCRIPTION_SIZE = 35;

interface IPlaceItemProps {
  place: IPlaceModel;
  onDeleteClick: () => void;
  onUpdateClick: () => void;
  onShareClick: () => void;
  onPlaceClick: () => void;
}

export const PlaceItem: React.FC<IPlaceItemProps> = ({ place, onDeleteClick, onUpdateClick, onShareClick, onPlaceClick }) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const enableToggleDescription = React.useMemo((): boolean => {
    return Boolean(place.description && place.description?.length > MAX_DESCRIPTION_SIZE);
  }, [place]);

  return (
    <Wrapper enableToggleDescription={enableToggleDescription} isExpanded={isExpanded}>
      <div className="place-info-block">
        <div className="align-header">
          <H3>{place.title}</H3>
          <div className="action-icons">
            <EditIcon onClick={onUpdateClick}/>
            <ShareIcon onClick={onShareClick}/>
          </div>
        </div>
        {place.tags && (
          <div className="tags">
            {place.tags?.map(tag => (
              <TagWrapper key={String(tag.id)}>{tag.label}</TagWrapper>
            ))}
          </div>
        )}
        {place.description && (
          <p 
            className="place-description"
            onClick={() => {
              if (enableToggleDescription) {
                if (!isExpanded) {
                  setIsExpanded(true);
                } else {
                  setIsExpanded(false);
                }
              }
            }}
          >
            {!isExpanded ? `${place.description.substring(0, MAX_DESCRIPTION_SIZE)}${enableToggleDescription ? '...' : ''}` : place.description}
          </p>
        )}
      </div>
      <div className="bottom-buttons-block">
        <TextButton onClick={onPlaceClick}>See on map</TextButton>
        <TextButton className="place-delete-btn" onClick={onDeleteClick}>Delete</TextButton>
      </div>
    </Wrapper>
  );
};
