<style scoped lang='less'>
.cap-preview {
    position: fixed;
    left: 252px;
    right: 0;
    top: 42px;
    bottom: 302px;
    display: flex;

    .cap-scene-outer {
        overflow: scroll;
        flex: 1;
        z-index: 1;
        background: #262626;

        &::-webkit-scrollbar {
            display: none;
        }
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
    <div class="cap-preview"
        @dragover="onDragover"
        @drop="onDrop"
    >
        <div class="cap-scene-outer">
            <scene></scene>
        </div>
        <div class="cap-inspector-outer">
            <inspector></inspector>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import data from 'lib/data';

import { addLayer } from 'store/actions';
import Scene from './Scene.vue';
import Inspector from './Inspector.vue';

export default {
    name: 'CapPreview',
    components: {
        Scene,
        Inspector
    },
    methods: {

        onDragover (e) {
            e.preventDefault();
        },

        onDrop (e) {
            const dragFile = data.get('dragFile');
            const sourceid = dragFile.sourceid;
            const projectid = this.projectid;
            this.addLayer({ sourceid, projectid });
        }
    },
    vuex: {
        getters: {
            project: ({ project }) => project.common,
            projectid: ({ project }) => project.id
        },
        actions: {
            addLayer
        }
    }
};
</script>
