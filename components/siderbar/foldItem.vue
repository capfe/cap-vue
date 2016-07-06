<template>
    <div 
        class="statics-tr statics-trd"
        :class="{ highlight: fold.highlight }"
        @click="onSelected"
    >
        <div class="statics-td statics-flag">
            <em
                class="iconfont"
                :class="{ open: fold.open, close: !fold.open }"
                data-id="{{ fold._id }}"
                @click="toggleFold"
            ></em>
        </div>
        <div class="statics-td statics-name" @click="onFocusName">
            <i class="iconfont fold"></i>
            <input value="{{ fold.name }}" @blur="onBlurName" v-if="fold.focus"/>
            <span v-else>{{ fold.name }}</span>
        </div>
        <div class="statics-td statics-tag"><span :style="{background: '#f7ffa3'}"></span></div>
        <div class="statics-td statics-type">文件夹</div>
        <div class="statics-td statics-size"> - </div>
        <div class="statics-td statics-comments" @click="onFocusComments">
            <input value="{{ fold.comments }}" @blur="onBlurComments" v-if="fold.focus"/>
            <span v-else>{{ fold.comments }}</span>
        </div>
        <div class="statics-td statics-path"> - </div>
    </div>
</template>

<script>

    import data from 'lib/data';
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
        },

        props: {
            fold: Object,
            parentid: String,
            index: Number
        },

        methods: {
            toggleFold (foldid) {
                this.staticFoldToggle({ foldid });
            },

            onFocusName (e) {
                const type = 'fold';
                const index = this.index;
                const field = 'name';
                this.staticFocus({ index , type, field });
            },

            onBlurName (e) {
                const index = this.index;
                const type = 'fold';
                const field = 'name';
                const value = e.target.value;
                const id = this.fold._id;
                this.staticBlur({ index, type });
                this.staticUpdate({ index, type, field, value, id });
            },

            onFocusComments (e) {
                const type = 'fold';
                const index = this.index;
                const field = 'comments';
                this.staticFocus({ index , type, field });
            },

            onBlurComments (e) {
                const index = this.index;
                const type = 'fold';
                const field = 'comments';
                const value = e.target.value;
                const id = this.fold._id;
                this.staticBlur({ index, type });
                this.staticUpdate({ index, type, field, value, id});
            },

            onSelected () {
                const index = this.index;
                const type = 'fold';
                this.staticHighlight({ index, type });
            }
        },

        vuex: {
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