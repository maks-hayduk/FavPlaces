import { styled } from 'theme';

import withFormField, { IFormComponent } from './withFormField';

export const TextArea = styled.textarea<IFormComponent>`
  width: 100%;
  height: 114px;
  font-size: 15px;
  box-shadow: none;
  resize: none;
  outline: none;
  color: ${({ theme }) => theme.color.black};
  border: solid 1px ${({ invalid, theme }) => (invalid ? theme.color.red : theme.color.gray)};
  transition: border-color 100ms;
  
  padding: 10px;
  border-radius: 4px;

  &:disabled {
    opacity: 0.5;
    background-color: ${({ theme }) => theme.color.white};
  }
  &:hover {
    border: solid 1px ${({ invalid, theme }) => (invalid ? theme.color.red : theme.color.black)};
  }
  &:focus {
    border: solid 1px ${({ invalid, theme }) => (invalid ? theme.color.red : theme.color.primary)};
  }

  ::placeholder {
    display: none;
  }
`;

export const TextAreaField = withFormField(TextArea);
