
export default (value: string): string | true => {
    if (/^[A-Z][a-zA-Z0-9]+$/.test(value)) {
      return true;
    }
    return 'Section name must be in PascalCase (e.g., UserProfile)';
  }