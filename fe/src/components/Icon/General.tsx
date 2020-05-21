// @ts-ignore
import * as React from 'react';

import { CircleIconWrapper, IIconSharedProps } from './sharedCss';
import { ActionIconWrapper } from './Wrappers';

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

export const CrossIcon: React.FC<IIconSharedProps> = (props) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...props}>
    <path d="M16 1L1 16" stroke="#19323F" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 1L16 16" stroke="#19323F" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const EditIcon: React.FC<IIconSharedProps> = (props) => (
  <ActionIconWrapper {...props}>
    <svg viewBox="0 0 24 24" fill="#1B98E0" width="20px" height="20px">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  </ActionIconWrapper>
);

export const ShareIcon: React.FC<IIconSharedProps> = (props) => (
  <ActionIconWrapper {...props}>
     <svg viewBox="0 0 24 24" fill="#1B98E0" width="20px" height="20px">
      <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  </ActionIconWrapper>
);

export const ShareAllIcon: React.FC<IIconSharedProps> = (props) => (
  <ActionIconWrapper {...props}>
    <svg viewBox="0 0 24 24" fill="#1B98E0" width="20px" height="20px">
      <path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  </ActionIconWrapper>
);

export const AddImageIcon: React.FC<IIconSharedProps> = (props) => (
  <ActionIconWrapper {...props}>
    <svg viewBox="0 0 24 24" fill="#1B98E0" width="20px" height="20px">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/>
    </svg>
  </ActionIconWrapper>
);

export const ShowImagesIcon: React.FC<IIconSharedProps> = (props) => (
  <ActionIconWrapper {...props}>
    <svg viewBox="0 0 24 24" fill="#1B98E0" width="20px" height="20px">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"/>
    </svg>
  </ActionIconWrapper>
);

export const ArrowRightIcon: React.FC<IIconSharedProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="white" width="48px" height="48px" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
);

export const ArrowLeftIcon: React.FC<IIconSharedProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="white" width="48px" height="48px" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
  </svg>
);

export const DeleteItemIcon: React.FC<IIconSharedProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="red" width="36px" height="36px" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);

export const ExitIcon: React.FC<IIconSharedProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="white" width="28px" height="28px" {...props}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </svg>
);
