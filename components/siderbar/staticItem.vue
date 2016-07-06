<template>
    <fold-item
        v-for="fold of folds"
        :fold="fold"
        :index="$index"
        :parentid="parentid"
    ></fold-item>
    <file-item
        v-for="file of files"
        :file="file"
        :index="$index"
        :parentid="parentid"
    ></file-item>
</template>

<script>

    import FileItem from './fileItem.vue';
    import FoldItem from './foldItem.vue';

    export default {

        name: 'StaticItem',

        props: {
            parentid: String
        },

        components: {
            FileItem,
            FoldItem
        },


        vuex: {
            getters: {
                files: ({ statics }) => statics.files,
                folds: ({ statics }) => statics.folds
            }
        }
    }
</script>