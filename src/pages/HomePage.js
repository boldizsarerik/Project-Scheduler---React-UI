import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '@atlaskit/button';
import Section from '../components/Section';
import ContentWrapper from '../components/ContentWrapper';
import Same_line20 from '../components/Same_line20';
import Datetime from '../components/Datetime';
import Datetime2 from '../components/Datetime2';
import Checkbox from '../components/Checkbox';
import Checkbox2 from '../components/Checkbox2';
import Title from '../components/Title';
import TABLE from '../components/TABLE';
import styled from 'styled-components';

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

export default class HomePage extends Component 
{
  static contextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
  };

  render() 
  {
    return (
<ContentWrapper>
      <Title></Title>
      <Section/>
      <Button appearance="primary" onClick={this.context.showModal} onClose={() => { }}>+ New Event</Button>
      <Section/>
      <Same_line20>
      <Datetime></Datetime>
      <Datetime2></Datetime2>
      <Checkbox></Checkbox>
      <Checkbox2></Checkbox2>
      </Same_line20>
      <Section/>
      <Table_style>
      <TABLE></TABLE>
      </Table_style>
      

</ContentWrapper>
    );
  }
}
