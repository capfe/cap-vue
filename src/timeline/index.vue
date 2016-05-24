
<template>
    <div id="timeline" class="timeline">
        <div class="timeline-tabs">
            <timeline-tabs :tabs="timeline.tabs"></timeline-tabs>
        </div>
        <div class="timeline-main">
            <timeline-layers :project="timeline.project"></timeline-layers>
            <timeline-footer></timeline-footer>
        </div>
    </div>
</template>

<script>

    import TimelineTabs from './components/tabs/index.vue';
    import TimelineFooter from './components/footer/index.vue';
    import TimelineLayers from './components/layers.vue';

    export default {

        name: 'CapTimeline',

        components: {
            TimelineTabs,
            TimelineFooter,
            TimelineLayers
        },

        props: {
            timeline: Object
        }
    };

</script>