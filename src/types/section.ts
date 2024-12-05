export interface Section {
  name: string;
  component: any; // Vue component type
}

export interface SectionRegistry {
  [key: string]: Section;
}