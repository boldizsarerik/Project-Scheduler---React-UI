import React from 'react';
import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme';

const MYDIV = styled.div`
  padding-bottom: ${gridSize() * 2}px;
  margin-right: 50px;
  margin-left: 50px;
`;

export default ({ children }) => (
  <MYDIV>{children}</MYDIV>
)

