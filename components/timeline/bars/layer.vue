
<template>
    <div
        class="timeline-item"
    >
        <div
            class="timeline-bars-bar timeline-bars-normal"
            :style="{ background: layer.tag }"
        >
        </div>
    </div>
    <props-barlayer :layer="layer"></props-barlayer>
</template>

<script>

    import PropsBarlayer from './propslayer.vue';


    export default {

        name: 'InfosLayer',

        components: {
            PropsBarlayer
        },

        props: {
            layer: Object
        }
    }
</script>

<style lang="less">
    .timeline-bars-normal {
        height: 16px;
        position: relative;
        top: 2px;
        background: #ef0;
    }
</style>
