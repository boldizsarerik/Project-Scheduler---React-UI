import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { QuickSearch, ObjectResult, ContainerResult, ResultItemGroup } from '@atlaskit/quick-search';

  // Inside a react component with proper state and stuff.. :
  export default () => {
    return (

      <QuickSearch
        isLoading={this.state.isLoading}
        onSearchInput={({ target }) => { this.search(target.value); }}
        value={this.state.query}
      >
        // render search results:
        <ResultItemGroup title="Issues">
          <ObjectResult name="Fix this and that" objectKey="JRA-123" /> 
          <ObjectResult name="More stuff" objectKey="JRA-124" /> 
        </ResultItemGroup>
        <ResultItemGroup title="Spaces">
          <ContainerResult name="Search and Smarts" /> 
        </ResultItemGroup>
      </QuickSearch>
    );
};