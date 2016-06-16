<template>
    <div
        class="timeline-item timeline-item-opacity"
    >
        <keyframe :layer="layer" :prop="prop"></keyframe>
    </div>
</template>

<script>

    import Keyframe from './keyframe.vue';

    export default {

        name: 'OpacityBar',

        components: {
            Keyframe
        },

        props: {
            layer: Object
        },

        data () {
            return {
                prop: 'opacity'
            };
        }
    }

</script>