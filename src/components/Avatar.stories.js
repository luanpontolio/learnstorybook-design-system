import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'DesignSystem/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const AvatarControl = Template.bind({});
AvatarControl.args = {
  src: 'https://avatars2.githubusercontent.com/u/263385',
  size: 'medium',
}