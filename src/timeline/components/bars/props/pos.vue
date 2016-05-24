<template>
    <div
        class="timeline-item timeline-item-pos"
        :class="{ highlight: layer.highlight.position }"
        @mouseover="layer.highlight.position = true"
        @mouseout="layer.highlight.position = false"
    >
        <keyframe :layer="layer" :prop="prop" :project="project"></keyframe>
    </div>
</template>

<script>

    import Keyframe from './keyframe.vue';
    import store from '../../../../store.js';

    export default {

        name: 'PositionBar',

        components: {
            Keyframe
        },

        props: {
            layer: Object,
            project: Object
        },
        
        data () {
            return {
                prop: 'position'
            };
        }
    }

</script>