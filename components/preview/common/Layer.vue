<style lang='less'>
    .cap-layer {
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
        <div class='label' style="display:none;">
            lid: !!lid}}
            <br>
            x: !!layer.position.x.value}}
            y: !!layer.position.y.value}}
            width: !!layer.size.x.value}}
            height: !!layer.size.y.value}}
            rotate: !!layer.rotate.x.value}} !!layer.rotate.y.value}} !!layer.rotate.z.value}}
            scale: !!layer.scale.x.value}} !!layer.scale.y.value}}
            skew: !!layer.skew.x.value}} !!layer.skew.y.value}}
            border: !!layer.border.width.value}}px !!layer.border.style.value}} !!layer.border.color.value}}
            borderRadius: !!layer.border.radius.value}}
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
    watch: {
        imgSrc () {
            console.log('watch imgSrc')
        }
    },
    computed: {
        imgSrc () {
            const srcid = this.layer.sourceid;
            const sroot = this.server.root;
            const files = this.files;
            let path;
            for (let file of files) {
                if (srcid === file._id) {
                    path = file.abspath;
                    break;
                }
            }

            return `${sroot}${path}`;
        },
        layer () {
            let layers = this.layers;
            let keyframes = this.allKeyframes;
            let curFrameIndex = this.curFrameIndex;
            let layer = {};
            let lid = this.lid;
            for (var index in layers) {
                if (lid == layers[+index]._id) {
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
                width: `100px`,
                height: `100px`,
                background: `url(${this.imgSrc})`,
                transformOrigin: `0px 0px`,
                transform: `translateX(${this.layer.position.x.value}px)
                            translateY(${this.layer.position.y.value}px)
                            rotateX(${this.layer.rotate.x.value}deg)
                            rotateY(${this.layer.rotate.y.value}deg)
                            scaleX(${this.layer.scale.x.value})
                            scaleY(${this.layer.scale.y.value})`,
                // borderWidth: `${this.layer.border.width.value}px`,
                // borderRadius: `${this.layer.border.radius.value}px`,
                // borderColor: `${this.layer.border.color.value}`,
                // borderStyle: `${this.layer.border.style.value}`

            }
        },
        originStyle () {
            return {
                // left: `${this.layer.origin.x.value}px`,
                // top: `${this.layer.origin.y.value}px`
            }
        }
    },
    vuex: {
        getters: {
            curFrameIndex: ({ project }) => project.common.frameIndex,
            layers: ({ layers }) => layers.all,
            allKeyframes: ({ keyframes }) => keyframes.all,
            files: ({ statics }) => statics.statics.files,
            server: ({ base }) => base.server
        }
    }
}
</script>
