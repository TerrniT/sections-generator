import type { NodePlopAPI } from "plop"
import prompts from "../prompts/baseSectionPrompt"

export default (plop: NodePlopAPI) => {
plop.setGenerator('section', {
    description: 'Generate a new section',
    prompts, 
    actions: [
      // Create section folder
      {
        type: 'add',
        path: 'src/sections/{{name}}/components/{{name}}Common.vue',
        templateFile: 'generator/templates/baseSection/components/SectionCommon.vue.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/constants.ts',
        templateFile: 'generator/templates/baseSection/constants.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/controls.ts',
        templateFile: 'generator/templates/baseSection/controls.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/edit.ts',
        templateFile: 'generator/templates/baseSection/edit.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/view.ts',
        templateFile: 'generator/templates/baseSection/view.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/styles.ts',
        templateFile: 'generator/templates/baseSection/styles.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/templates.ts',
        templateFile: 'generator/templates/baseSection/templates.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/types.ts',
        templateFile: 'generator/templates/baseSection/types.ts.hbs'
      }
    ]
  });
}