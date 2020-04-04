import React from 'react';
import ReactInputMask, { InputState, MaskOptions } from 'react-input-mask';

import { styled } from 'theme';

import withFormField, { IFormComponent } from './withFormField';

const Wrapper = styled.div<IFormComponent>`
  input {
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
  }
`;

interface IMaskInputProps extends IFormComponent {
  fieldClassName?: string;
  mask: string;
  maskChar?: string | null;
  formatChars?: { [key: string]: string };
  alwaysShowMask?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  beforeMaskedValueChange?(
    newState: InputState,
    oldState: InputState,
    userInput: string,
    maskOptions: MaskOptions
  ): InputState;
}

export const MaskInput: React.FC<IMaskInputProps> = ({ invalid, fieldClassName, ...props }) => (
  <Wrapper invalid={invalid} {...props}>
    <ReactInputMask {...props} />
  </Wrapper>
);

export const MaskInputField = withFormField(MaskInput as any);
