import * as React from 'react';

import { DeleteIcon, SearchIcon } from 'components';
import { styled, theme as themeColors } from 'theme';

import withFormField, { IFormComponent } from './withFormField';

export const Input = styled.input<IFormComponent>`
  width: 100%;
  height: 39px;
  padding: 15px;
  font-size: 15px;
  box-shadow: none;
  outline: none;
  color: ${({ theme }) => theme.color.black};
  border: solid 1px ${({ invalid, theme }) => (invalid ? theme.color.red : theme.color.gray)};
  transition: border-color 100ms;
  padding: 10px;
  border-radius: 3px;

  &:disabled {
    opacity: 0.5;
    background-color: ${({ theme }) => theme.color.white};
  }
  ${({ disabled, invalid, theme }) =>
    !disabled &&
    `
    &:hover {
      border: solid 1px ${invalid ? theme.color.red : theme.color.black};
    }
  `}
  &:focus {
    border: solid 1px ${({ theme, invalid }) => (invalid ? theme.color.red : theme.color.primary)};
    caret-color: ${({ theme }) => theme.color.primary};
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.gray};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.color.gray};
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;

  .search-icon {
    position: absolute;
    top: 13px;
    left: 9px;
  }

  .search-input {
    ::-webkit-input-placeholder {
      padding-left: 20px;
    }

    :-ms-input-placeholder {
      padding-left: 20px;
    }

    ::placeholder {
      padding-left: 20px;
    }
  }

  .delete-icon {
    position: absolute;
    top: 12px;
    right: 8px;
  }
`;

export const SearchInput: React.FC<any> = ({ onCrossClick, ...props }) => {
  const [isCrossVisible, setCrossVisibility] = React.useState<boolean>(false);

  React.useEffect(() => {
    setCrossVisibility(props.value !== '');
  }, [props.value]);

  return (
    <SearchInputWrapper>
      {!props.value && <SearchIcon className="search-icon" color={themeColors.color.gray} />}
      <Input className="search-input" {...props} />
      {isCrossVisible && (
        <DeleteIcon
          className="delete-icon"
          onClick={() => {
            setCrossVisibility(false);
            if (onCrossClick) {
              onCrossClick();
            }
          }}
        />
      )}
    </SearchInputWrapper>
  );
};

export const InputField = withFormField(Input);

export const SearchInputField = withFormField(SearchInput);
