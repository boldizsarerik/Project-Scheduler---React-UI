import React from 'react';
import axios from 'axios';
import { participants } from '@atlaskit/util-data-test/dist/cjs/task-decision/story-data';

interface IProps {
}

interface IState {
  name?: any;
  events?: any;
  participants?: any;
}

export default class PersonList extends React.Component<IProps, IState>  {
  constructor(props: IProps) {
    super(props);
    this.state = {
      events: [],
      participants: []
    };
  }

  componentDidMount() {
    axios.get(`https://snxfjiap10.execute-api.eu-west-2.amazonaws.com/prod/event/1`)
      .then(res => {
        console.log(res.data.events);
        const events = res.data.events;
        this.setState({ events });
      })
  }

  render() {
    return (
      <ul>
        { this.state.events.map(event => 
        <li>{event.participant_ids+""}</li>
        )}
      </ul>
    )
  }
}