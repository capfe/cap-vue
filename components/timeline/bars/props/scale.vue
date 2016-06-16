<template>
    <div
        class="timeline-item timeline-item-scale"
    >
        <keyframe :layer="layer" :prop="prop"></keyframe>
    </div>
</template>

<script>

    import Keyframe from './keyframe.vue';

    export default {

        name: 'ScaleBar',

        components: {
            Keyframe
        },

        props: {
            layer: Object
        },

        data () {
            return {
                prop: 'scale'
            };
        }
    }

</script>