import React from 'react';
import { AppearanceType, SizeType } from '@atlaskit/avatar';
import AvatarGroup from '@atlaskit/avatar-group';
import { RANDOM_USERS } from '../components/av';
import { AtlassianConnect } from "../types/jira-cloud-api";

declare const AP: AtlassianConnect;

interface Avatar {
  avatar?: string;
}

class Avatars extends React.Component<{ avatar }, { URL: string, name: string }>{
  constructor(props) {
    super(props);
    this.state = {
      URL: 'Üres avatar',
      name: 'Üres név',
    }
  }

  componentDidMount() {
    let ez = this;
    AP.request('/rest/api/2/user/bulk?accountId=5bffb0cfa1b46046f530c813', {
      success: function (responseText) {
        var json = (JSON.parse(responseText));
        var avatarUrl = json.values[0].avatarUrls["48x48"];
        var displayname = json.values[0].displayName;
        if (ez.state.URL != avatarUrl) {
          ez.setState({
            URL: avatarUrl,
            name: displayname
          })
        }
      }
    });
  }

  render() {
    const { avatar } = this.props;
    const data = RANDOM_USERS.map(d => ({
      email: d.email,
      key: d.email,
      name: this.state.name,
      href: '#',
      appearance: 'circle' as AppearanceType,
      size: 'medium' as SizeType,
      src: this.state.URL,
      enableTooltip: true,
    }));

    return (
      <div style={{ maxWidth: 270 }}>
        <div>Users: {avatar}</div>
        <AvatarGroup
          maxCount={3}
          appearance="stack"
          onAvatarClick={console.log}
          data={data}
          size="large"
        />
      </div>
    );
  }
}
export default Avatars