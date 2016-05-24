<template>
    <div
        class="timeline-item timeline-item-pos"
        :class="{ highlight: layer.highlight.position }"
        @mouseover="layer.highlight.position = true"
        @mouseout="layer.highlight.position = false"
    >
        <keyframe-control
            :layer="layer"
            :prop="prop"
            :project="project"
        >
        </keyframe-control>
        <span class="timeline-item-label2">
            <number-setter
                :number="layer.position.x.value"
                :layer="layer"
                :prop="prop"
                :project="project"
            >
            </number-setter>,
            <number-setter
                :number="layer.position.y.value"
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

        name: 'PositionInfo',

        components: {
            KeyframeControl,
            NumberSetter
        },

        data () {
            return {
                prop: 'position'
            };
        },

        props: {
            layer: Object,
            project: Object
        }
    }
</script>