import React from 'react';
import { AppearanceType, SizeType } from '@atlaskit/avatar';
import AvatarGroup from '@atlaskit/avatar-group';
import Avatars from '../components/Avatars';
import { RANDOM_USERS, getAdorableAvatar } from '../data/av';

export default () => {
  const data = RANDOM_USERS.slice(0, 10).map(user => ({
    ...user,
    appearance: 'circle',
    enableTooltip: true,
    size: 'medium',
    src: getAdorableAvatar(user.email)
  }));

  return (

    <div style={{ maxWidth: 270 }}>
<AvatarGroup
          appearance="stack"
          onAvatarClick={console.log}
          data={data}
          size="medium"
        />
    </div>
  );
};





