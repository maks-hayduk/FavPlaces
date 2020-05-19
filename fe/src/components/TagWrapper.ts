import { styled } from 'theme';

export const TagWrapper = styled.div`
  height: 26px;
  background-color: ${({ theme }) => theme.color.silver};
 
  padding: 2px 4px;
  margin-right: 5px;
  font-size: 13px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
