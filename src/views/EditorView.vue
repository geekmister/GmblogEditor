<script setup lang="ts">
  import 'cherry-markdown/dist/cherry-markdown.css';
  import Cherry from 'cherry-markdown';

  const cherryInstance = new Cherry({
    id: 'markdown-container',
    value: '# welcome to cherry editor!',
  });
</script>

<template>
  <div id="markdown-container" class="gbba-view-editor-container" />
</template>

<style scoped>
  .gbba-view-editor-container {
    width: 100%;
    height: 100%;
  }
</style>