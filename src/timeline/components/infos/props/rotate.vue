<template>
    <div
        class="timeline-item timeline-item-rotate"
        :class="{ highlight: layer.highlight.rotate }"
        @mouseover="layer.highlight.rotate = true"
        @mouseout="layer.highlight.rotate = false"
    >
        <keyframe-control
            :layer="layer"
            :prop="prop"
            :project="project"
        >
        </keyframe-control>
        <span class="timeline-item-label2">
            <number-setter
                :number="layer.rotate.x.value"
                :layer="layer"
                :prop="prop"
                :project="project"
            >
            </number-setter>,
            <number-setter
                :number="layer.rotate.y.value"
                :layer="layer"
                :prop="prop"
                :project="project"
            >
            </number-setter>
        </span>
    </div>
</template>

<script>

    import KeyframeControl from './control.vue';
    import NumberSetter from '../../../../common/components/number.vue';

    export default {

        name: 'RotateInfo',

        components: {
            KeyframeControl,
            NumberSetter
        },

        data () {
            return {
                prop: 'rotate'
            };
        },

        props: {
            layer: Object,
            project: Object
        }
    }
</script>