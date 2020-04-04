import { css, styled } from 'theme';

export const sharedStyle = css`
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  white-space: nowrap;
  line-height: 17px;
  letter-spacing: normal;
  cursor: pointer;
  border: 0;
  outline: 0;
`;

interface IBtnProps {
  secondary?: boolean;
}

interface ITextButtonProps {
  removal?: boolean;
}

export const Button = styled.button<IBtnProps>`
  ${sharedStyle}

  height: 38px;
  padding: 10px 30px;
  text-align: center;
  color: ${({ secondary, theme }) => (secondary ? theme.color.primary : theme.color.white)};
  background-color: ${({ secondary, theme }) => (secondary ? theme.color.secondary : theme.color.primaryDarker)};

  &:hover {
    background-color: ${({ secondary, theme }) => (secondary ? theme.color.secondaryDark : theme.color.primary)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:active {
    background-color: ${({ secondary, theme }) => (secondary ? theme.color.secondary : theme.color.primaryLight)};
  }
`;

export const TextButton = styled.button<ITextButtonProps>`
  ${sharedStyle}

  height: 18px;
  font-size: 15px;
  line-height: 18px;
  border-radius: 0;
  background-color: ${({ theme }) => theme.color.transparent};
  color: ${({ theme }) => theme.color.primary};
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
