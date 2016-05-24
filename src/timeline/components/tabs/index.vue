<template>
    <div class="timeline-tabs-wrap">
        <div
            v-for="tab in tabs"
            class="timeline-tabs-item"
            data-id="{{ tab.id }}"
            v-bind:class="{ 'current': tab.focus }"
            v-on:click="changeTab"
        >
            <em
                class="iconfont"
                v-on:click="closeTab"
            >&#xe627;</em>
            <span>{{ tab.name }}</span>
        </div>
    </div>
</template>

<script>

    import $ from 'jquery';
    import { getParent } from '../../../common/lib/utils.js';


    export default {

        name: 'TimelineTabs',

        props: {
            tabs: Array
        },

        data () {
            return {
                classname: 'timeline-tabs-item'
            };
        },

        methods: {

            closeTab: function (e) {
                let me = this;
                let tar = getParent(e.target, me.classname);
                // alert($(tar).data('id'));
            },

            changeTab: function (e) {
                let me = this;
                let tar = getParent(e.target, me.classname);
                // alert($(tar).data('id'));
            }
        }
    }

</script>

<style lang="less">

</style>