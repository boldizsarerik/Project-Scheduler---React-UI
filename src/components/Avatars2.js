import React, { Fragment } from 'react';
import styled from 'styled-components';
import { AppearanceType, SizeType } from '@atlaskit/avatar';
import Button from '@atlaskit/button';
import AvatarGroup from '@atlaskit/avatar-group';
import { RANDOM_USERS, getAdorableAvatar } from '../data/av';

const ButtonGroup = styled.div`
  margin: 8px;
  text-align: center;
`;

export default () => {
  const data = RANDOM_USERS.slice(0, 10).map(user => ({
    ...user,
    appearance: 'circle',
    enableTooltip: true,
    size: 'medium',
    src: getAdorableAvatar(user.email)
  }));

  return (
    <AvatarGroup
      testId="overrides"
      appearance="stack"
      maxCount= "3"
      data={data}
      size="large"
      overrides={{
        AvatarGroupItem: {
          render: (Component, props, index) => {
            const avatarItem = <Component {...props} key={index} />;

            return index === data.length - 1 ? (
              <Fragment key={`${index}-overridden`}>
                {avatarItem}
                <ButtonGroup data-testid="load-more-actions">
                  <Button testId="load-more">Load more</Button>
                </ButtonGroup>
              </Fragment>
            ) : (
              avatarItem
            );
          },
        },
      }}
    />
  );
};