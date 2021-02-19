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

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
