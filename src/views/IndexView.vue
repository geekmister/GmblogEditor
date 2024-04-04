<script setup lang="js">
    import 'cherry-markdown/dist/cherry-markdown.css';
    import Cherry from 'cherry-markdown';

    let save = Cherry.createMenuHook("保存", {
        iconName: "",
        onClick: () => {
            console.log(cherryInstance.getValue());
        }
    });

    const cherryInstance = new Cherry({
        id: "markdown-container",
        value: "",
        toolbars: {
            toolbar: ['theme','bold','italic','strikethrough','|','color','header','ruby','|','list','panel','detail','|','save'],
            customMenu: {
                save: save
            }
        },
    });
</script>

<template>
    <div id="markdown-container" class="gbba-view-editor-container" />
</template>

<style scoped>
    .Gmblog-index-view-editor-container {
        width: vw;
        height: vh;
    }
</style>