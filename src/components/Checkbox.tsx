import React from 'react';
import { Checkbox } from '@atlaskit/checkbox';

const DefaultCheckbox = () => {
  return (
    <div style={
      {marginTop: '8px'}}>
    <Checkbox
      value="Recurring"
      label="Recurring"
      onChange={() => {}}
      name="Recurring"
      testId="cb-default"
    />
    </div>
  );
};

export default DefaultCheckbox;