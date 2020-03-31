import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from '@atlaskit/modal-dialog';
import Page from '@atlaskit/page';
import '@atlaskit/css-reset';
import AddNewEvent from '../components/AddNewEvent';

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
                heading="Create Event"
                actions={[{ text: 'Cancel', onClick: this.hideModal }]}
                onClose={this.hideModal}
                height="800px"
                width="large"
              >
                 <AddNewEvent></AddNewEvent>
              </Modal>
            )
          }
        </div>
      </div>
    );
  }
}
