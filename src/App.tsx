import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from '@atlaskit/modal-dialog';
import { gridSize } from '@atlaskit/theme';
import HomePage from './pages/HomePage';
import styled from 'styled-components';
import '@atlaskit/css-reset';
import AddNewEvent from './components/AddNewEvent';

const MYDIV = styled.div`
  padding-top: ${gridSize() * 2}px;
  margin-right: 20px;
  margin-left: 20px;
`;

const title = {
  fontSize: 18,
  color: "#717a8a",
}

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

  create = ({ target }) => console.log(target.innerText);

  render() {
    return (
      <div>
        <div className="App">
        </div>
        <HomePage></HomePage>
        <div>
          {
            this.state.isModalOpen && (
              <Modal
                actions={[{ text: 'Create', onClick: this.create }, { text: 'Cancel', onClick: this.hideModal }]}
                onClose={this.hideModal}
                height="750px"
                width="large"
              >
                <MYDIV>
                  <p style={title}>Create Event</p>
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
