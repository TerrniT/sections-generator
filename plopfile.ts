import type { NodePlopAPI } from "plop"

import generateBaseSection from "./generator/modules/baseSection"

export default function (plop: NodePlopAPI) {
  // Config
  plop.setWelcomeMessage("Sections Generator");

  // Helpers
  plop.setHelper('uppercase', (txt) => txt.toUpperCase());

  generateBaseSection(plop);
}