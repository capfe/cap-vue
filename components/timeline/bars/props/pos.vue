<template>
    <div
        class="timeline-item timeline-item-pos"
    >
        <keyframe :layer="layer" :prop="prop"></keyframe>
    </div>
</template>

<script>

    import Keyframe from './keyframe.vue';

    export default {

        name: 'PositionBar',

        components: {
            Keyframe
        },

        props: {
            layer: Object
        },
        
        data () {
            return {
                prop: 'position'
            };
        }
    }

</script>