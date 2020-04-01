import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from '@atlaskit/modal-dialog';
import Page from '@atlaskit/page';
import '@atlaskit/css-reset';
import AddNewEvent from '../components/AddNewEvent';
import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme';

const MYDIV= styled.div`
  padding-top: ${gridSize() * 2}px;
  margin-right: 20px;
  margin-left: 20px;
`;

export default class App extends Component {
  state = {
    isModalOpen: false,
  };

  static childContextTypes = {
    showModal: PropTypes.func,
  }

  getChildContext() {
    return {
      showModal: this.showModal,
    };
  }

  showModal = () => {
    this.setState({ isModalOpen: true });
  }

  hideModal = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div>
        <Page>
          {this.props.children}
        </Page>
        
        <div>
          {
            this.state.isModalOpen && (
              
              <Modal
                actions={[{ text: 'Cancel', onClick: this.hideModal }]}
                onClose={this.hideModal}
                height="800px"
                width="large"
              >
                <MYDIV>
                <font size="4" color="#717a8a">Create Event</font>
                 <AddNewEvent></AddNewEvent>
                 </MYDIV>
              </Modal>
            )
          }
        </div>
     
      </div>
    );
  }
}
