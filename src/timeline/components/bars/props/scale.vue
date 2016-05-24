<template>
    <div
        class="timeline-item timeline-item-scale"
        :class="{ highlight: layer.highlight.scale }"
        @mouseover="layer.highlight.scale = true"
        @mouseout="layer.highlight.scale = false"
    >
        <keyframe :layer="layer" :prop="prop" :project="project"></keyframe>
    </div>
</template>

<script>

    import Keyframe from './keyframe.vue';
    import store from '../../../../store.js';

    export default {

        name: 'ScaleBar',

        components: {
            Keyframe
        },

        props: {
            layer: Object,
            project: Object
        },

        data () {
            return {
                prop: 'scale'
            };
        }
    }

</script>