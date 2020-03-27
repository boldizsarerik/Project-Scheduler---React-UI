import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import Section from '../components/Section';
import ContentWrapper from '../components/ContentWrapper';
import Same_line from '../components/Same_line';
import Datetime from '../components/Datetime';
import Checkbox from '../components/Checkbox';
import Checkbox2 from '../components/Checkbox2';
import Title from '../components/Title';
import TABLE from '../components/TABLE';

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

        <ButtonGroup>
          <Button appearance="primary" onClick={this.context.showModal} onClose={() => { }}>+ New Event</Button>
          <Button onClick={this.context.addFlag}>Flag Button</Button>
        </ButtonGroup>
        <Section/>

      <Same_line>
      <Datetime></Datetime>
      <Checkbox></Checkbox>
      <Checkbox2></Checkbox2>
      </Same_line>
      <Section/>
      <TABLE></TABLE>

</ContentWrapper>
    );
  }
}
