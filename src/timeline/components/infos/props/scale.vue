<template>
    <div
        class="timeline-item timeline-item-scale"
        :class="{ highlight: layer.highlight.scale }"
        @mouseover="layer.highlight.scale = true"
        @mouseout="layer.highlight.scale = false"
    >
        <keyframe-control
            :layer="layer"
            :prop="prop"
            :project="project"
        >
        </keyframe-control>
        <span class="timeline-item-label2">
            <number-setter
                :number="layer.scale.x.value"
                :layer="layer"
                :prop="prop"
                :project="project"
            >
            </number-setter>,
            <number-setter
                :number="layer.scale.y.value"
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

        name: 'ScaleInfo',

        components: {
            KeyframeControl,
            NumberSetter
        },

        data () {
            return {
                prop: 'scale'
            };
        },

        props: {
            layer: Object,
            project: Object
        }
    }
</script>