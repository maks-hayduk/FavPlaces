import  * as React from 'react';

import { styled } from 'theme';
import { IPlaceModel } from 'store';
import { H3, TextButton } from 'components';

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

  .place-info-block {
    display: flex;
    flex-direction: column;
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
}

export const PlaceItem: React.FC<IPlaceItemProps> = ({ place }) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const enableToggleDescription = React.useMemo((): boolean => {
    return Boolean(place.description && place.description?.length > MAX_DESCRIPTION_SIZE);
  }, [place]);

  return (
    <Wrapper enableToggleDescription={enableToggleDescription} isExpanded={isExpanded}>
      <div className="place-info-block">
        <H3>{place.title}</H3>
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
            {!isExpanded ? `${place.description.substring(0, MAX_DESCRIPTION_SIZE)}...` : place.description}
          </p>
        )}
      </div>
      <div className="bottom-buttons-block">
        <TextButton>See on map</TextButton>
        <TextButton className="place-delete-btn">Delete</TextButton>
      </div>
    </Wrapper>
  );
};
