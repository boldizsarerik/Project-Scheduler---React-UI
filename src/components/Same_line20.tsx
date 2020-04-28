import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  > div + div {
    margin-left: 20px;
  }
`;

export default ({ children }) => (
  <Wrapper>{children}</Wrapper>
)

