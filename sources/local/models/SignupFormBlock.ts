import { Model } from '@stackbit/types';

export const SignupFormBlock: Model = {
  type: 'object',
  name: 'SignupFormBlock',
  label: 'Signup Form',
  labelField: 'elementId',
  fields: [
    {
      type: 'string',
      name: 'elementId',
      label: 'Element ID',
      required: true,
      default: 'signup-form',
      hidden: false,
      localized: false
    },
    {
      type: 'string',
      name: 'title',
      label: 'Form Title',
      required: false,
      default: 'Sign Up',
      hidden: false,
      localized: false
    },
    {
      type: 'model',
      name: 'submitButton',
      label: 'Submit button',
      required: false,
      hidden: false,
      localized: false,
      models: ['SubmitButtonFormControl']
    }
  ],
  fieldGroups: [
    { name: 'settings', label: 'Settings', icon: 'gear' }
  ]
};
