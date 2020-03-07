import * as React from 'react';
import { Route, Switch } from 'react-router';

import { styled } from 'theme';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;

interface IRoot {}

const Root: React.FC<IRoot> = ({  }) => {

  return (
    <Wrapper>
      foo
    </Wrapper>
  );
};

export default Root;
