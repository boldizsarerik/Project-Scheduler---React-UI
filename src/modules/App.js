import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Flag, { FlagGroup } from '@atlaskit/flag';
import Modal from '@atlaskit/modal-dialog';
import Page from '@atlaskit/page';
import '@atlaskit/css-reset';
import AddNewEvent from '../components/AddNewEvent';

export default class App extends Component {
  state = {
    flags: [],
    isModalOpen: false,
  };

  static childContextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
  }

  getChildContext() {
    return {
      showModal: this.showModal,
      addFlag: this.addFlag,
    };
  }

  showModal = () => {
    this.setState({ isModalOpen: true });
  }

  hideModal = () => {
    this.setState({ isModalOpen: false });
  }

  addFlag = () => {
    this.setState({ flags: [{ id: Date.now() }].concat(this.state.flags) });
  }

  onFlagDismissed = (dismissedFlagId) => {
    this.setState({
      flags: this.state.flags.filter(flag => flag.id !== dismissedFlagId),
    })
  }

  render() {
    return (
      <div>
        <Page>
          {this.props.children}
        </Page>
        <div>
          <FlagGroup onDismissed={this.onFlagDismissed}>
            {
              this.state.flags.map(flag => (
                <Flag
                  id={flag.id}
                  key={flag.id}
                  title="Flag Title"
                  description="Flag description"
                />
              ))
            }
          </FlagGroup>
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
