import React, { Component } from 'react';
import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';
import { caption, head, rows } from '../data/table.js';

const Wrapper = styled.div`
  min-width: 300px;
`;

export default class extends Component<{}, {}> {
  render() {
    return (
      <Wrapper>
        <DynamicTable
          head={head}
          rows={rows}
          rowsPerPage={10}
          defaultPage={1}
          isFixedSize
          defaultSortKey="term"
          defaultSortOrder="ASC"
          onSort={() => console.log('onSort')}
          onSetPage={() => console.log('onSetPage')}
        />
      </Wrapper>
    );
  }
}