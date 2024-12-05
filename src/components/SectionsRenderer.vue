<!-- SectionsRenderer.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { loadSections } from '../utils/sections';
import type { SectionRegistry } from '../types/section';

const sections = ref<SectionRegistry>({});

onMounted(async () => {
  sections.value = await loadSections();
});
</script>

<template>
  <div class="sections-container">
    <template v-for="(section, name) in sections" :key="name">
      <component :is="section.component" />
    </template>
  </div>
</template>

<style scoped>
.sections-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>