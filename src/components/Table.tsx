import React, { Component } from 'react';
import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';
import { head, rows } from '../components/TableConfig';

const Wrapper = styled.div`
min-width: 300px;
font-size: medium;
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
          loadingSpinnerSize="large"
          isLoading={false}
          isFixedSize
          highlightedRowIndex={2}
          defaultSortKey="term"
          defaultSortOrder="ASC"
          onSort={() => console.log('onSort')}
          onSetPage={() => console.log('onSetPage')}
        />
      </Wrapper>
    );
  }
}
