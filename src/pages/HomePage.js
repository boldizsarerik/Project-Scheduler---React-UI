import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import Section from '../components/Section';
import ContentWrapper from '../components/ContentWrapper';
import Same_line from '../components/Same_line';
import DynamicTable from '@atlaskit/dynamic-table';
import Datetime from '../components/Datetime';
import Checkbox from '../components/Checkbox';
import Checkbox2 from '../components/Checkbox2';
import Title from '../components/Title';
import Avatars from '../components/Avatars';
import Avatars2 from '../components/Avatars2';

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

        <DynamicTable
          head={
            {
              cells: [
                {
                  isSortable: true,
                  key: 'Date',
                  content: 'Date',
                  width: 150
                },
                {
                  isSortable: false,
                  key: 'Name',
                  content: 'Name',
                  width: 150
                },
                {
                  isSortable: false,
                  key: 'Participants',
                  content: 'Participants ',
                  width: 150
                },
                {
                  isSortable: false,
                  key: 'Description',
                  content: 'Description',
                  width: 150
                },
                {
                  isSortable: false,
                  key: 'Buttons',
                  content: 'Action Buttons',
                  width: 150
                }
              ]
            }
          }
          rows={
            [{
              key: '1',
              cells: [
                {
                  key: '1-1',
                  content: 'Valami dátum'
                },
                {
                  key: '1-2',
                  content: 'Kickoff meeting'
                },
                {
                  key: '1-3',
                  content: <Avatars2></Avatars2>
                },
                {
                  key: '1-4',
                  content:  'Az event leírása...'
                },
                {
                  key: '1-5',
                  content:  <ButtonGroup><Button>Edit</Button> <Button>Delete</Button></ButtonGroup>
                }
              ]
            },
              {
                key: '2',
                cells: [
                  {
                    key: '2-1',
                    content: 'Patrik'
                  },
                  {
                    key: '2-2',
                    content: 24
                  },
                  {
                    key: '2-3',
                    content: 40
                  }
                ]
              },
              {
                key: '3',
                cells: [
                  {
                    key: '3-1',
                    content: 'Ádám'
                  },
                  {
                    key: '3-2',
                    content: 19
                  },
                  {
                    key: '3-3',
                    content: 30
                  }
                ]
              },
              {
                key: '4',
                cells: [
                  {
                    key: '4-1',
                    content: 'Márk'
                  },
                  {
                    key: '4-2',
                    content: 12
                  },
                  {
                    key: '4-3',
                    content: 20
                  }
                ]
              },
              {
                key: '5',
                cells: [
                  {
                    key: '4-1',
                    content: 'Márk'
                  },
                  {
                    key: '4-2',
                    content: 1000
                  },
                  {
                    key: '4-3',
                    content: 20
                  }
                ]
              },
              {
                key: '6',
                cells: [
                  {
                    key: '4-1',
                    content: 'Márk'
                  },
                  {
                    key: '4-2',
                    content: 102
                  },
                  {
                    key: '4-3',
                    content: 20
                  }
                ]
              },
              {
                key: '7',
                cells: [
                  {
                    key: '4-1',
                    content: 'Márk'
                  },
                  {
                    key: '4-2',
                    content: 1
                  },
                  {
                    key: '4-3',
                    content: 20
                  }
                ]
              },
              {
                key: '8',
                cells: [
                  {
                    key: '4-1',
                    content: 'Márk'
                  },
                  {
                    key: '4-2',
                    content: 3
                  },
                  {
                    key: '4-3',
                    content: 20
                  }
                ]
              },
              {
                key: '9',
                cells: [
                  {
                    key: '4-1',
                    content: 'Márk'
                  },
                  {
                    key: '4-2',
                    content: 5
                  },
                  {
                    key: '4-3',
                    content: 20
                  }
                ]
              },
              {
                key: '10',
                cells: [
                  {
                    key: '4-1',
                    content: 'Márk'
                  },
                  {
                    key: '4-2',
                    content: 7
                  },
                  {
                    key: '4-3',
                    content: 20
                  }
                ]
              },
              {
                key: '11',
                cells: [
                  {
                    key: '4-1',
                    content: 'Márk'
                  },
                  {
                    key: '4-2',
                    content: 94
                  },
                  {
                    key: '4-3',
                    content: 20
                  }
                ]
              }

            ]
          }
          rowsPerPage={10}
          defaultPage={1}
          isRankingDisabled = {false}
          loadingSpinnerSize="large"
          isLoading={false}
          isFixedSize
          defaultSortKey="Name"
          defaultSortOrder="ASC"
          onSort={() => console.log('onSort')}
          onSetPage={() => console.log('onSetPage')}
        />

</ContentWrapper>
    );
  }
}
