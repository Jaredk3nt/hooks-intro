import React from 'react';
import styled from '@emotion/styled';

export default ({ children }) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
);

const StyledWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5 {
    max-width: 80%;
  }

  ul {
    li {
      font-size: 2.5rem;
      margin: 8px 0px;
    }
  }
`;