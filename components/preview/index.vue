<template>
    <div class="preview"
        @dragover="onDragover"
        @drop="onDrop"
    >
        <div class="phone">
        </div>
        <div class="toolbar">
        </div>
    </div>
</template>

<script>

    import $ from 'jquery';
    import data from 'lib/data';

    import { addLayer } from 'store/actions';

    export default {

        name: 'CapPreview',

        methods: {

            onDragover (e) {
                e.preventDefault();
            },

            onDrop (e) {
                const dragFile = data.get('dragFile');
                const sourceid = dragFile.sourceid;
                const projectid = this.projectid;
                this.addLayer({ sourceid, projectid });
            },
        },

        vuex: {
            getters: {
                projectid: ({ project }) => project.id
            },
            actions: {
                addLayer
            }
        }
    }
</script>

<style lang="less">
    .preview {
        position: fixed;
        left: 252px;
        right: 0;
        top: 42px;
        bottom: 302px;
        .phone {
            margin-right: 302px;
            height: 100%;
            background: #262626;
        }
        .toolbar {
            width: 300px;
            position: fixed;
            right: 0;
            top: 43px;
            bottom: 252px;
            background: #141414;
        }
    }
</style>