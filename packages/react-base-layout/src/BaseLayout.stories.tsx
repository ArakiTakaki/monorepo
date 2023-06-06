import React from 'react';
import { BaseLayout } from './BaseLayout';

export default {
  component: BaseLayout,
  title: 'Task',
};

const Template = (args) => <BaseLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};
