// @ts-ignore
import * as React from 'react';

import { CircleIconWrapper, IIconSharedProps } from './sharedCss';

export const DeleteIcon: React.FC<IIconSharedProps> = props => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" {...props}>
    <g opacity="0.5">
      <path
        d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 
  10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
        stroke="#19323F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g clipPath="url(#clip0)">
        <path
          d="M9.06287 6.05887L7.79416 7.32759L9.06287 8.5963C9.14908 8.68251 9.14908 8.82118 9.06287 
  8.90739L8.90733 9.06293C8.82112 9.14914 8.68245 9.14914 8.59624 9.06293L7.32753 
  7.79422L6.05881 9.06293C5.97261 9.14914 
  5.83393 9.14914 5.74772 9.06293L5.59218 8.90739C5.50598 8.82118 5.50598 8.68251
   5.59218 8.5963L6.86089 7.32759L5.59218 6.05887C5.50598
   5.97267 5.50598 5.83399 5.59218 5.74779L5.74772 5.59224C5.83393 5.50604 5.97261 5.50604 6.05881
    5.59224L7.32753 6.86096L8.59624 5.59224C8.68245 
   5.50604 8.82112 5.50604 8.90733 5.59224L9.06287 5.74779C9.1472 5.83399 9.1472 5.97267 9.06287 6.05887Z"
          fill="#19323F"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="3.6" height="3.6" fill="white" transform="translate(5.52631 5.52637)" />
      </clipPath>
    </defs>
  </svg>
);

export const SearchIcon: React.FC<IIconSharedProps> = props => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" {...props}>
    <path
      d="M12.9111 12.2281L9.63574 8.95273C9.57734 8.89434 9.50117 8.86387 9.41992 8.86387H9.1584C10.0293 
7.92188 10.5625 6.66504 10.5625 5.28125C10.5625 2.36387 8.19863 0 5.28125 0C2.36387 0 0 
2.36387 0 5.28125C0 8.19863 2.36387 
10.5625 5.28125 10.5625C6.66504 10.5625 7.92188 10.0293 8.86387 9.16094V9.41992C8.86387 
9.50117 8.89688 9.57734 8.95273 9.63574L12.2281 
12.9111C12.3475 13.0305 12.5404 13.0305 12.6598 12.9111L12.9111 12.6598C13.0305 12.5404 
13.0305 12.3475 12.9111 12.2281ZM5.28125 9.75C2.81074 
9.75 0.8125 7.75176 0.8125 5.28125C0.8125 2.81074 2.81074 0.8125 5.28125 0.8125C7.75176 
0.8125 9.75 2.81074 9.75 5.28125C9.75 7.75176 7.75176
 9.75 5.28125 9.75Z"
      fill={props.color}
    />
  </svg>
);

export const PrimaryLeftArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path
      d="M5.11871 7.20041L9.07173 3.12388C9.22945 2.95871 9.48448 2.95871 9.6422 3.12388L9.88046 3.37339C10.0382 3.53856 10.0382 3.80564 9.88046 3.97081L6.44757 7.49912L9.8771 11.0274C10.0348 11.1926 10.0348 11.4597 9.8771 11.6248L9.63885 11.8744C9.48113 12.0395 9.22609 12.0395 9.06838 11.8744L5.11536 7.79783C4.96099 7.63266 4.96099 7.36558 5.11871 7.20041Z"
      fill="#1B98E0"
    />
  </svg>
);

const BurgerDefaultIcon = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
    <path d="M1 6H16" stroke="#19323F" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 1H16" stroke="#19323F" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 11H16" stroke="#19323F" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BurgerIcon: React.FC<IIconSharedProps> = (props) => (
  <CircleIconWrapper {...props} >
    <BurgerDefaultIcon />
  </CircleIconWrapper>
);

export const DoubleShewron: React.FC<IIconSharedProps> = (props) => (
  <svg height="20px" viewBox="0 0 26 26" width="20px" {...props}>
    <g>
      <polygon fill="#231F20" points="23.885,0.58 25.969,2.664 15.133,13.5 25.969,24.336 23.885,26.42 10.965,13.5  "/>
      <polygon fill="#231F20" points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 -0.035,13.5  "/>
    </g>
  </svg>
);
