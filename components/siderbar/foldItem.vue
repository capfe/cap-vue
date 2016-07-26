<template>
    <div>
    <div 
        class="statics-tr statics-trd"
        :class="{ highlight: fold.highlight }"
        @click="onSelected"
    >
        <div
            class="statics-td statics-name"
            :style="{ width: (level - 1) * 15 + 125 + 'px' }"
            title="{{ fold.name }}"
        >
            <em
                class="iconfont"
                :class="{
                    open: fold.open == '1',
                    close: fold.open == '0'
                }"
                @click="toggleFold"
                :style="{ marginLeft: (fold.level - 1) * 15 + 'px' }"
            ></em>
            <div
                class="statics-namecon"
                @dblclick="onFocusName"
            >
                <i class="iconfont fold"></i>
                <input
                    value="{{ fold.name }}"
                    @blur="onBlurName"
                    v-if="fold.focus"
                />
                <span v-else>{{ fold.name }}</span>
            </div>
        </div>
        <div class="statics-td statics-tag"><span :style="{background: '#f7ffa3'}"></span></div>
        <div class="statics-td statics-type">文件夹</div>
        <div class="statics-td statics-size"> - </div>
        <div
            class="statics-td statics-comments"
            @dblclick="onFocusComments"
        >
            <input
                value="{{ fold.comments }}"
                @blur="onBlurComments"
                v-if="fold.focus"
            />
            <span v-else>{{ fold.comments }}</span>
        </div>
        <div class="statics-td statics-path" title="{{ fold.abspath }}">{{ fold.abspath }}</div>
    </div>
    <fold-item
        v-for="foldItem of folds"
        :fold="foldItem"
        :index="$index"
        v-show="fold.open == '1'"
    >
    </fold-item>
    <file-item
        v-for="fileItem of files"
        :file="fileItem"
        :index="$index"
        v-show="fold.open == '1'"
    >
    </file-item>
    </div>
</template>

<script>

    import FileItem from './fileItem.vue';
    import FoldItem from './foldItem.vue';
    import {
        staticFoldToggle,
        staticFocus,
        staticBlur,
        staticHighlight,
        staticUpdate
    } from 'store/actions';
  

    export default {

        name: 'FoldItem',

        components: {
            FoldItem,
            FileItem
        },

        data () {
            return {
                folds: this.fold.statics.folds,
                files: this.fold.statics.files
            }
        },

        props: {
            fold: Object,
            index: Number
        },

        methods: {
            toggleFold () {
                let index = this.index;
                let parent = this.fold.parent;
                let type = 'fold';
                let id = this.fold._id;
                let field = 'open';
                let value = this.fold.open == '1' ? 0 : 1;
                this.staticFoldToggle({ index, parent, type, id, field, value });
            },

            onFocusName (e) {
                let type = 'fold';
                let index = this.index;
                let field = 'name';
                let parent = this.fold.parent;
                this.staticFocus({ index , type, field, parent });
            },

            onBlurName (e) {
                let index = this.index;
                let type = 'fold';
                let parent = this.fold.parent;
                let field = 'name';
                let id = this.fold._id;
                let value = e.target.value;
                let abspath = this.fold.abspath;
                this.staticBlur({ index, type, parent });
                if (value != this.fold.name) {
                    this.staticUpdate({ index, type, parent, field, value, id, abspath });
                }
            },

            onFocusComments (e) {
                let parent = this.fold.parent;
                let index = this.index;
                let type = 'fold';
                let field = 'comments';
                this.staticFocus({ index, type, field, parent });
            },

            onBlurComments (e) {
                let index = this.index;
                let type = 'fold';
                let parent = this.fold.parent;
                let field = 'comments';
                let id = this.fold._id;
                let value = e.target.value;

                this.staticBlur({ index, type, parent });
                if (value != this.fold.comments) {
                    this.staticUpdate({ index, type, parent, field, value, id });
                }
            },

            onSelected () {
                let index = this.index;
                let type = 'fold';
                let parent = this.fold.parent;
                let id = this.fold._id;
                this.staticHighlight({ index, type, parent, id });
            }
        },

        vuex: {
            getters: {
                level: ({ statics }) => statics.level
            },
            actions: {
                staticFoldToggle,
                staticFocus,
                staticBlur,
                staticHighlight,
                staticUpdate
            }
        }
    }
</script>

<style lang="less" scoped>
    .statics-name {
        margin-left: 5px;
    }
</style>