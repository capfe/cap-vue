<template>
    <div
        class="timeline-item timeline-item-rotate"
    >
        <keyframe :layer="layer" :prop="prop"></keyframe>
    </div>
</template>

<script>

    import Keyframe from './keyframe.vue';

    export default {

        name: 'RotateBar',

        components: {
            Keyframe
        },

        props: {
            layer: Object
        },

        data () {
            return {
                prop: 'rotate'
            };
        }
    }

</script>