import React from 'react';

import { Accordion } from './Accordion';

export default {
  title: 'Example/Accordion',
  component: Accordion,
  argTypes: {
    statusColor: { control: 'color' },
  },
};

const Template = (args) => <Accordion {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  // primary: true,
  // label: 'Button',
};
