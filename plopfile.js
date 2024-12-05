export default function (plop) {
  // Add uppercase helper
  plop.setHelper('uppercase', (txt) => txt.toUpperCase());

  plop.setGenerator('section', {
    description: 'Generate a new section',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Section name (PascalCase):',
      validate: (value) => {
        if (/^[A-Z][a-zA-Z0-9]+$/.test(value)) {
          return true;
        }
        return 'Section name must be in PascalCase (e.g., UserProfile)';
      }
    }],
    actions: [
      // Create section folder
      {
        type: 'add',
        path: 'src/sections/{{name}}/components/{{name}}Common.vue',
        templateFile: 'plop-templates/section/components/SectionCommon.vue.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/constants.ts',
        templateFile: 'plop-templates/section/constants.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/controls.ts',
        templateFile: 'plop-templates/section/controls.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/edit.ts',
        templateFile: 'plop-templates/section/edit.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/view.ts',
        templateFile: 'plop-templates/section/view.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/styles.ts',
        templateFile: 'plop-templates/section/styles.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/templates.ts',
        templateFile: 'plop-templates/section/templates.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/sections/{{name}}/types.ts',
        templateFile: 'plop-templates/section/types.ts.hbs'
      }
    ]
  });
}