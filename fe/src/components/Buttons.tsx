import { Box } from '@rebass/grid';
import * as React from 'react';

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

export interface IButtonProps {
  disabled?: boolean;
  id?: string;
  onClick?(): void;
}

interface IIconButtonProps extends IButtonProps {
  icon: React.ReactNode;
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

export const CancelButton = styled.button`
  ${sharedStyle}

  height: 38px;
  padding: 10px 30px;
  text-align: center;
  color: ${({ theme }) => theme.color.red};
  background-color: ${({ theme }) => theme.color.lightPink};

  &:hover {
    background-color: ${({ theme }) => theme.color.lightRed};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:active {
    background-color: ${({ theme }) => theme.color.lightRed};
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

interface IWrapperProps {
  primary?: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  ${({ theme, primary }) =>
    primary
      ? `
  width: 18px;
  height: 18px;
  text-align: center;
  margin: auto;
  border-radius: 2px;
  background-color: ${theme.color.primary};
  color: red;
  `
      : ''}
`;

const StyledTextButton = styled(TextButton)`
  display: flex;
  margin: auto;
  align-items: center;
  div {
    display: flex;
  }

  svg {
    margin: auto;
    display: block;
  }

  .text-label {
    color: ${({ theme }) => theme.color.primary};
  }
`;

interface IIconTextButtonProps {
  primary?: boolean;
  Icon: React.ReactNode;
  text?: string;
  className?: string;
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
  id?: string;
}

export const IconTextButton: React.FC<IIconTextButtonProps> = ({
  primary = true,
  text,
  Icon,
  className,
  onClick,
  disabled,
  id
}) => {
  return (
    <div className={className} id={id ? id : '#'}>
      <StyledTextButton type="button" className="textbutton" onClick={onClick} disabled={disabled}>
        {Icon && <Wrapper primary={primary}>{Icon}</Wrapper>}
        {text && (
          <Box className="text-label" ml="7px">
            {text}
          </Box>
        )}
      </StyledTextButton>
    </div>
  );
};