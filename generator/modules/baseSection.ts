import type { NodePlopAPI } from "plop"
import validateSectionName from "./utils/validateSectionName"

export default (plop: NodePlopAPI) => {
plop.setGenerator('section', {
    description: 'Generate a new section',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Section name (PascalCase):',
      validate: (value) => validateSectionName(value),
    }],
    actions: [
      // Create section folder
      {
        type: 'add',
        path: 'src/sections/{{name}}/components/{{name}}Common.vue',
        templateFile: 'generator/templates/section/components/SectionCommon.vue.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/constants.ts',
        templateFile: 'generator/templates/section/constants.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/controls.ts',
        templateFile: 'generator/templates/section/controls.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/edit.ts',
        templateFile: 'generator/templates/section/edit.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/view.ts',
        templateFile: 'generator/templates/section/view.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/styles.ts',
        templateFile: 'generator/templates/section/styles.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/templates.ts',
        templateFile: 'generator/templates/section/templates.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/types.ts',
        templateFile: 'generator/templates/section/types.ts.hbs'
      }
    ]
  });
}