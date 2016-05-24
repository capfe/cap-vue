<template>
    <div
        class="timeline-item timeline-item-rotate"
        :class="{ highlight: layer.highlight.rotate }"
        @mouseover="layer.highlight.rotate = true"
        @mouseout="layer.highlight.rotate = false"
    >
        <keyframe :layer="layer" :prop="prop" :project="project"></keyframe>
    </div>
</template>

<script>

    import Keyframe from './keyframe.vue';
    import store from '../../../../store.js';

    export default {

        name: 'RotateBar',

        components: {
            Keyframe
        },

        props: {
            layer: Object,
            project: Object
        },

        data () {
            return {
                prop: 'rotate'
            };
        }
    }

</script>