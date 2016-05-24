<template>
    <div
        class="timeline-item timeline-item-opacity"
        :class="{ highlight: layer.highlight.opacity }"
        @mouseover="layer.highlight.opacity = true"
        @mouseout="layer.highlight.opacity = false"
    >
        <keyframe :layer="layer" :prop="prop" :project="project"></keyframe>
    </div>
</template>

<script>

    import Keyframe from './keyframe.vue';
    import store from '../../../../store.js';

    export default {

        name: 'OpacityBar',

        components: {
            Keyframe
        },

        props: {
            layer: Object,
            project: Object
        },

        data () {
            return {
                prop: 'opacity'
            };
        }
    }

</script>