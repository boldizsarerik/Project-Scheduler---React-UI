import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';

export default class HomePage extends Component {
  static contextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
  };

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Demo Schedule</PageTitle>
        <MainSection />
        <ButtonGroup>
          <Button appearance="primary" onClick={this.context.showModal} onClose={() => { }}>+ New Event</Button>
          <Button onClick={this.context.addFlag}>Flag Button</Button>
          <Button>Első saját gomb</Button>
        </ButtonGroup>
      </ContentWrapper>
    );
  }
}
