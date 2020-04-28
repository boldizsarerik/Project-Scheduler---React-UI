import React from 'react';
import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';
import { format,getHours,getMinutes  } from 'date-fns'
import Button, { ButtonGroup } from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/editor/add';
import Avatars from '../components/Avatars';
import axios from 'axios';

const Wrapper2 = styled.div`
min-width: 300px;
font-size: medium;
`;
const Wrapper = styled.span`
  display: flex;
  align-items: center;
`;
const DateWrapper = styled.span`
`;

interface IProps {
}

interface IState {
  events?: any;
  participants?: any;
}

export default class EventsTable extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      events: []
    };
  }

  pagenumber = 1;

  componentDidMount() {
    axios.get(`https://snxfjiap10.execute-api.eu-west-2.amazonaws.com/prod/event/${this.pagenumber}`)
      .then(res => {
        const events = res.data.events;
        this.setState({ events });
      })
  }

//startHour = getHours(new Date(2012, 1, 29, 11, 45))
//endHour = getHours(new Date(2012, 1, 29, 15, 45))
//startMinute = getMinutes(new Date(2012, 1, 29, 11, 45))
//endMinute = getMinutes(new Date(2012, 1, 29, 15, 45))

createHead = (withWidth: boolean) => {
    return {
      cells: [
        {
          key: 'date',
          isSortable: false,
          width: withWidth ? 150 : undefined,
        },
        {
          key: 'name',
          shouldTruncate: false,
          isSortable: false,
          width: withWidth ? 150 : undefined,
        },
        {
          key: 'participants',
          shouldTruncate: false,
          isSortable: false,
          width: withWidth ? 150 : undefined,
        },
        {
          key: 'description',
          isSortable: false,
          shouldTruncate: false,
          width: withWidth ? 150 : undefined,
        },
        {
          key: 'action_buttons',
          shouldTruncate: false,
          width: withWidth ? 70 : undefined,
        },
      ],
    };
  };

  render() {
  const rows = this.state.events.map(event => ({
    cells: [
      { // Date
      //  key: this.createKey(president.nm), <p><b>{format(new Date(2020,9,2), 'MMM, d')}</b> </p>
      key: event.name,
        content: (
          <DateWrapper>
            
            <p><b>{event.date_start}</b> </p>
            {event.time_start} - {event.time_end}
          </DateWrapper>
        ),
      },
      { // Name
       key: event.name,
       content: event.name
      },
      { // Participants
     //   key: president.id,
     key: event.name,
        content: <Wrapper>
            <Avatars avatar={event.participant_ids+""}></Avatars>
            <Button appearance="subtle" iconBefore={<AddIcon label="add"/>}></Button>
        </Wrapper>
        
      },
      { // Description
        key: event.name,
        content: event.description,
      },
      { // Edit, delete button
        key: event.name,
        content: (
          <ButtonGroup>
              <Button> Edit </Button>
              <Button> Delete </Button>
          </ButtonGroup>
        ),
      },
    ],
  }));
    return (
      <Wrapper2>
        <DynamicTable
          head={this.createHead(true)}
          rows={rows}
          rowsPerPage={10}
          defaultPage={this.pagenumber}
          loadingSpinnerSize="large"
          isLoading={false}
          isFixedSize
          highlightedRowIndex={2}
        />
      </Wrapper2>
    );
  }
}
