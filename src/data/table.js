import React from 'react';
import Avatar from '@atlaskit/avatar';
import styled from 'styled-components';
import presidents from './presidents.json';
import lorem from './szoveg.json';
import Button, { ButtonGroup } from '@atlaskit/button';
import Avatars from '../components/Avatars';
import AddIcon from '@atlaskit/icon/glyph/editor/add';
import { format,getHours,getMinutes  } from 'date-fns'

function createKey(input) {
  return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

function getRandomString() {
  return `${lorem[Math.floor(Math.random() * lorem.length)]}`;
}

const Wrapper = styled.span`
  display: flex;
  align-items: center;
`;
const DateWrapper = styled.span`
`;

export const createHead = (withWidth: boolean) => {
  return {
    cells: [
      {
        key: 'date',
        isSortable: true,
        width: withWidth ? 150 : undefined,
      },
      {
        key: 'name',
        shouldTruncate: true,
        isSortable: false,
        width: withWidth ? 150 : undefined,
      },
      {
        key: 'participants',
        shouldTruncate: true,
        isSortable: false,
        width: withWidth ? 80 : undefined,
      },
      {
        key: 'description',
        isSortable: false,
        shouldTruncate: true,
        width: withWidth ? 240 : undefined,
      },
      {
        key: 'action_buttons',
        shouldTruncate: true,
        width: withWidth ? 55 : undefined,
      },
    ],
  };
};

var startHour = getHours(new Date(2012, 1, 29, 11, 45))
var endHour = getHours(new Date(2012, 1, 29, 12, 45))
var startMinute = getMinutes(new Date(2012, 1, 29, 11, 45))
var endMinute = getMinutes(new Date(2012, 1, 29, 11, 45))
export const head = createHead(true);

export const rows = presidents.map((president, index) => ({
  key: `row-${index}-${president.nm}`,
  cells: [
    { // Date
      key: createKey(president.nm),
      content: (
        <DateWrapper>
          <p><b>{format(new Date(2020,9,2), 'MMM, d')}</b> </p>
          {startHour}:{startMinute} - {endHour}:{endMinute}
        </DateWrapper>
      ),
    },
    { // Name
      key: president.id,
      content: createKey(president.pp),
    },
    { // Participants
      key: president.id,
      content: <Wrapper>
          <Avatars></Avatars> 
          <Button appearance="subtle" iconBefore={<AddIcon label="add"/>}></Button>
      </Wrapper>
    },
    { // Description
      content: getRandomString(),
    },
    { // Edit, delete button
      content: (
        <ButtonGroup>
            <Button> Edit </Button>
            <Button> Delete </Button>
        </ButtonGroup>
      ),
    },
  ],
}));
