<template>
    <div id="app">
        <cap-header></cap-header>
        <cap-siderbar></cap-siderbar>
        <cap-preview></cap-preview>
        <cap-timeline></cap-timeline>
    </div>
</template>

<script>
    import CapHeader from './header/index.vue';
    import CapSiderbar from './siderbar/index.vue';
    import CapTimeline from './timeline/index.vue';
    import CapPreview from './preview/index.vue';
    import store from 'store/store';
    import { fetchProject } from 'store/actions';

    export default {

        name: 'CapIndexView',

        store,

        components: {
            CapHeader,
            CapSiderbar,
            CapTimeline,
            CapPreview
        },

        vuex: {
            actions: {
                fetchProject
            }
        },

        created () {
            this.fetchProject();
        }
    }

</script>

<style lang="less">
    @import '../assets/fonts/iconfont.less';
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background: #000000;
        font-size: 12px;
        .iconfont {
            font-size: 12px !important;
        }
    }
</style>