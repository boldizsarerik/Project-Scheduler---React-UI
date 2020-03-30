import React from 'react';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import TextArea from '@atlaskit/textarea';
import { Checkbox } from '@atlaskit/checkbox';
import Form, { Field, CheckboxField, FormFooter, Fieldset } from '@atlaskit/form';

export default () => (
  <div
    style={{
      display: 'flex',
      width: '400px',
      flexDirection: 'column',
    }}
  >
    <Form onSubmit={data => console.log(data)}>
      {({ formProps }) => (
        <form {...formProps} >
          <Field name="eventname" defaultValue="" label="Event name" isRequired>
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>
           <CheckboxField name="allday" value="allday">
             {({ fieldProps }) => <Checkbox {...fieldProps} label="All day" />}
           </CheckboxField>
           <Field
                  name="description"
                  defaultValue=""
                  label="Description"
                >
                  {({ fieldProps }) => <TextArea {...fieldProps} />}
                </Field>
           </form>
      )}
    </Form>
  </div>
);