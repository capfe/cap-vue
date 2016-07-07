<style lang='less'>
.cap-control-layer {
    width: 100%;
    height: 100%;
    position: relative;
    pointer-events: none;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &-row {
        display: flex;
        justify-content: space-between;
    }
}
</style>

<template>
    <div class='cap-control-layer'>
        <div class="cap-control-layer-row">
            <cap-control-anchor :class="cap-control-anchor-lt"></cap-control-anchor>
            <cap-control-anchor :class="cap-control-anchor-t"></cap-control-anchor>
            <cap-control-anchor :class="cap-control-anchor-rt"></cap-control-anchor>
        </div>
        <div class="cap-control-layer-row">
            <cap-control-anchor :class="cap-control-anchor-l"></cap-control-anchor>
            <cap-control-anchor :class="cap-control-anchor-r"></cap-control-anchor>
        </div>
        <div class="cap-control-layer-row">
            <cap-control-anchor :class="cap-control-anchor-lb"></cap-control-anchor>
            <cap-control-anchor :class="cap-control-anchor-b"></cap-control-anchor>
            <cap-control-anchor :class="cap-control-anchor-rb"></cap-control-anchor>
        </div>
    </div>

</template>

<script>
import CapControlAnchor from './ControlAnchor.vue';

export default {
    name: 'CapControlLayer',
    components: {
        CapControlAnchor
    }
}
</script>
