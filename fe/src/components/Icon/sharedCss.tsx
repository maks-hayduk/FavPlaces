import { styled } from 'theme';

export interface IIconSharedProps {
  color?: string;
  className?: string;
  onClick?: (e?: React.MouseEvent<SVGElement | HTMLDivElement>) => void;
}

export const CircleIconWrapper = styled.div`
  width: 50px
  height: 50px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.iron};

  :hover {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  }

  :active {
    background-color: ${({ theme }) => theme.color.ironLight};
  }
`;
