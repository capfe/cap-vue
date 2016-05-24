<template>
    <div
        class="timeline-layer-sub1"
        v-bind:class="{
            show: layer.status.layer,
            hide: !layer.status.layer
        }"
    >
        <div
            class="timeline-item"
            :class="{ highlight: layer.highlight.props }"
            @mouseover="layer.highlight.props = true"
            @mouseout="layer.highlight.props = false"
        >
        </div>
        <div
            class="timeline-layer-sub2"
            v-bind:class="{
                show: layer.status.props,
                hide: !layer.status.props
            }"
        >
            <position :layer="layer" :project="project"></position>
            <scale :layer="layer" :project="project"></scale>
            <rotate :layer="layer" :project="project"></rotate>
            <opacity :layer="layer" :project="project"></opacity>
        </div>
    </div>
    
</template>

<script>

    import Position from './props/pos.vue';
    import Scale from './props/scale.vue';
    import Rotate from './props/rotate.vue';
    import Opacity from './props/opacity.vue';

    export default {

        name: 'PropsBarlayer',

        components: {
            Position,
            Scale,
            Rotate,
            Opacity
        },

        props: {
            layer: Object,
            project: Object
        }

    }
</script>