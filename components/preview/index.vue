<style scoped lang='less'>
.cap-preview {
    position: fixed;
    left: 252px;
    right: 0;
    top: 42px;
    /*bottom: 302px;*/
    display: flex;

    .cap-scene-outer {
        overflow: scroll;
        flex: 1;
        z-index: 1;
        background: #262626;
    }
    .cap-inspector-outer {
        flex: 0 0 300px;
        z-index: 2;
        height: 100%;
        background: #141414;
    }
}

</style>

<template>
    <div class="cap-preview">
        <div class="cap-scene-outer">
            <scene></scene>
        </div>
        <div class="cap-inspector-outer">
            <!-- <inspector></inspector> -->
        </div>
    </div>
</template>

<script>
import Scene from './Scene.vue';
import Inspector from './Inspector.vue';

export default {
    name: 'CapPreview',
    components: {
        Scene,
        // Inspector
    },
    vuex: {
        getters: {
            project: ({ project }) => project.common
        }
    }
};
</script>
