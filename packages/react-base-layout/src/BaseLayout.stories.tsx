import { Meta, StoryObj } from '@storybook/react';
import { BaseLayout } from './BaseLayout';
import image from './example.png';

const meta = {
  component: BaseLayout,
} as Meta;

type Story = StoryObj<typeof BaseLayout>;
export const Base: Story = {
  args: {
    title: 'でぶろぐ',
    hide: false,
    iconImage: {
      src: image,
      alt: 'example title image',
    },
  },
};
export default meta;
