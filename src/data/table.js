import React from 'react';
import Avatar from '@atlaskit/avatar';
import styled from 'styled-components';
import presidents from './presidents.json';
import lorem from './szoveg.json';
import Button, { ButtonGroup } from '@atlaskit/button';
import Avatars from '../components/Avatars';
import AddIcon from '@atlaskit/icon/glyph/editor/add';

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

const AvatarWrapper = styled.div`
  margin-right: 8px;
`;

export const caption = 'List of US Presidents';

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
        width: withWidth ? 100 : undefined,
      },
      {
        key: 'description',
        isSortable: false,
        shouldTruncate: true,
        width: withWidth ? 250 : undefined,
      },
      {
        key: 'action_buttons',
        shouldTruncate: true,
        width: withWidth ? 50 : undefined,
      },
    ],
  };
};

export const head = createHead(true);

export const rows = presidents.map((president, index) => ({
  key: `row-${index}-${president.nm}`,
  cells: [
    { // Date
      key: president.id,
      content: (
        <Wrapper>
          <AvatarWrapper>
            <Avatar
              name={president.nm}
              size="medium"
              src={`https://api.adorable.io/avatars/24/${encodeURIComponent(
                president.nm,
              )}.png`}
            />
          </AvatarWrapper>
          <a href="https://atlassian.design">{president.nm}</a>
        </Wrapper>
      ),
    },
    { // Name
      key: president.id,
      content: president.pp,
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
