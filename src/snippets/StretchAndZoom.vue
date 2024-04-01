<template>
    <div id="resizable" class="resizable" :style="{ width: width + 'px', height: height + 'px' }">
        <div class="resizer" @mousedown="startResize" />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    let width = ref(200);
    let height = ref(200);
    let resizing = ref(false);

    const startResize = (event: MouseEvent) => {
        event.preventDefault();
        resizing.value = true;
    };

    window.addEventListener('mousemove', (event) => {
        if (!resizing.value) return;
        width.value = event.clientX;
        height.value = event.clientY;
    });

    window.addEventListener('mouseup', () => {
        resizing.value = false;
    });
</script>

<style scoped>
    .resizable {
        position: relative;
        background: #f0f0f0;
    }
    .resizer {
        width: 10px;
        height: 10px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: #000;
        cursor: se-resize;
    }
</style>