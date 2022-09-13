import { FRStep } from '@forgerock/javascript-sdk';

import { initialize } from '$lib/locale.store';
import Step from './stages.story.svelte';
import { loginStep, registrationStep } from './step.mock';

const frRegistrationStep = new FRStep(registrationStep);
const frLoginStep = new FRStep(loginStep);

initialize();

export default {
  argTypes: {
    step: { control: false },
    submitForm: { control: false },
  },
  component: Step,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Journey/Step',
};

export const Login = {
  args: {
    failureMessage: '',
    stage: 'UsernamePassword',
    step: frLoginStep,
    submitForm: () => {
      console.log('Form submitted.');
    },
  },
};
export const Registration = {
  args: {
    failureMessage: '',
    stage: 'Registration',
    step: frRegistrationStep,
    submitForm: () => {
      console.log('Form submitted.');
    },
  },
};
