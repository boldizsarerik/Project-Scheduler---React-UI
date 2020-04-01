import React, { PureComponent } from 'react';
import { Checkbox } from '@atlaskit/checkbox';

interface State {
  isChecked: boolean;
  onChangeResult: string;
}

export default class ControlledExample extends PureComponent<void, State> {
  state = {
    isChecked: false,
    onChangeResult: 'Check & Uncheck to trigger onChange',
  };

  onChange = (event: any) => {
    this.setState({
      isChecked: !this.state.isChecked,
      onChangeResult: `this.props.isChecked: ${event.target.checked}`,
    });
  };

  render() {
    return (
     <div style={
      {marginTop: '8px'}}>
        <Checkbox 
          isChecked={this.state.isChecked}
          onChange={this.onChange}
          isFullWidth={true}
          label="Recurring"
          value="Recurring"
          name="controlled-checkbox"
        />
        </div>
    );
  }
}