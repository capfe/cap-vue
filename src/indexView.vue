<template>
    <div id="app">
        <cap-header></cap-header>
        <cap-siderbar></cap-siderbar>
        <cap-preview></cap-preview>
        <cap-timeline :timeline="timeline"></cap-timeline>
    </div>
</template>

<script>

    import CapHeader from './header/index.vue';
    import CapSiderbar from './siderbar/index.vue';
    import CapTimeline from './timeline/index.vue';
    import CapPreview from './preview/index.vue';
    import store from './store.js';

    export default {

        name: 'CapIndexView',

        components: {
            CapHeader,
            CapSiderbar,
            CapTimeline,
            CapPreview
        },

        data () {
            return {
                timeline: {
                    tabs: [],
                    project: {}
                }
            };
        },

        route: {
            data ({ to }) {
                return {
                    timeline: {
                        tabs: store.fetchTabs(),
                        project: store.fetchProject()
                    }
                };
            }
        }

    }

</script>