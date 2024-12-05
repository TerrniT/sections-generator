import type { PromptQuestion } from 'node-plop';

import validateSectionName from '../utils/validateSectionName';

export default [
    {
      type: 'input',
      name: 'name',
      message: 'Section name (PascalCase):',
      validate: (value) => validateSectionName(value),
    }
] satisfies Array<PromptQuestion>;
