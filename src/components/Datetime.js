import React from 'react';
import { Label } from '@atlaskit/field-base';
import { gridSize } from '@atlaskit/theme';
import { DatePicker, DateTimePicker, TimePicker } from '@atlaskit/datetime-picker';

export default () => {
  return (
    <div>
      <Label label="Dátum választás" />
      <DatePicker
        innerProps={{ style: { width: gridSize() * 20 } }}
        onChange={console.log}
      />
    </div>
  );
};