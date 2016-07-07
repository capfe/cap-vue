<style lang='less'>
.cap-control-anchor {
    width: 4px;
    height: 4px;
    background-color: #0f0;
    pointer-events: auto;
}

.cap-control-anchor-ns {
    cursor: ns-resize;
}

.cap-control-anchor-ew {
    cursor: ew-resize;
}

.cap-control-anchor-nwse {
    cursor: nwse-resize;
}

.cap-control-anchor-nesw {
    cursor: nesw-resize;
}

.cap-control-anchor-lt {
    transform-origin: left top;
}

.cap-control-anchor-t {
    transform-origin: center top;
}

.cap-control-anchor-rt {
    transform-origin: right top;
}

.cap-control-anchor-l {
    transform-origin: left center;
}

.cap-control-anchor-r {
    transform-origin: right center;
}

.cap-control-anchor-lb {
    transform-origin: left bottom;
}

.cap-control-anchor-b {
    transform-origin: center bottom;
}

.cap-control-anchor-rb {
    transform-origin: right bottom;
}
</style>

<template>
    <div class="cap-control-anchor" data-draggable="anchor"></div>
</template>

<script>
export default {
    name: 'CapControlAnchor'
}
</script>
