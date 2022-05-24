import Checkbox from './checkbox.svelte';

export default {
  component: Checkbox,
  title: 'Primitives/Checkbox',
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    key: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'boolean' },
    },
  },
};

export const Simple = {
  args: {
    label: 'Check me!',
    key: 'uniqueId',
    onChange: () => console.log('Checkbox value updated'),
    value: false,
  }
};

export const VeryLongText = {
  args: {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    key: 'uniqueId',
    onChange: () => console.log('Checkbox value updated'),
    value: false,
  }
};
