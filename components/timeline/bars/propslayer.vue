<template>
    <div
        class="timeline-layer-sub1"
        v-bind:class="{
            show: layer.statusLayer,
            hide: !layer.statusLayer
        }"
    >
        <div class="timeline-item"></div>
        <div
            class="timeline-layer-sub2"
            v-bind:class="{
                show: layer.statusProp,
                hide: !layer.statusProp
            }"
        >
            <position :layer="layer"></position>
            <scale :layer="layer"></scale>
            <rotate :layer="layer"></rotate>
            <opacity :layer="layer"></opacity>
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
            layer: Object
        }

    }
</script>