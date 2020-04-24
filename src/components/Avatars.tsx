import React, { Component } from 'react';
import { AppearanceType, SizeType } from '@atlaskit/avatar';
import AvatarGroup from '@atlaskit/avatar-group';
import { RANDOM_USERS, getAdorableAvatar, avatarUrl } from '../components/av';
import { AtlassianConnect } from "../types/jira-cloud-api";

declare const AP: AtlassianConnect;

interface Nev {
  nev?: string;
}

class Avatars extends React.Component<{ nev }, { avatarURL: string }>{
  constructor(props) {
    super(props);
    this.state = {
      avatarURL: 'Üres URL'
    }
  }

  getApObject() {
      AP.request('/rest/api/2/user/bulk?accountId=5bffb0cfa1b46046f530c813', {
        success: function (responseText) {
          var json = (JSON.parse(responseText));
          var avatarUrl2 = json.values[0].avatarUrls["48x48"];
          console.log(avatarUrl2);
          this.setState({
            avatarURL: avatarUrl2
          })
        }
      });
  }

  componentDidMount() {
    this.getApObject();
  }

  myfunc = () => {
    console.log(this.state.avatarURL);
  }

  data = RANDOM_USERS.map(d => ({
    email: d.email,
    key: d.email,
    name: d.name,
    href: '#',
    appearance: 'circle' as AppearanceType,
    size: 'medium' as SizeType,
    src: getAdorableAvatar(d.email),
    enableTooltip: true,
  }));

  render() {
    const { nev } = this.props;
    return (
      <div style={{ maxWidth: 270 }}>
        <div>Név: {nev}</div>
        <button onClick={this.myfunc}>Avatar</button>
        <AvatarGroup
          maxCount={3}
          appearance="stack"
          onAvatarClick={console.log}
          data={this.data}
          size="large"
        />
      </div>
    );
  }
}
export default Avatars