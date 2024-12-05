import type { PromptQuestion } from 'node-plop';

import validateInput from '../utils/validateInput';

const questions: Array<PromptQuestion> = [
  {
    type: 'list',
    name: 'kind',
    message: 'Please choose the model type',
    default: 'bwm',
    choices: [
      { name: 'BWM', value: 'bwm' },
      { name: 'Mercedes', value: 'mercedes' },
    ],
    validate: (input: string) => validateInput(input),
  },
];

export default questions;