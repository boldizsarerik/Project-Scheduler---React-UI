import React from 'react';
import styled from 'styled-components';
import { Grid, GridColumn } from '@atlaskit/page';
import { gridSize } from '@atlaskit/theme';

const Padding = styled.div`

  padding-bottom: ${gridSize() * 3}px;
`;

export default ({ children }) => (
  <Grid>

      <Padding>{children}</Padding>

  </Grid>
)