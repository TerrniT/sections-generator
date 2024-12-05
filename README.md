# Section Generator

A Vue 3 project with TypeScript and Vite that includes a powerful section generator using Plop.js. This template helps you quickly scaffold new sections with a consistent structure and best practices.

## Project Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Section Generator

This project includes a section generator that creates a standardized folder structure for new sections.

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run plop` | Starts the section generator |

### Generated Structure

When you run the section generator, it creates a new section with the following structure:

```
src/sections/YourSectionName/
├── components/
│   └── YourSectionNameCommon.vue
├── constants.ts
├── controls.ts
├── edit.ts
├── view.ts
├── styles.ts
├── templates.ts
└── types.ts
```

### File Purposes

| File | Purpose |
|------|---------|
| `YourSectionNameCommon.vue` | Main component of the section |
| `constants.ts` | Section-specific constants |
| `controls.ts` | Control configurations for the section |
| `edit.ts` | Edit mode configuration |
| `view.ts` | View mode configuration |
| `styles.ts` | CSS-in-JS styles |
| `templates.ts` | Section templates |
| `types.ts` | TypeScript interfaces and types |

### Auto-Loading Sections

Sections are automatically loaded and rendered in the application. The `SectionsRenderer` component handles the dynamic loading of all section components.

## Development

### Project Structure

```
src/
├── components/
│   └── SectionsRenderer.vue
├── sections/
│   └── [Generated sections]
├── types/
│   └── section.ts
├── utils/
│   └── sections.ts
└── main.ts
```

### Technology Stack

- Vue 3
- TypeScript
- Vite
- Plop.js
