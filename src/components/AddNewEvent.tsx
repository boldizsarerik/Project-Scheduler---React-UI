import TextField from '@atlaskit/textfield';
import { Checkbox } from '@atlaskit/checkbox';
import React, { Fragment } from 'react';
import Form, { Field, ErrorMessage, CheckboxField } from '@atlaskit/form';
import { gridSize } from '@atlaskit/theme';
import { DatePicker, TimePicker } from '@atlaskit/datetime-picker';
import Same_line10 from './Same_line10';
import Select from '@atlaskit/select';
import Section from './Section';
import TextEditor from '../components/TextEditor';

const customStyles = {
  container(styles) {
    return { ...styles, width: '300%' };
  },
};
const customStyles2= {
  container(styles) {
    return { ...styles, width: '42%' };
  },
};
const customStyles3 = {
  container(styles) {
    return { ...styles, width: '70%' };
  },
};
const flavors = [
  { label: 'Erik', value: '1' },
  { label: 'Patrik', value: '2' },
  { label: 'László', value: '3' },
  { label: 'Arnold', value: '4' },
  { label: 'Hunor', value: '5' },
  { label: 'Norbert', value: '6' },
  { label: 'Márk', value: '7' },
];

const text= {
  color: "#97a0b0",
  margin: 0,
  padding: 0,
}

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Form onSubmit={data => console.log(data)}>
      {({ formProps }) => (
        <form {...formProps} >
          <Field name="eventname" defaultValue="" label="Event name" isRequired>
            {({ fieldProps }) => <TextField width="large" {...fieldProps} />}
          </Field>
          <Same_line10>
          <Field name="eventdate1" label="Event Date" defaultValue="" isRequired>
          {({ fieldProps }) => <DatePicker {...fieldProps} innerProps={{ style: { width: gridSize() * 14 } }} />}
          </Field> 
          <div style={
      {marginTop: '21.5px'}}>
          <Field name="time" label="" defaultValue="" isRequired>
          {({ fieldProps }) => <TimePicker {...fieldProps} innerProps={{ style: { width: gridSize() * 9 } }} />}
          </Field>
          </div>
          <div style={
      {marginTop: '38px'}}> to </div>
          <div style={
      {marginTop: '21.5px'}}>
          <Field name="time2" label="" defaultValue="" isRequired>
          {({ fieldProps }) => <TimePicker {...fieldProps} innerProps={{ style: { width: gridSize() * 9 } }} />}
          </Field> 
          </div>
          <div style={
      {marginTop: '21.5px'}}>
          <Field name="eventdate2" label="" defaultValue="" isRequired>
          {({ fieldProps }) => <DatePicker {...fieldProps} innerProps={{ style: { width: gridSize() * 14 } }} />}
          </Field>  
          </div>
          </Same_line10>
          <Same_line10>
          <div style={
      {marginTop: '6px'}}>
          <CheckboxField name="allday" value="allday">
             {({ fieldProps }) => <Checkbox {...fieldProps} label="All day" />}
           </CheckboxField>
           </div>
           <Field name="repeat" id="repeat" label="">
                  {({ fieldProps: { id, ...rest } }) => (
                     <Select
                     id={`${id}-select`}
                     className="single-select"
                     classNamePrefix="react-select"
                     options={[
                      { label: 'Does not repeat', value: '1' },
                      { label: 'Every Day', value: '2' },
                      { label: 'Every Week', value: '3' },
                     ]}
                     placeholder="Choose&hellip;"
                     styles={customStyles}
                   />
                  )}
                </Field>
                </Same_line10>
                <hr></hr>
                <Field name="project" id="project" label="Project" isRequired>
                  {({ fieldProps: { id, ...rest } }) => (
                    <Select
                      id={`${id}-select`}
                      options={[
                        { label: 'Project1', value: '1' },
                        { label: 'Project2', value: '2' },
                        { label: 'Project3', value: '3' },
                        { label: 'Project4', value: '4' },
                        { label: 'Project5', value: '5' },
                      ]}
                      placeholder="Choose a project&hellip;"
                      styles={customStyles2}
                    />
                  )}
                </Field>
                <Field name="participants" id='participants' label="Participants" defaultValue={[]}>
            {({ fieldProps: { id, ...rest }, error }) => (
              <Fragment>
                <Select
                  validationState={error ? 'error' : 'default'}
                  inputId={id}
                  placeholder="Select participants&hellip;"
                  styles={customStyles3}
                  options={flavors}
                  isMulti
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </Fragment>
            )}
          </Field>
          <p style={text}>Begin typing to find users or press down to select a suggester user</p>
          <Section></Section>
          <Field name="description" id="description" label="Description">
          {({ fieldProps: { id, ...rest }, error }) => (
          <TextEditor></TextEditor>
          )}
          </Field>
           </form>)}
    </Form>
  </div>
);