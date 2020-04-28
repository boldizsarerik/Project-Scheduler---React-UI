import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import Title from '../components/Title';
import Button from '@atlaskit/button';
import Section from '../components/Section';
import Datetime from '../components/Datetime';
import Datetime2 from '../components/Datetime2';
import Same_line20 from '../components/Same_line20';
import Checkbox from '../components/Checkbox';
import Checkbox2 from '../components/Checkbox2';
import styled from 'styled-components';
import Table from '../components/Table';

const Table_style = styled.div`
  min-width: 300px;
  table 
  {
    border-collapse: collapse;
  }
  tr
   { 
    border: solid;
    border-color: #ccd1d8;
    border-width: 1px 0;
  }
  tr:first-child 
  {
    border-top: none;
  }
  tr:last-child 
  {
    border-bottom: none;
  }
  div:nth-of-type(2)
  {
    justify-content: flex-end;
  }
`;

export default class HomePage extends Component {
  static contextTypes = {
    showModal: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
  };

  render() {
    return (
      <ContentWrapper>
        <Title></Title>
        <Section></Section>
        <Button appearance="primary" onClick={this.context.showModal}>+ New Event</Button>
        <Section></Section>
        <Same_line20>
          <Datetime></Datetime>
          <Datetime2></Datetime2>
          <Checkbox></Checkbox>
          <Checkbox2></Checkbox2>
        </Same_line20>
        <Section></Section>
        <Table_style>
          <Table></Table>
        </Table_style>
      </ContentWrapper>
    );
  }
}
