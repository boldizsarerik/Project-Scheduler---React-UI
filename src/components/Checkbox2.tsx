import React from 'react';
import { Checkbox } from '@atlaskit/checkbox';

const DefaultCheckbox = () => {
  return (
    <div style={
      {marginTop: '8px'}}>
    <Checkbox
      value="Not Recurring"
      label="Not Recurring"
      onChange={() => {}}
      name="Not Recurring"
      testId="cb-default"
    />
    </div>
  );
};

export default DefaultCheckbox;