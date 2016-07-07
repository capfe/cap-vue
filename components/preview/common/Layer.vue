<style lang='less'>
    .cap-layer {
        border: 1px solid black;
        background-color: #eeff00;
        position: absolute;
        user-select: none;
        cursor: default;
    }
    .origin-style {
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: #f00;
        transform: translateX(-50%) translateY(-50%);;
    }
    .label {
        position: absolute;
        width: 100px;
        height: 100px;
        left: 110%;
        top: 0;
        pointer-events: none;
    }
    .static {
        pointer-events: none;
    }
</style>

<template>
    <div class='cap-layer'
        data-draggable="layer"
        :style='style'
        :data-lid="lid">
        <div class='label'>
            lid: {{lid}}
            <br>
            x: {{layer.position.x.value}}
            y: {{layer.position.y.value}}
            width: {{layer.size.x.value}}
            height: {{layer.size.y.value}}
            rotate: {{layer.rotate.x.value}} {{layer.rotate.y.value}} {{layer.rotate.z.value}}
            scale: {{layer.scale.x.value}} {{layer.scale.y.value}}
            skew: {{layer.skew.x.value}} {{layer.skew.y.value}}
        </div>
        <cap-control-layer v-show="lid == this.clid"></cap-control-layer>
        <div class='origin-style' :style='originStyle'></div>
    </div>

</template>

<script>
import CapControlLayer from './ControlLayer.vue';

export default {
    name: 'CapLayer',
    ready () {
    },
    props: ['lid'],
    components: {
        CapControlLayer
    },
    computed: {
        layer () {
            let layers = this.originlayers;
            let keyframes = this.allKeyframes;
            let curFrameIndex = this.curFrameIndex;
            let layer = {};
            let lid = this.lid;
            for (var index in layers) {
                if (lid == layers[+index].id) {
                    layer = Object.assign({}, layers[+index]);
                }
            }
            if (layer) {
                for (var i = 0; i <= curFrameIndex; i++) {
                    let curKeyframe = keyframes[i];
                    if (!curKeyframe) {
                        continue;
                    }
                    let curLayer = curKeyframe[lid];
                    if (!curLayer) {
                        continue;
                    }
                    Object.assign(layer, curLayer);
                }
            }
            return layer;
        },
        style () {
            return {
                width: `${this.layer.size.x.value}px`,
                height: `${this.layer.size.y.value}px`,
                transformOrigin: `${this.layer.origin.x.value}px ${this.layer.origin.y.value}px`,
                transform: `translateX(${this.layer.position.x.value}px)
                            translateY(${this.layer.position.y.value}px)
                            rotateX(${this.layer.rotate.x.value}deg)
                            rotateY(${this.layer.rotate.y.value}deg)
                            rotateZ(${this.layer.rotate.z.value}deg)
                            scaleX(${this.layer.scale.x.value})
                            scaleY(${this.layer.scale.y.value})`

            }
        },
        originStyle () {
            return {
                left: `${this.layer.origin.x.value}px`,
                top: `${this.layer.origin.y.value}px`
            }
        }
    },
    vuex: {
        getters: {
            curFrameIndex: ({ project }) => project.common.frameIndex,
            originlayers: ({ project }) => project.common.layers,
            allKeyframes: ({ keyframes }) => keyframes.all,
        }
    }
}
</script>