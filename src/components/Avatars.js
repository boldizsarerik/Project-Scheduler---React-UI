import React from 'react';
import AvatarGroup from '@atlaskit/avatar-group';
import { RANDOM_USERS, getAdorableAvatar} from '../data/av';

export default () => {
  const data = RANDOM_USERS.map(d => ({
    email: d.email,
    key: d.email,
    name: d.name,
    appearance: 'circle',
    size: 'medium',
    src: getAdorableAvatar(d.email),
    enableTooltip: true,
  }));

  return (
    <div style={{ maxWidth: 270 }}>
        <AvatarGroup
          maxCount= "3"
          appearance="stack"
          onAvatarClick={console.log}
          data={data}
          size="large"
        />
    </div>
  );
};