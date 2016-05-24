
<template>
    <div
        class="timeline-item"
        :class="{ highlight: layer.highlight.layer }"
        @mouseover="layer.highlight.layer = true"
        @mouseout="layer.highlight.layer = false"
    >
        <div
            class="timeline-bars-bar timeline-bars-normal"
            :style="{ background: layer.layerColor }"
        >
        </div>
    </div>
    <props-barlayer :layer="layer" :project="project"></props-barlayer>
</template>

<script>

    import store from '../../../store.js';
    import PropsBarlayer from './propslayer.vue';


    export default {

        name: 'InfosLayer',

        components: {
            PropsBarlayer
        },

        props: {
            layer: Object,
            index: Number,
            project: Object
        }
    }
</script>