import { type Component } from 'vue';
import { type Section, type SectionRegistry } from '../types/section';

export async function loadSections(): Promise<SectionRegistry> {
  const sections: SectionRegistry = {};
  
  // Dynamically import all section components
  const sectionModules = import.meta.glob('../sections/*/components/*Common.vue');
  
  for (const path in sectionModules) {
    const sectionName = path.split('/')[2]; // Get section name from path
    const module = await sectionModules[path]();
    
    sections[sectionName] = {
      name: sectionName,
      component: module.default as Component
    };
  }
  
  return sections;
}