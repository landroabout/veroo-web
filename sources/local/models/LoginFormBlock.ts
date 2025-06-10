import { Model } from '@stackbit/types';

export const LoginFormBlock: Model = {
  type: 'object',
  name: 'LoginFormBlock',
  label: 'Login Form',
  labelField: 'elementId',
  fields: [
    {
      type: 'string',
      name: 'elementId',
      label: 'Element ID',
      required: true,
      default: 'login-form',
      hidden: false,
      localized: false
    },
    {
      type: 'string',
      name: 'title',
      label: 'Form Title',
      required: false,
      default: 'Login',
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
