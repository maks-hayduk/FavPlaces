import { styled } from 'theme';

export const ActionIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryTransperacy};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primaryLight};
  }
`;
