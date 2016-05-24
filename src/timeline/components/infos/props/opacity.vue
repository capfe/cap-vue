<template>
    <div
        class="timeline-item timeline-item-opacity"
        :class="{ highlight: layer.highlight.opacity }"
        @mouseover="layer.highlight.opacity = true"
        @mouseout="layer.highlight.opacity = false"
    >
        <keyframe-control
            :layer="layer"
            :prop="prop"
            :project="project"
        >
        </keyframe-control>
        <span class="timeline-item-label2">
            <number-setter
                :number="layer.opacity.value"
                :layer="layer"
                :prop="prop"
                :project="project"
                @change="alert(1)"
            >
            </number-setter>%
        </span>
    </div>
</template>

<script>

    import KeyframeControl from './control.vue';
    import NumberSetter from '../../../../common/components/number.vue';

    export default {

        name: 'OpacityInfo',

        components: {
            KeyframeControl,
            NumberSetter
        },

        data () {
            return {
                prop: 'opacity'
            };
        },

        props: {
            layer: Object,
            project: Object
        }
    }
</script>